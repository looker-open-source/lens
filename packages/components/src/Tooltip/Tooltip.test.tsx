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
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { act, fireEvent, screen } from '@testing-library/react'
import { Button } from '../Button'
import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
  let rafSpy: jest.SpyInstance<number, [FrameRequestCallback]>

  beforeEach(() => {
    jest.useFakeTimers()
    rafSpy = jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((cb: any) => cb())
  })

  afterEach(() => {
    jest.useRealTimers()
    rafSpy.mockRestore()
  })

  const runTimers = () =>
    act(() => {
      jest.runOnlyPendingTimers()
    })

  test('trigger: delay on mouseover, exits immediately on mouseout', () => {
    renderWithTheme(
      <Tooltip content="Hello world">
        <Button>Test</Button>
      </Tooltip>
    )

    const trigger = screen.getByText('Test')
    fireEvent.mouseOver(trigger)

    const tooltip = screen.getByText('Hello world')
    expect(tooltip).toBeInTheDocument()
    expect(tooltip).not.toBeVisible()

    runTimers()
    expect(tooltip).toBeVisible()

    fireEvent.mouseOut(tooltip)
    expect(tooltip).not.toBeInTheDocument()
  })

  test('isOpen', () => {
    renderWithTheme(
      <Tooltip content="Hello world" isOpen>
        <Button>Test</Button>
      </Tooltip>
    )
    const tooltip = screen.getByText('Hello world')
    expect(tooltip).toBeInTheDocument()
    expect(tooltip).not.toBeVisible()

    runTimers()
    expect(tooltip).toBeVisible()

    fireEvent.mouseOut(tooltip)
    expect(tooltip).not.toBeInTheDocument()
  })

  test('delayNone', () => {
    jest.useFakeTimers()

    renderWithTheme(
      <Tooltip content="Hello world" isOpen delay="none">
        <Button>Test</Button>
      </Tooltip>
    )

    const trigger = screen.getByText('Test')

    fireEvent.mouseOver(trigger)
    runTimers()

    const tooltip = screen.getByText('Hello world')
    expect(tooltip).toBeInTheDocument()

    fireEvent.mouseOut(tooltip)
    expect(tooltip).not.toBeInTheDocument()
  })

  test('open initially, collapse on mouseout', () => {
    renderWithTheme(
      <Tooltip content="Hello world" isOpen>
        <Button>Test</Button>
      </Tooltip>
    )

    const trigger = screen.getByText('Test')
    const tooltip = screen.queryByText('Hello world')
    runTimers()
    expect(tooltip).toBeVisible()

    fireEvent.mouseOut(trigger)
    expect(tooltip).not.toBeInTheDocument()
  })

  test('supports styling props', () => {
    renderWithTheme(
      <Tooltip content="Hello world" width="20rem" textAlign="right">
        <Button>Test</Button>
      </Tooltip>
    )

    const trigger = screen.getByText('Test')

    fireEvent.mouseOver(trigger)

    const tooltip = screen.queryByText('Hello world')
    runTimers()
    expect(tooltip).toBeVisible()

    expect(tooltip).toHaveStyleRule('max-width: 20rem')
    expect(tooltip).toHaveStyleRule('text-align: right')
    fireEvent.mouseOut(trigger)
    runTimers()
  })

  test('Render props version works', () => {
    renderWithTheme(
      <Tooltip content="Hello world">
        {(props) => <Button {...props}>Test</Button>}
      </Tooltip>
    )

    const trigger = screen.getByText('Test')

    fireEvent.mouseOver(trigger)

    const tooltip = screen.queryByText('Hello world')
    expect(tooltip).not.toBeVisible()

    runTimers()
    expect(tooltip).toBeVisible()

    fireEvent.mouseOut(trigger)

    runTimers()
    expect(tooltip).not.toBeInTheDocument()
  })
})
