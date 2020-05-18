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

import React from 'react'
import { mountWithTheme, renderWithTheme } from '@looker/components-test-utils'
import { FieldRangeSlider } from './FieldRangeSlider'

test('FieldRangeSlider should accept detail and description attributes', () => {
  const { getByLabelText } = renderWithTheme(
    <FieldRangeSlider
      detail="5/50"
      description="this is the description"
      label="👍"
      id="thumbs-up"
    />
  )

  const input = getByLabelText('👍')
  expect(input.getAttribute('detail')).toBeDefined()
  expect(input.getAttribute('description')).toBeDefined()
})

test('FieldSelectMulti should accept a disabled prop', () => {
  const { getByLabelText } = renderWithTheme(
    <FieldRangeSlider disabled id="test" label="Test Label" />
  )

  const input = getByLabelText('Test Label')
  expect(input.getAttribute('disabled')).toBeDefined()
})

test('FieldSelectMulti should accept required attributes', () => {
  const { getByText } = renderWithTheme(
    <FieldRangeSlider label="👍" id="thumbs-up" required />
  )
  expect(getByText('required')).toBeVisible()
})

test('FieldSelectMulti Should trigger onChange handler', () => {
  const handleChange = jest.fn()

  const wrapper = mountWithTheme(
    <FieldRangeSlider label="👍" id="thumbs-up" onChange={handleChange} />
  )

  wrapper.find('input').simulate('mousedown')
  wrapper.find('li').at(0).simulate('click')
  expect(handleChange).toHaveBeenCalledTimes(1)
})
