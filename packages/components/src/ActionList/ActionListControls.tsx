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

import styled from 'styled-components'
import React, { FC } from 'react'
import { InputFilters, FilterConfig } from '../Form/Inputs/InputFilters'
import { DividerVertical } from '../Divider/DividerVertical'
import { IconButton } from '../Button/IconButton'

export interface ActionListControlsProps extends Partial<FilterConfig> {
  canSelectDisplayedColumns?: boolean
  className?: string
}

const ActionListControlsLayout: FC<ActionListControlsProps> = ({
  className,
  canSelectDisplayedColumns = false,
  filters,
}) => {
  return (
    <div className={className}>
      {filters && <InputFilters filters={filters} />}
      {canSelectDisplayedColumns && (
        <ColumnSelector>
          <DividerVertical height="1.5rem" />
          <IconButton label="Select columns to display" icon="ViewColumn" />
        </ColumnSelector>
      )}
    </div>
  )
}

const ColumnSelector = styled.div`
  align-items: center;
  display: flex;
`

export const ActionListControls = styled(ActionListControlsLayout)`
  border-bottom: solid 1px ${({ theme }) => theme.colors.ui2};
  border-top: solid 1px ${({ theme }) => theme.colors.ui2};
  display: flex;
  padding: auto;

  ${InputFilters} {
    border: none;
  }
`
