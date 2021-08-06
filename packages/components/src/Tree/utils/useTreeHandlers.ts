/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import { CompatibleHTMLProps } from 'packages/design-tokens/src/system'
import { useState, FocusEvent } from 'react'
import { getNextFocusTarget, useWrapEvent } from '../../utils'

export const useTreeHandlers = ({
  onFocus,
  onMouseEnter,
  onMouseLeave,
}: Pick<
  CompatibleHTMLProps<HTMLElement>,
  'onBlur' | 'onFocus' | 'onMouseEnter' | 'onMouseLeave'
>) => {
  const [hovered, setHovered] = useState(false)

  // This is needed so that hover disclosed elements don't get lost during keyboard nav
  const handleItemBlur = (event: FocusEvent<HTMLElement>) => {
    const nextFocusTarget = getNextFocusTarget(event)

    if (
      nextFocusTarget &&
      !event.currentTarget.contains(nextFocusTarget as Node)
    ) {
      setHovered(false)
    }
  }
  const handleItemFocus = useWrapEvent(
    useWrapEvent(() => setHovered(true), onFocus)
  )

  const handleItemMouseEnter = useWrapEvent(
    () => setHovered(true),
    onMouseEnter
  )
  const handleItemMouseLeave = useWrapEvent(
    () => setHovered(false),
    onMouseLeave
  )

  return {
    handleItemBlur,
    handleItemFocus,
    handleItemMouseEnter,
    handleItemMouseLeave,
    hovered,
  }
}
