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

import { shouldForwardProp } from '@looker/design-tokens'
import styled, { css } from 'styled-components'
import { height, HeightProps } from 'styled-system'
import { SemanticLayoutBase, semanticLayoutCSS } from './semanticStyledBase'
import { borderHelper, SemanticBorderProps } from './semanticBorderHelper'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps
  extends HeightProps,
    SemanticLayoutBase,
    SemanticBorderProps {}

export const headerFooterCSS = css`
  ${semanticLayoutCSS}
  ${height}

  align-items: center;
  display: flex;
  flex: 0 0 auto;
`

export const Header = styled.header.withConfig({
  shouldForwardProp,
})<HeaderProps>`
  ${headerFooterCSS}
  ${borderHelper}
  width: 100%;
`

// box-shadow: ${({ shadow }) => shadow && '0 15px 6px -6px #777'};
// box-shadow: ${({ theme }) => theme.shadows[1]};
//   box-shadow: 0 6px 6px -6px #777;
