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

import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import type { ListProps } from '../List'
import { List } from '../List'
import { listPadding } from '../List/utils'
import type { CloseParentMenuProps } from './NestedMenuProvider'
import { NestedMenuProvider } from './NestedMenuProvider'

export type MenuListProps = Omit<ListProps, 'color'> & CloseParentMenuProps

export const MenuListInternal = forwardRef(
  (
    { children, closeParentMenu, ...props }: MenuListProps,
    forwardedRef: Ref<HTMLUListElement>
  ) => {
    /**
     * List uses both axes for arrow key navigation by default, but we want to suppress the horizontal
     * movement so that we don't break the left / right nested menu arrow key functionality.
     */
    const arrowKeyAxis = 'vertical'

    return (
      <NestedMenuProvider closeParentMenu={closeParentMenu}>
        <List axis={arrowKeyAxis} role="menu" ref={forwardedRef} {...props}>
          {children}
        </List>
      </NestedMenuProvider>
    )
  }
)
MenuListInternal.displayName = 'MenuListInternal'

export const MenuList = styled(MenuListInternal)`
  min-width: 12rem;

  ${listPadding}
`
