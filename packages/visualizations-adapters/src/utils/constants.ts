/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import type { Fields } from '../types'

export const DEFAULT_HEIGHT = 500
export const DEFAULT_MIN_HEIGHT = 75
export const DEFAULT_SERIES_COLORS = [
  '#6c43e0',
  '#b73ec3',
  '#db4da8',
  '#ed6995',
  '#f1898f',
]
export const DEFAULT_STRING_FORMAT = '0,0.[00]'
export const DEFAULT_STRING_FORMAT_PERCENT = '0.[00]%'
export const DEFAULT_MARGIN = 50

export const DEFAULT_EMPTY_FIELDS: Fields = {
  dimensions: [],
  measures: [],
  pivots: [],
}
