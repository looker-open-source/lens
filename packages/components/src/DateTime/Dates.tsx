/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import {
  reset,
  space,
  SpaceProps,
  typography,
  CompatibleHTMLProps,
} from '@looker/design-tokens'
import React, { FC } from 'react'
import styled from 'styled-components'

export interface DatesFormate {
  weekday?: string
  year?: string
  month?: string
  day?: string
}

export interface DatesProps
  extends SpaceProps,
    CompatibleHTMLProps<HTMLSpanElement> {
  moment?: any
  location?: string
  options?: DatesFormate
}

const DatesLayout: FC<DatesProps> = ({
  moment = new Date(Date.now()),
  location,
  options = {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    year: 'numeric',
  },
  ...props
}) => {
  return <span {...props}>{moment.toLocaleDateString(location, options)}</span>
}

export const Dates = styled(DatesLayout)`
  ${reset}

  ${space}
  ${typography}

  display: inline-flex;
`

Dates.defaultProps = {}
