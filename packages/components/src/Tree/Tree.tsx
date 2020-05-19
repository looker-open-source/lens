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

import { FontWeights } from '@looker/design-tokens'
import React, { FC, ReactNode } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionDisclosure,
  AccordionProps,
  AccordionIndicatorProps,
} from '../Accordion'
import { FlexItem, Space } from '../Layout'
import { IconNames, Icon } from '../Icon'

export interface TreeProps extends Omit<AccordionProps, 'className'> {
  detail?: ReactNode
  fontWeight?: FontWeights
  icon?: IconNames
  label: string
}

export const Tree: FC<TreeProps> = (props) => {
  const { children, detail, fontWeight, icon, label, ...restProps } = props
  const indicatorProps: AccordionIndicatorProps = {
    indicatorGap: 'xxsmall',
    indicatorIcons: { close: 'ArrowRight', open: 'ArrowDown' },
    indicatorPosition: 'left',
    indicatorSize: 'small',
  }
  const accordionDisclosureChildren = (
    <Space gap="xsmall" align="center">
      {icon && (
        <FlexItem>
          <Icon name={icon} />
        </FlexItem>
      )}
      <FlexItem flex="1">{label}</FlexItem>
      {detail && <FlexItem>{detail}</FlexItem>}
    </Space>
  )

  return (
    <Accordion {...indicatorProps} {...restProps}>
      <AccordionDisclosure
        fontSize="xsmall"
        fontWeight={fontWeight}
        p="xxsmall"
      >
        {accordionDisclosureChildren}
      </AccordionDisclosure>
      <AccordionContent>{children}</AccordionContent>
    </Accordion>
  )
}
