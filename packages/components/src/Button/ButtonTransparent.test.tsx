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

import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import { renderWithTheme } from '@looker/components-test-utils'
import React from 'react'
import { fireEvent } from '@testing-library/react'
import { ButtonTransparent } from './ButtonTransparent'

test('ButtonTransparent Focus: renders outline when tabbing into focus, but not when clicking', () => {
  const { getByText } = renderWithTheme(
    <>
      <ButtonTransparent>ButtonTransparent</ButtonTransparent>
      <ButtonTransparent>focus</ButtonTransparent>
    </>
  )

  fireEvent.click(getByText('ButtonTransparent'))
  expect(getByText('focus')).toMatchSnapshot()

  fireEvent.keyUp(getByText('focus'), { charCode: 9, code: 9, key: 'Tab' })
  expect(getByText('focus')).toMatchSnapshot()
})
