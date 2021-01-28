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

import { CompatibleHTMLProps, FontSizes } from '@looker/design-tokens'
import { IconNames } from '@looker/icons'
import styled from 'styled-components'
import React, { FC, ReactNode, useContext, useRef, useState } from 'react'
import { ListItemDetail } from '../List/ListItemDetail'
import { Paragraph, Text } from '../Text'
import { Truncate } from '../Truncate'
import { FlexItem } from '../Layout'
import { Icon, IconPlaceholder } from '../Icon'
import { HoverDisclosureContext, HoverDisclosure, useHovered } from '../utils'
import { ListItemContext } from './ListItemContext'
import { ListItemLayout } from './ListItemLayout'
import { createSafeRel } from './utils'
import { ListItemBackgroundColorProps } from './types'

const TruncateWrapper: FC<{
  color?: string
  fontSize?: FontSizes
  lineHeight?: FontSizes
}> = ({ children, color, fontSize, lineHeight }) => (
  <Truncate>
    <Text color={color} fontSize={fontSize} lineHeight={lineHeight}>
      {children}
    </Text>
  </Truncate>
)

interface DetailOptions {
  /**
   * If true, the detail will appear outside of the item's grey background on hover
   * In addition, if true, events originating from the detail will not bubble to the item's handlers
   * @default false
   */
  accessory?: boolean
  /**
   * If true, the detail will only appear on hover
   * @default false
   */
  hoverDisclosure?: boolean
}

interface DetailObject {
  /**
   * Detail element displayed right of the label element
   */
  content: ReactNode
  /**
   * Options that affect detail behavior
   */
  options: DetailOptions
}

export interface ListItemProps
  extends CompatibleHTMLProps<HTMLElement>,
    Omit<ListItemBackgroundColorProps, 'hovered'> {
  /*
   * optional extra description
   */
  description?: ReactNode
  /**
   * Detail element placed right of the item children. Prop value can take one of two forms:
   * 1. ReactNode
   * 2. Object with content and options properties
   */
  detail?: ReactNode | DetailObject
  /**
   * Optional icon placed left of the item children
   */
  icon?: IconNames
  /**
   * Display an icon/logo that is not available on our components list. Use artwork prop with an svg instead of Icon name.
   */
  iconArtwork?: ReactNode
  /**
   * Sets the correct accessible role for the ListItem:
   * - Use **'link'** for items that navigation to another page
   * - Use **'button'** for items that trigger in page interactions, like displaying a dialog
   */
  itemRole?: 'link' | 'button'
  /**
   * If true, text children and description will be truncated if text overflows
   */
  truncate?: boolean
}

const ListItemInternal: FC<ListItemProps> = (props) => {
  const {
    children,
    className,
    current,
    description,
    detail,
    disabled,
    href,
    icon,
    iconArtwork,
    itemRole,
    keyColor,
    onBlur,
    onClick,
    onKeyUp,
    selected,
    target,
    truncate,
  } = props

  const { iconGutter, itemDimensions } = useContext(ListItemContext)

  const [isFocusVisible, setFocusVisible] = useState(false)

  const itemRef = useRef<HTMLLIElement>(null)
  const [hovered] = useHovered(itemRef)

  const handleOnBlur = (event: React.FocusEvent<HTMLElement>) => {
    setFocusVisible(false)
    onBlur && onBlur(event)
  }

  const handleOnClick = (event: React.MouseEvent<HTMLElement>) => {
    setFocusVisible(false)
    onClick && onClick(event)
  }

  const handleOnKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
    onKeyUp && onKeyUp(event)
    setFocusVisible(true)
  }

  const renderedIcon =
    icon || iconArtwork ? (
      <Icon
        artwork={iconArtwork}
        color="text1"
        name={icon}
        size={itemDimensions.iconSize}
        mr={itemDimensions.iconGap}
      />
    ) : (
      iconGutter && (
        <IconPlaceholder
          size={itemDimensions.iconSize}
          mr={itemDimensions.iconGap}
        />
      )
    )

  if (disabled && itemRole === 'link') {
    // eslint-disable-next-line no-console
    console.warn(
      'itemRole="link" and disabled cannot be combined - use itemRole="button" if you need to offer a disabled ListItem'
    )
  }

  const ContentContainer = !disabled && itemRole === 'link' ? 'a' : 'button'
  const TextWrapper = truncate ? TruncateWrapper : Paragraph

  const renderedChildren =
    typeof children === 'string' ? (
      <TextWrapper
        fontSize={itemDimensions.labelFontSize}
        lineHeight={itemDimensions.labelLineHeight}
      >
        {children}
      </TextWrapper>
    ) : (
      children
    )

  const renderedDescription =
    typeof children === 'string' ? (
      <TextWrapper color="text2" fontSize="xsmall">
        {description}
      </TextWrapper>
    ) : (
      description
    )

  let accessory, hoverDisclosure, detailContent

  if (typeof detail === 'object' && detail && 'options' in detail) {
    accessory = detail.options.accessory
    detailContent = detail.content
    hoverDisclosure = detail.options.hoverDisclosure
  } else {
    detailContent = detail
  }

  const renderedDetail = detail && (
    <HoverDisclosure visible={!hoverDisclosure}>
      <ListItemDetail pr={accessory ? itemDimensions.px : '0'}>
        {detailContent}
      </ListItemDetail>
    </HoverDisclosure>
  )

  const listItemContent = (
    <>
      <ContentContainer
        aria-current={current}
        aria-selected={selected}
        href={href}
        onBlur={handleOnBlur}
        onClick={disabled ? undefined : handleOnClick}
        onKeyUp={handleOnKeyUp}
        rel={createSafeRel(props.rel, props.target)}
        role="listitem"
        target={target}
        tabIndex={-1}
      >
        {renderedIcon}
        <FlexItem>
          {renderedChildren}
          {renderedDescription}
        </FlexItem>
        {!accessory && renderedDetail}
      </ContentContainer>
      {accessory && renderedDetail}
    </>
  )

  return (
    <HoverDisclosureContext.Provider value={{ visible: hovered }}>
      <ListItemLayout
        accessory={accessory}
        className={className}
        description={description}
        disabled={disabled}
        focusVisible={isFocusVisible}
        hovered={hovered}
        keyColor={keyColor}
        ref={itemRef}
        selected={selected || current}
        {...itemDimensions}
      >
        {listItemContent}
      </ListItemLayout>
    </HoverDisclosureContext.Provider>
  )
}

export const ListItem = styled(ListItemInternal)``
