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

import {
  border,
  BorderProps,
  color,
  ColorProps,
  CompatibleHTMLProps,
} from '@looker/design-tokens'
import styled from 'styled-components'

interface OverlaySurfaceArrowProps
  extends BorderProps,
    ColorProps,
    CompatibleHTMLProps<HTMLDivElement> {
  ['data-placement']: string
}

export const OverlaySurfaceArrow = styled.div.attrs(
  (props: OverlaySurfaceArrowProps) => ({
    'data-placement': props['data-placement'],
  })
)<OverlaySurfaceArrowProps>`
  position: absolute;

  &::before {
    ${color}
    ${border}

    /* only want border-right and border-bottom from styled-system's border */
    border-left: none;
    border-radius: 0;
    border-top: none;
    content: '';
    display: block;
    height: 0.5rem;
    margin: auto;
    width: 0.5rem;
  }

  &[data-placement*='top'] {
    bottom: -0.25rem;
    &::before {
      transform: rotate(45deg);
    }
  }

  &[data-placement*='right'] {
    left: -0.25rem;
    &::before {
      transform: rotate(135deg);
    }
  }

  &[data-placement*='bottom'] {
    top: -0.25rem;
    &::before {
      transform: rotate(225deg);
    }
  }

  &[data-placement*='left'] {
    right: -0.25rem;
    &::before {
      transform: rotate(315deg);
    }
  }
`
