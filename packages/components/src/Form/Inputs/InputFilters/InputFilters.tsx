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
import React, { FC, useState, useRef, MouseEvent } from 'react'
import { Select } from '../Select'
import { InputText } from '../InputText'
import { Icon } from '../../../Icon'
import { IconButton } from '../../../Button'
import { Chip } from '../../../Chip'

export interface AvailableFilter {
  value: string
}

export interface FieldFilter {
  /* specify field to filter against */
  // field: string
  /* text displayed in drop-down, optional, `field` is used if not specified */
  label?: string
}
export interface FieldFilterExpressions extends FieldFilter {
  expression?: string
}
export interface InputFiltersProps {
  available: FieldFilter[]
  filters?: FieldFilterExpressions[]
  hideFilterIcon?: boolean
  className?: string
}

const InputFiltersLayout: FC<InputFiltersProps> = ({
  available,
  className,
  filters,
  hideFilterIcon = false,
}) => {
  const [values, setValues] = useState(filters || [])
  const [filterLookupName, setFilterLookupName] = useState('')

  const inputRef = useRef<null | HTMLInputElement>(null)
  const isClearable = values.length > 0

  const clearFilters = () => {
    setValues([])
  }

  function focusInput() {
    inputRef.current && inputRef.current.focus()
  }

  function handleFilterLookupChange(newValues: any) {
    setFilterLookupName('')
    setValues([...values, newValues])
  }

  const editFilter = () => {
    alert("You can't do that. Yet!")
  }

  const deleteFilter = (event: MouseEvent<HTMLSpanElement>) => {
    const clickedValue = event.currentTarget.parentNode.querySelector('span')
      .textContent
    console.log(clickedValue)
    const newValues = values.filter(
      (value) =>
        value.expression === clickedValue.querySelector('span').textContent
    )
    console.log(newValues)
    setValues(newValues)
  }

  return (
    <div className={className} onClick={focusInput}>
      {!hideFilterIcon && (
        <Icon color="ui4" mr="xsmall" name="Filter" size={20} />
      )}
      {filters &&
        filters.map((filter, i) => (
          <Chip key={i} onClick={editFilter} onDelete={deleteFilter}>
            {filter.expression}
          </Chip>
        ))}
      <Select
        autoResize
        indicator={false}
        isFilterable
        onChange={handleFilterLookupChange}
        options={available}
        placeholder="Filter List"
        ref={inputRef}
        value={filterLookupName}
      />
      {isClearable && (
        <IconButton
          icon="Close"
          label="Clear Filters"
          onClick={clearFilters}
          size="xsmall"
        />
      )}
    </div>
  )
}

export const InputFilters = styled(InputFiltersLayout)`
  align-items: center;
  border: solid 1px ${({ theme }) => theme.colors.ui2};
  border-radius: ${({ theme: { radii } }) => radii.medium};
  display: flex;
  height: 36px;
  padding: ${({ theme: { space } }) => `${space.xxxsmall} ${space.xxsmall}`};

  ${Chip} + ${Chip} {
    margin: ${({ theme: { space } }) => `0 ${space.xsmall}`};
  }

  ${Select} {
    width: auto;

    ${Icon} {
      display: none;
    }
  }

  ${InputText} {
    border: none;
    height: 28px;
    padding: 0;
    &:focus-within {
      box-shadow: none;
    }
    input {
      padding: 0;
    }
  }


`
