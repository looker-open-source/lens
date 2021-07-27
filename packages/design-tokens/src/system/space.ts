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

import {
  SizeNone,
  SizeXXXSmall,
  SizeXXSmall,
  SizeXSmall,
  SizeSmall,
  SizeMedium,
  SizeLarge,
  SizeXLarge,
  SizeXXLarge,
  SizeXXXLarge,
  SizeXXXXLarge,
} from './size'

export type SpacingSizes =
  | SizeNone
  | SizeXXXSmall
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge
  | SizeXLarge
  | SizeXXLarge
  | SizeXXXLarge
  | SizeXXXXLarge

export type SpacingValues =
  | 'none'
  | 'size0.5'
  | 'size1'
  | 'size2'
  | 'size3'
  | 'size4'
  | 'size5'
  | 'size6'
  | 'size7'
  | 'size8'
  | 'size9'
  | 'size10'
  | 'size11'
  | 'size12'
  | 'size13'
  | 'size14'
  | 'size15'
  | 'size16'

export type SpaceRamp = Record<SpacingSizes, string>

export type SpacingRamp = Record<SpacingValues, string>

export type { SpaceProps } from 'styled-system'
