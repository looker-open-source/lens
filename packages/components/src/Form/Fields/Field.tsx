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

import React, { FunctionComponent, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { ResponsiveValue, TLengthStyledSystem } from 'styled-system'
import omit from 'lodash/omit'
import pick from 'lodash/pick'
import { Paragraph, Text } from '../../Text'
import { inputHeight } from '../Inputs/InputText/InputText'
import { Label } from '../Label'
import { ValidationMessage } from '../ValidationMessage'
import { FieldBaseProps } from './FieldBase'
import { RequiredStar } from './RequiredStar'

type ResponsiveSpaceValue = ResponsiveValue<TLengthStyledSystem>

export interface FieldProps extends FieldBaseProps {
  /*
   * optional extra description
   */
  description?: ReactNode

  /**
   * Id of the input element to match a label to.
   */
  id?: string
  /**
   * Determines where to place the label in relation to the input.
   * @default false
   */
  inline?: boolean
  /**
   *
   * Specify the width of the FieldText if different then 100%
   * @default '100%'
   */
  width?: ResponsiveSpaceValue
}

export const fieldPropKeys = [
  'description',
  'detail',
  'id',
  'inline',
  'label',
  'labelWidth',
  'validationMessage',
  'width',
]

export const pickFieldProps = (props: FieldProps) =>
  pick(props, [...fieldPropKeys, 'disabled', 'required', 'className'])

export const omitFieldProps = (props: FieldProps) => omit(props, fieldPropKeys)

/**
 * `<Field />` allows the rendering of a label (optionally associated with a child input like `<InputText />`),
 * and can render a validation message. Generally, this component is used with form inputs to give user
 * feedback about the status of the input values.
 */

interface FieldPropsInternal extends FieldProps {
  id: string
}

const FieldLayout: FunctionComponent<FieldPropsInternal> = ({
  className,
  children,
  description,
  detail,
  id,
  label,
  required,
  validationMessage,
}) => {
  const fieldDescription = description && (
    <Paragraph mt="xsmall" fontSize="xsmall" color="text4">
      {description}
    </Paragraph>
  )

  const fieldValidation = validationMessage && (
    <ValidationMessage {...validationMessage} />
  )

  return (
    <div className={className}>
      <Label htmlFor={id} id={`${id}-labelledby`}>
        {label}
        {required && <RequiredStar />}
      </Label>
      {detail && <FieldDetail>{detail}</FieldDetail>}
      <InputArea>{children}</InputArea>
      <MessageArea id={`${id}-describedby`}>
        {fieldDescription}
        {fieldValidation}
      </MessageArea>
    </div>
  )
}

const FieldDetail = styled(Text)``

FieldDetail.defaultProps = {
  fontSize: 'xsmall',
}

const InputArea = styled.div``
const MessageArea = styled.div``

const fieldLabelCSS = (inline?: boolean) =>
  inline
    ? css`
        height: ${inputHeight};
        justify-self: end;
        line-height: ${inputHeight};
        padding-right: ${({ theme }) => theme.space.small};
        text-align: right;
      `
    : css`
        line-height: ${({ theme }) => theme.lineHeights.xsmall};
        padding-bottom: ${({ theme }) => theme.space.xsmall};
      `

export const Field = styled(FieldLayout)<FieldPropsInternal>`
  align-items: left;

  display: grid;
  grid-template-areas: ${({ inline }) =>
    inline
      ? '"label input detail" ". messages messages"'
      : '"label detail" "input input" "messages messages"'};
  grid-template-columns: ${({ inline }) => (inline ? '150px 1fr' : undefined)};
  height: fit-content;
  justify-content: space-between;
  width: ${({ width }) => width || 'fit-content'};

  ${InputArea} {
    align-items: center;
    grid-area: input;
  }

  ${MessageArea} {
    grid-area: messages;
  }

  & > ${Label} {
    grid-area: label;
    ${({ inline }) => fieldLabelCSS(inline)}
  }

  ${FieldDetail} {
    grid-area: detail;
    justify-self: end;

    ${({ inline, theme }) =>
      inline &&
      ` align-self: center;
        padding-left: ${theme.space.small}; `}
  }

  ${ValidationMessage} {
    margin-top: ${({ theme }) => theme.space.xsmall};
  }
`

Field.defaultProps = { width: '100%' }
