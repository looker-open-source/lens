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

import React, { forwardRef, Ref, FormEvent } from 'react'
import styled from 'styled-components'
import { CustomizableAttributes } from '@looker/design-tokens'
import { ValidationType } from '../../ValidationMessage'
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxProps,
  getComboboxText,
} from '../Combobox'
import {
  SelectOptionGroupProps,
  SelectOptionObject,
  SelectOptionProps,
  SelectOptions,
} from './SelectOptions'

export const CustomizableSelectAttributes: CustomizableAttributes = {
  borderRadius: 'medium',
  fontSize: 'small',
  height: '28px',
  px: 'xsmall',
  py: 'none',
}

export interface SelectBaseProps {
  options?: SelectOptionProps[]
  /**
   * Displays an example value or short hint to the user. Should not replace a label.
   */
  placeholder?: string
  /**
   * The user can type in the input (default false to mimic traditional select tag)
   */
  isFilterable?: boolean
  /**
   * The user can clear the current value by clicking an x icon button
   */
  isClearable?: boolean
  /**
   * Handle when the user types in the field,
   * or the menu opens with a pre-populated value
   */
  onFilter?: (term: string) => void

  validationType?: ValidationType
}

export interface SelectProps
  extends Omit<ComboboxProps, 'value' | 'defaultValue' | 'onChange'>,
    SelectBaseProps {
  /**
   * Value of the current selected option (controlled)
   */
  value?: string
  /**
   * Value of the initial option
   */
  defaultValue?: string
  /**
   * Handle an option being selected
   */
  onChange?: (value: string) => void
}

export function flattenOptions(options: SelectOptionProps[]) {
  return options.reduce(
    (acc: SelectOptionObject[], option: SelectOptionProps) => {
      const optionAsGroup = option as SelectOptionGroupProps
      if (optionAsGroup.title) {
        return [...acc, ...optionAsGroup.options]
      }
      return [...acc, option as SelectOptionObject]
    },
    []
  )
}

function getOption(value?: string, options?: SelectOptionProps[]) {
  const flattenedOptions = options && flattenOptions(options)
  return value
    ? { label: getComboboxText(value, flattenedOptions), value }
    : undefined
}

function getFirstOption(options: SelectOptionProps[]): SelectOptionObject {
  const optionAsGroup = options[0] as SelectOptionGroupProps
  if (optionAsGroup.title) return optionAsGroup.options[0]
  return options[0] as SelectOptionObject
}

const SelectComponent = forwardRef(
  (
    {
      options,
      disabled,
      isFilterable,
      isClearable,
      placeholder,
      onFilter,
      onChange,
      value,
      defaultValue,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      validationType,
      ...props
    }: SelectProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const optionValue = getOption(value, options)
    const nullDefault = (isClearable || placeholder) && !defaultValue
    const defaultOptionValue = nullDefault
      ? undefined
      : getOption(defaultValue, options) || (options && getFirstOption(options))

    function handleChange(option?: SelectOptionObject) {
      const newValue = option ? option.value : ''
      onChange && onChange(newValue)
      onFilter && onFilter('')
    }

    function handleInputChange(e: FormEvent<HTMLInputElement>) {
      onFilter && onFilter(e.currentTarget.value)
    }

    function handleClose() {
      // when the list closes, the input's value reverts to the current option
      onFilter && onFilter('')
    }

    const ariaProps = {
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
    }

    const inputProps = {
      disabled,
      placeholder,
      validationType,
    }

    return (
      <Combobox
        {...props}
        value={optionValue}
        defaultValue={defaultOptionValue}
        onChange={handleChange}
        onClose={handleClose}
      >
        <ComboboxInput
          {...inputProps}
          {...ariaProps}
          autoComplete={false}
          readOnly={!isFilterable}
          onChange={handleInputChange}
          hideControls={!isClearable}
          selectOnClick={isFilterable}
          ref={ref}
        />
        {!disabled && (
          <ComboboxList persistSelection {...ariaProps}>
            <SelectOptions options={options} />
          </ComboboxList>
        )}
      </Combobox>
    )
  }
)

SelectComponent.displayName = 'SelectComponent'

export const Select = styled(SelectComponent)``
