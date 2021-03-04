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

import React, { FC, useContext, useRef, RefObject } from 'react'
import styled from 'styled-components'
import { Heading } from '../Text/Heading'
import { listItemDimensions } from '../List'
import { ListItemContext } from '../List/ListItemContext'
import { useElementVisibility } from './MenuHeading.hooks'

export const MenuHeading: FC<{ children: string; className?: string }> = ({
  children,
  className,
}) => {
  const labelShimRef: RefObject<any> = useRef()
  const isLabelShimVisible = useElementVisibility(labelShimRef)

  const { density } = useContext(ListItemContext)
  const { px } = listItemDimensions(density)

  return (
    <MenuHeadingWrapper
      className={className}
      renderBoxShadow={!isLabelShimVisible}
    >
      {/*
        NOTE: The labelShimRef div is required for box-shadow to appear when the heading
        is sticky to the top of the container. Using IntersectionObserver,
        we detect when this 0-height element disappears from the page and then
        render the shadow.
      */}
      <div ref={labelShimRef} style={{ height: '0' }} />
      <Heading
        as="h2"
        color="text5"
        fontFamily="brand"
        fontSize="xsmall"
        fontWeight="medium"
        lineHeight="xsmall"
        px={px}
        pb="xsmall"
      >
        {children}
      </Heading>
    </MenuHeadingWrapper>
  )
}

interface MenuHeadingWrapperProps {
  renderBoxShadow: boolean
}

const MenuHeadingWrapper = styled.li<MenuHeadingWrapperProps>`
  background: ${({ theme: { colors } }) => colors.background};
  box-shadow: ${({ renderBoxShadow, theme: { colors } }) =>
    renderBoxShadow ? `0 4px 8px -2px ${colors.ui2}` : 'none'};
  position: sticky;
  top: -1px;
`
