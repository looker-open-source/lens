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

import React, {
  FC,
  useState,
  KeyboardEvent,
  useRef,
  useCallback,
  useEffect,
} from 'react'
import { SpaceProps, reset, space } from '@looker/design-tokens'
import { WidthProps } from 'styled-system'
import styled from 'styled-components'
import sortBy from 'lodash/sortBy'
import indexOf from 'lodash/indexOf'
import startsWith from 'lodash/startsWith'
import partial from 'lodash/partial'
import {
  useMeasuredRef,
  useMouseDragPosition,
  usePreviousValue,
} from '../../../utils'
import { ValidationType } from '../../ValidationMessage'

export interface RangeSliderProps extends SpaceProps, WidthProps {
  'aria-labelledby'?: string
  max?: number
  min?: number
  step?: number
  value?: number[]
  boundaries?: number[]
  disabled?: boolean
  readOnly?: boolean
  validationType?: ValidationType
  className?: string
}

type ThumbIndices = 0 | 1 | undefined

const sort = (arr: number[]) => arr.sort((a, b) => a - b)

const findClosestIndex = (value: number[], newPoint: number): number => {
  const { index: closestIndex } = sortBy(
    value.map((p, i) => ({
      distance: Math.abs(p - newPoint),
      index: i,
    })),
    'distance'
  )[0]

  return closestIndex
}

const createNewValue = (
  value: number[],
  newPoint: number,
  focusedIndex?: ThumbIndices
) => {
  const indexToReplace =
    focusedIndex === undefined
      ? findClosestIndex(value, newPoint)
      : focusedIndex

  const newValue = Object.assign([], value, { [indexToReplace]: newPoint })
  return sort(newValue)
}

const calculatePointValue = (
  mouseX: number,
  containerRect: ClientRect,
  min: number,
  max: number
): number => {
  // calculate point value based on where user clicked within container
  const mousePosition = Math.min(
    Math.max(mouseX - containerRect.left, 0),
    containerRect.width
  )
  const possibleValueRange = max - min
  const newPoint = Math.round(
    (mousePosition / containerRect.width) * possibleValueRange + min
  )

  return newPoint
}

export const InternalRangeSlider: FC<RangeSliderProps> = ({
  className,
  boundaries = [0, 10],
  step = 1,
}) => {
  const [minBound, maxBound] = boundaries
  const [value, setValue] = useState(boundaries)
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null)
  const [focusedThumb, setFocusedThumb] = useState<ThumbIndices>()

  const callbackRef = useCallback((node) => {
    if (node !== null) {
      setContainerRef(node)
    }
  }, [])

  const containerRect = useMeasuredRef(containerRef)

  const { mousePos, isMouseDown } = useMouseDragPosition(containerRef)
  const prevMouseDown = usePreviousValue(isMouseDown)

  const minThumbRef = useRef<HTMLDivElement>(null)
  const maxThumbRef = useRef<HTMLDivElement>(null)

  // calculate thumb position based on set value
  const [minValue, maxValue] = value
  const minPos = (minValue / maxBound) * containerRect.width
  const maxPos = (maxValue / maxBound) * containerRect.width
  const fillWidth = maxPos - minPos

  const thumbRefs = [minThumbRef, maxThumbRef]

  const focusChangedPoint = (newValue: number[], newPoint: number) => {
    // focus/highlight the thumb that moved on click
    const indexToFocus = indexOf(newValue, newPoint)
    const refToFocus = thumbRefs[indexToFocus]
    requestAnimationFrame(() => {
      // delaying focus is necessary for it to work with mouseDown event
      refToFocus.current && refToFocus.current.focus()
    })
  }

  const incrementPoint = (point: number) => {
    return Math.min(point + step, maxBound)
  }

  const decrementPoint = (point: number) => {
    return Math.max(point - step, minBound)
  }

  const handleKeyboardNav = (e: KeyboardEvent) => {
    if (startsWith(e.key, 'Arrow') && focusedThumb !== undefined) {
      const unfocusedThumb = focusedThumb === 0 ? 1 : 0
      const mutationFn =
        e.key === 'ArrowUp' || e.key === 'ArrowRight'
          ? incrementPoint
          : decrementPoint
      const newPoint = mutationFn(value[focusedThumb])
      const newValue = sort([newPoint, value[unfocusedThumb]])
      focusChangedPoint(newValue, newPoint)
      setValue(newValue)
    }
  }

  const focusMinValue = () => {
    setFocusedThumb(0)
  }

  const focusMaxValue = () => {
    setFocusedThumb(1)
  }

  const handleBlur = () => {
    setFocusedThumb(undefined)
  }

  const handleMouseEvent = (maintainFocus: boolean) => {
    // update slider positions when clicking
    const newPoint = calculatePointValue(
      mousePos.x,
      containerRect,
      minBound,
      maxBound
    )
    const newValue = createNewValue(
      value,
      newPoint,
      maintainFocus ? focusedThumb : undefined
    )
    focusChangedPoint(newValue, newPoint)
    setValue(newValue)
  }

  const handleMouseDown = partial(handleMouseEvent, false)
  const handleMouseDrag = partial(handleMouseEvent, true)

  useEffect(
    () => {
      if (isMouseDown && prevMouseDown) {
        // only run callback when moving, but not on the initial down click
        handleMouseDrag()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mousePos, isMouseDown]
  )

  return (
    <div onMouseDown={handleMouseDown} className={className} ref={callbackRef}>
      <SliderTrack>
        <SliderFill fillStart={minPos} fillWidth={fillWidth} />
        <ThumbLabel position={minPos} focus={focusedThumb === 0}>
          {minValue}
        </ThumbLabel>
        <ThumbLabel position={maxPos} focus={focusedThumb === 1}>
          {maxValue}
        </ThumbLabel>
        <Thumb
          position={minPos}
          tabIndex={'0' as never} // "as never" ¯\_(ツ)_/¯
          onFocus={focusMinValue}
          onBlur={handleBlur}
          onKeyDown={handleKeyboardNav}
          ref={minThumbRef}
        />
        <Thumb
          position={maxPos}
          tabIndex={'0' as never} // "as never" ¯\_(ツ)_/¯
          onFocus={focusMaxValue}
          onBlur={handleBlur}
          onKeyDown={handleKeyboardNav}
          ref={maxThumbRef}
        />
      </SliderTrack>
    </div>
  )
}

export const RangeSlider = styled(InternalRangeSlider)`
  ${reset}
  ${space}
  padding: ${({ theme }) => theme.space.medium} 0;
  max-width: 500px;
`

const SliderTrack = styled.div`
  height: 4px;
  background: ${({ theme }) => theme.colors.palette.charcoal200};
  border-radius: 2px;
  position: relative;
`

interface ThumbLabelProps {
  position: number
  focus: boolean
}

const ThumbLabel = styled.div<ThumbLabelProps>`
  transition: background 0.2s;
  user-select: none;
  position: absolute;
  top: -30px;
  transform: translateX(calc(${({ position = 0 }) => `${position}px`} - 50%));
  text-align: center;
  color: ${({ theme: { colors } }) => colors.semanticColors.primary.main};
  padding: 0 0.5rem;
  border-radius: 1rem;
  z-index: ${({ focus }) => (focus ? 1 : 0)};
  background: ${({ theme, focus }) =>
    focus ? theme.colors.palette.purple100 : theme.colors.palette.white};
`

interface ThumbProps {
  position: number
  tabIndex: string
}

const Thumb = styled.div<ThumbProps>`
  border-radius: 100%;
  cursor: pointer;
  border: 3px solid ${({ theme }) => theme.colors.semanticColors.primary.main};
  height: 16px;
  width: 16px;
  background: ${({ theme }) => theme.colors.palette.white};
  position: absolute;
  top: -6px;
  margin-left: -8px;
  transform: translateX(${({ position = 0 }) => `${position}px`});
  &:focus {
    outline: none;
    border-width: 5px;
    z-index: 1;
  }
`

interface SliderFillProps {
  fillStart: number
  fillWidth: number
}

const SliderFill = styled.div<SliderFillProps>`
  height: 100%;
  background: ${({ theme: { colors } }) => colors.semanticColors.primary.main};
  position: absolute;
  left: ${({ fillStart }) => fillStart}px;
  width: ${({ fillWidth }) => fillWidth}px;
`
