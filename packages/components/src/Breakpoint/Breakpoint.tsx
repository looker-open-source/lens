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

import React, { useContext, FC, ReactNode, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { useResize } from '../utils'

type Breakpoints = 0 | 1 | 2 | 3 | 4

export interface BreakpointProps {
  children: ReactNode
  // TODO: should these be named slots?
  from?: Breakpoints
  to?: Breakpoints
}

function convertRemToPixels(rem: number) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

export const Breakpoint: FC<BreakpointProps> = ({
  children,
  from = 0,
  to = 4,
}) => {
  const [screenWidth, setScreenWidth] = useState(screen.width)
  const theme = useContext(ThemeContext)
  const breakpointPx = theme.breakpoints.map((b: string) =>
    convertRemToPixels(parseInt(b.replace('rem', '')))
  )

  const handleResize = () => {
    setScreenWidth(screen.width)
  }

  useResize(document.body, handleResize)

  const screenMin = from > 0 ? breakpointPx[from - 1] : 0 // from: mobile is 0px to mobile breakpoint
  const screenMax = to === breakpointPx.length - 1 ? Infinity : breakpointPx[to] // to: desktop is desktop breakpoint and above

  return (
    <>{screenWidth > screenMin && screenWidth <= screenMax ? children : null}</>
  )
}
