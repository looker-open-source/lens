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

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen, fireEvent } from '@testing-library/react'

import { MenuItem } from './MenuItem'

describe('MenuItem', () => {
  test('renders', () => {
    renderWithTheme(<MenuItem>who!</MenuItem>)
    expect(screen.getByText('who!')).toBeVisible()
  })

  test('detail', () => {
    renderWithTheme(<MenuItem detail="Is an excellent question">who!</MenuItem>)
    expect(screen.getByText('Is an excellent question')).toBeVisible()
  })

  test('icon', () => {
    renderWithTheme(<MenuItem icon="Beaker">Icon</MenuItem>)
    expect(screen.getByText('Icon')).toBeVisible()
  })

  test('artwork', () => {
    renderWithTheme(
      <MenuItem
        iconArtwork={
          <svg xmlns="http://www.w3.org/2000/svg">
            <title>SVG Title Here</title>
          </svg>
        }
      >
        Artwork
      </MenuItem>
    )
    expect(screen.getByTitle('SVG Title Here')).toBeInTheDocument()
  })

  test('disabled to be a button', () => {
    const callbackFn = jest.fn()

    renderWithTheme(
      <MenuItem
        disabled={true}
        href="https://google.com"
        onClick={callbackFn}
        target="_blank"
      >
        Item
      </MenuItem>
    )
    const item = screen.getByText('Item')
    expect(item.closest('button')).toBeInTheDocument()
  })

  test('disabled is not clickable', () => {
    const callbackFn = jest.fn()

    renderWithTheme(
      <MenuItem itemRole="button" disabled onClick={callbackFn}>
        Item
      </MenuItem>
    )

    const item = screen.getByText('Item')
    fireEvent.click(item)

    expect(callbackFn).toHaveBeenCalledTimes(0)
  })

  test('link with target="_blank" and no passed-in rel prop value uses rel="noopener noreferrer"', () => {
    const { getByRole } = renderWithTheme(
      <MenuItem itemRole="link" href="https://google.com" target="_blank">
        Link
      </MenuItem>
    )

    const item = getByRole('menuitem')

    expect(item.nodeName).toBe('A')
    expect(item).toHaveAttribute('target', '_blank')
    expect(item).toHaveAttribute('href', 'https://google.com')
    expect(item).toHaveAttribute('rel', 'noopener noreferrer')
  })

  test('link with target="_blank" and passed-in rel prop value auto appends "noopener noreferrer" to rel prop value', () => {
    const { getByRole } = renderWithTheme(
      <MenuItem
        itemRole="link"
        href="https://google.com"
        rel="nogouda"
        target="_blank"
      >
        Link
      </MenuItem>
    )

    const item = getByRole('menuitem')

    expect(item.nodeName).toBe('A')
    expect(item).toHaveAttribute('target', '_blank')
    expect(item).toHaveAttribute('href', 'https://google.com')
    expect(item).toHaveAttribute('rel', 'nogouda noopener noreferrer')
  })

  test('link without target="_blank" does not auto append "noopener noreferrer"', () => {
    const { getByRole } = renderWithTheme(
      <MenuItem itemRole="link" rel="nogouda" href="https://google.com">
        Link
      </MenuItem>
    )

    const item = getByRole('menuitem')

    expect(item.nodeName).toBe('A')
    expect(item).toHaveAttribute('href', 'https://google.com')
    expect(item).toHaveAttribute('rel', 'nogouda')
  })

  test('Nested menu aria props', () => {
    // Actual nested menu behavior is tested in Menu.test.tsx since it needs context
    renderWithTheme(
      <MenuItem
        nestedMenu={
          <>
            <MenuItem>Child</MenuItem>
          </>
        }
      >
        Parent
      </MenuItem>
    )

    // menuitem role goes on the button; li has role="none"
    const item = screen.getByRole('none')

    expect(item).toHaveAttribute('aria-haspopup', 'true')
    expect(item).toHaveAttribute('aria-expanded', 'false')
  })

  test('Nested menu aria props', () => {
    // Actual nested menu behavior is tested in Menu.test.tsx since it needs context
    renderWithTheme(
      <MenuItem
        nestedMenu={
          <>
            <MenuItem>Child</MenuItem>
          </>
        }
      >
        Parent
      </MenuItem>
    )

    const item = screen.getByRole('none')

    expect(item).toHaveAttribute('aria-haspopup', 'true')
    expect(item).toHaveAttribute('aria-expanded', 'false')
  })

  test('Without nested menu, no aria props', () => {
    // Actual nested menu behavior is tested in Menu.test.tsx since it needs context
    renderWithTheme(<MenuItem>No nesting</MenuItem>)

    const item = screen.getByRole('none')

    expect(item).not.toHaveAttribute('aria-haspopup')
    expect(item).not.toHaveAttribute('aria-expanded')
  })
})
