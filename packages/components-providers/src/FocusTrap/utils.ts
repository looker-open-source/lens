/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import { tabbable, FocusableElement } from 'tabbable'

const isSelectableInput = (
  node: FocusableElement
): node is HTMLInputElement => {
  const nodeAsInput = node as HTMLInputElement
  return (
    nodeAsInput.tagName !== undefined &&
    nodeAsInput.tagName.toLowerCase() === 'input' &&
    typeof nodeAsInput.select === 'function' &&
    !nodeAsInput.readOnly
  )
}

const checkFocusLost = () => {
  // If focused landed on body or nothing, return it to previous element
  // otherwise it's probably already on something useful/intentional
  return document.activeElement
    ? document.activeElement.tagName === 'BODY'
    : true
}

export const activateFocusTrap = (element: HTMLElement) => {
  console.log(element)
  const nodeFocusedBeforeActivation = document.activeElement
  let firstTabbableNode: FocusableElement = element
  let lastTabbableNode: FocusableElement = element
  let mostRecentlyFocusedNode: FocusableElement | null = null

  const getInitialFocusNode = () => {
    let node
    if (element.contains(document.activeElement)) {
      node = document.activeElement as HTMLElement
    } else {
      // Look for data-autofocus b/c React strips autofocus from dom
      // https://github.com/facebook/react/issues/11851
      const autoFocusElement = element.querySelector(
        '[data-autofocus="true"]'
      ) as HTMLElement

      // In the absence of autofocus, the surface will have initial focus
      const surfaceElement = element.querySelector(
        '[data-overlay-surface="true"]'
      ) as HTMLElement
      node = autoFocusElement || surfaceElement || element
    }

    if (!node) {
      throw new Error(
        'Your focus trap needs to have at least one focusable element'
      )
    }

    return node
  }

  const updateTabbableNodes = () => {
    const tabbableNodes = tabbable(element)
    firstTabbableNode = tabbableNodes[0] || getInitialFocusNode()
    lastTabbableNode =
      tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode()
  }

  const tryFocus = (node: FocusableElement) => {
    if (node === document.activeElement) return
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode())
      return
    }
    node.focus()
    mostRecentlyFocusedNode = node
    if (isSelectableInput(node)) {
      node.select()
    }
  }
  // In case focus escapes the trap for some strange reason, pull it back in.
  const checkFocusIn = (e: FocusEvent) => {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (element.contains(e.target as Node) || e.target instanceof Document) {
      return
    }
    e.stopImmediatePropagation()
    tryFocus(mostRecentlyFocusedNode || getInitialFocusNode())
  }

  const checkKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab' || e.keyCode === 9) {
      // Hijack Tab events on the first and last focusable nodes of the trap,
      // in order to prevent focus from escaping. If it escapes for even a
      // moment it can end up scrolling the page and causing confusion so we
      // kind of need to capture the action at the keydown phase.
      updateTabbableNodes()
      if (e.shiftKey && e.target === firstTabbableNode) {
        e.preventDefault()
        tryFocus(lastTabbableNode)
        return
      }
      if (!e.shiftKey && e.target === lastTabbableNode) {
        e.preventDefault()
        tryFocus(firstTabbableNode)
      }
    }
  }

  document.addEventListener('focusin', checkFocusIn, true)
  document.addEventListener('keydown', checkKey, {
    capture: true,
    passive: false,
  })

  const t = setTimeout(() => {
    tryFocus(getInitialFocusNode())
  }, 0)

  // Deactivate function
  return () => {
    clearTimeout(t)
    document.removeEventListener('focusin', checkFocusIn, true)
    document.removeEventListener('keydown', checkKey, true)

    // If focus lands on the body, move it back to where it was before the trap
    if (checkFocusLost() && nodeFocusedBeforeActivation) {
      ;(nodeFocusedBeforeActivation as HTMLElement).focus()
    }
  }
}
