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

import { CompatibleHTMLProps } from '@looker/design-tokens'
import styled from 'styled-components'
import React, { FC, useContext } from 'react'
import { ActionListRow } from '../ActionListRow'
import { ActionListContext } from '../ActionListContext'

const ActionListHeaderInternal: FC<CompatibleHTMLProps<HTMLDivElement>> = ({
  children,
  className,
}) => {
  const { allItems, canSelectAll, itemsSelected, onSelectAll } = useContext(
    ActionListContext
  )

  const onChange = onSelectAll ? () => onSelectAll() : undefined

  // Includes a check for allItems length to prevent the in-between state where ActionList first loads
  // and allItems is an empty array (which leads to header checkbox being checked for a split-second)
  const checked =
    !!allItems.length && allItems.every((item) => itemsSelected.includes(item))
      ? true
      : allItems.some((item) => itemsSelected.includes(item))
      ? 'mixed'
      : false

  return (
    <ActionListRow
      className={className}
      hasCheckbox={canSelectAll}
      onChange={onChange}
      checked={checked}
    >
      {children}
    </ActionListRow>
  )
}

export const ActionListHeader = styled(ActionListHeaderInternal)`
  border-bottom: solid 1px ${(props) => props.theme.colors.palette.charcoal200};
  color: ${(props) => props.theme.colors.palette.charcoal900};
  display: flex;
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`
