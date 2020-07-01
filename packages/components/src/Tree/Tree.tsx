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

import styled, { css } from 'styled-components'
import { FontWeights, Theme, uiTransparencyBlend } from '@looker/design-tokens'
import React, { FC, ReactNode, useContext, useRef } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionDisclosure,
  AccordionDisclosureStyle,
  AccordionProps,
  AccordionIndicatorProps,
} from '../Accordion'
import { IconNames } from '../Icon'
import { useHovered } from '../utils/useHovered'
import { undefinedCoalesce } from '../utils'
import { TreeItem, TreeItemLabel } from './TreeItem'
import { TreeGroupLabel } from './TreeGroup'
import { TreeContext } from './TreeContext'

export interface TreeProps extends AccordionProps {
  /**
   * If true, vertical lines will extend from the Tree indicator (and all sub-Trees' indicators)
   * @default false
   */
  border?: boolean
  /**
   * Supplementary element that appears right of the Tree's label
   * Note: The detail container will stop propagation of events. Place your element(s) in the label
   *  prop if you'd like clicks on them to bubble.
   */
  detail?: ReactNode
  /**
   * If true, then the detail elements on Trees and TreeItems will only appear on hover
   * @default false
   */
  detailHoverDisclosure?: boolean
  /**
   * If true, the detail elements of child TreeItems will appear outside of the grey background on hover
   * @default false
   */
  detailAccessory?: boolean
  /**
   * The font weight of the Tree's text
   * @default 'semiBold'
   */
  fontWeight?: FontWeights
  /**
   * Icon element that appears between the Tree indicator and the Tree label
   */
  icon?: IconNames
  /**
   * Text label of the Tree
   * Note: This is a required prop
   */
  label: ReactNode
}

const indicatorProps: AccordionIndicatorProps = {
  indicatorGap: 'xxsmall',
  indicatorIcons: { close: 'ArrowRight', open: 'ArrowDown' },
  indicatorPosition: 'left',
  indicatorSize: 'small',
}

export const InnerTreeItem = styled(TreeItem)``

const TreeLayout: FC<TreeProps> = ({
  border: propsBorder,
  children,
  detail,
  detailHoverDisclosure: propsDetailHoverDisclosure,
  detailAccessory: propsDetailAccessory,
  fontWeight,
  icon,
  label,
  ...restProps
}) => {
  const disclosureRef = useRef<HTMLDivElement>(null)
  const [isHovered] = useHovered(disclosureRef)

  const treeContext = useContext(TreeContext)
  const hasBorder = undefinedCoalesce([propsBorder, treeContext.border])
  const hasDetailHoverDisclosure = undefinedCoalesce([
    propsDetailHoverDisclosure,
    treeContext.detailHoverDisclosure,
  ])
  const hasDetailAccessory = undefinedCoalesce([
    propsDetailAccessory,
    treeContext.detailAccessory,
  ])
  const startingDepth = 0
  const depth = treeContext.depth ? treeContext.depth : startingDepth

  const innerTreeItem = (
    <InnerTreeItem
      detail={detail}
      detailAccessory={hasDetailAccessory}
      detailHoverDisclosure={hasDetailHoverDisclosure}
      gapSize="xsmall"
      icon={icon}
    >
      {label}
    </InnerTreeItem>
  )

  const innerAccordion = (
    <Accordion {...indicatorProps} {...restProps}>
      <AccordionDisclosure ref={disclosureRef} fontWeight={fontWeight}>
        {innerTreeItem}
      </AccordionDisclosure>
      <AccordionContent>{children}</AccordionContent>
    </Accordion>
  )

  return (
    <TreeContext.Provider
      value={{
        border: hasBorder,
        depth: depth + 1,
        detailAccessory: hasDetailAccessory,
        detailHoverDisclosure: hasDetailHoverDisclosure,
      }}
    >
      <TreeStyle border={hasBorder} depth={depth} hovered={isHovered}>
        {innerAccordion}
      </TreeStyle>
    </TreeContext.Provider>
  )
}

export const Tree = styled(TreeLayout)``

const generateTreeBorder = (depth: number, theme: Theme) => {
  const {
    colors,
    space: { xxsmall, small },
  } = theme

  const itemBorderSize = '1px'
  const itemPaddingSize = xxsmall
  const indicatorIconSize = small
  const indicatorGapSize = xxsmall
  const depthSize = `${itemBorderSize} + ${itemPaddingSize} + (${indicatorIconSize} + ${indicatorGapSize}) * ${depth}`
  const borderSpacer = `(${small} / 2) + ${depthSize}`

  return css`
    background: linear-gradient(
      90deg,
      transparent calc(${borderSpacer} - 1px),
      ${colors.ui2},
      transparent calc(${borderSpacer})
    );
  `
}

const generateIndent = (depth: number, theme: Theme) => {
  const {
    space: { xxsmall, small },
  } = theme

  const itemPaddingSize = xxsmall
  const indicatorIconSize = small
  const indicatorGapSize = xxsmall
  const indentCalculation = `${itemPaddingSize} + (${indicatorIconSize} + ${indicatorGapSize}) * ${depth}`

  return css`
    padding-left: calc(${indentCalculation});
  `
}

interface TreeStyleProps {
  border?: boolean
  depth: number
  hovered: boolean
}

export const TreeStyle = styled.div<TreeStyleProps>`
  & > ${Accordion} > ${AccordionContent} {
    ${({ border, depth, theme }) => border && generateTreeBorder(depth, theme)}
  }

  & > ${Accordion} > ${AccordionDisclosureStyle} {
    background-clip: padding-box;
    background-color: ${({ hovered }) => hovered && uiTransparencyBlend(2)};
    border-radius: ${({ theme }) => theme.radii.medium};
    height: 25px;
    padding: ${({ theme }) => theme.space.xxsmall};
    ${({ depth, theme }) => generateIndent(depth, theme)}
  }

  ${InnerTreeItem} > ${TreeItemLabel} {
    background-color: transparent;
    padding: ${({ theme }) => theme.space.none};
  }

  ${InnerTreeItem} {
    border-width: 0;
    height: 100%;
  }

  ${TreeGroupLabel},
  ${TreeItemLabel},
  & > ${Accordion} > ${AccordionContent} > ${TreeItem} > ${TreeItemLabel} {
    ${({ depth, theme }) => generateIndent(depth + 1, theme)}
  }
`
