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

import {
  AvatarCombo,
  AvatarIcon,
  AvatarUser,
  Badge,
  Banner,
  Box,
  Button,
  ButtonGroup,
  ButtonItem,
  ButtonOutline,
  ButtonToggle,
  ButtonTransparent,
  Calendar,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Chip,
  Code,
  CodeBlock,
  ColorWheel,
  ComponentsProvider,
  Confirm,
  ConfirmLayout,
  DateFormat,
  DateTimeFormat,
  Dialog,
  DialogManager,
  Divider,
  Drawer,
  DrawerManager,
  FieldCheckbox,
  FieldColor,
  FieldRadio,
  FieldSelect,
  Fieldset,
  FieldText,
  FieldTextArea,
  FieldToggleSwitch,
  Flex,
  FlexItem,
  Form,
  Heading,
  Icon,
  IconButton,
  InlineInputText,
  InputChips,
  InputDate,
  InputDateRange,
  InputHidden,
  InputSearch,
  InputText,
  InputTime,
  InputTimeSelect,
  Label,
  Link,
  List,
  ListItem,
  LuminositySlider,
  Menu,
  MenuContext,
  MenuDisclosure,
  MenuGroup,
  MenuItem,
  MenuList,
  MenuSearch,
  ModalContent,
  ModalContext,
  ModalFooter,
  ModalHeader,
  ModalSurface,
  Paragraph,
  Popover,
  PopoverContent,
  Prompt,
  Radio,
  Select,
  SelectMulti,
  Slider,
  Spinner,
  Swatch,
  Tab,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  TextArea,
  theme,
  TimeFormat,
  ToggleSwitch,
  Tooltip,
  useConfirm,
  useMixedStateCheckbox,
  useTabs,
  useToggle,
  VisuallyHidden,
} from '@looker/components'
import { palette } from '@looker/design-tokens'

import styled from 'styled-components'
import isEqual from 'lodash/isEqual'
import { useState } from 'react'

export const allComponents = {
  useState,

  styled,

  isEqual,

  palette,
  AvatarCombo,
  AvatarIcon,
  AvatarUser,
  Badge,
  Banner,
  Box,
  Button,
  ButtonGroup,
  ButtonItem,
  ButtonOutline,
  ButtonToggle,
  ButtonTransparent,
  Calendar,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Chip,
  Code,
  CodeBlock,
  ColorWheel,
  ComponentsProvider,
  Confirm,
  ConfirmLayout,
  DateFormat,
  DateTimeFormat,
  Dialog,
  DialogManager,
  Divider,
  Drawer,
  DrawerManager,
  FieldCheckbox,
  FieldColor,
  FieldRadio,
  FieldSelect,
  Fieldset,
  FieldText,
  FieldTextArea,
  FieldToggleSwitch,
  Flex,
  FlexItem,
  Form,
  Heading,
  Icon,
  IconButton,
  InlineInputText,
  InputChips,
  InputDate,
  InputDateRange,
  InputHidden,
  InputSearch,
  InputText,
  InputTime,
  InputTimeSelect,
  Label,
  Link,
  List,
  ListItem,
  LuminositySlider,
  Menu,
  MenuContext,
  MenuDisclosure,
  MenuGroup,
  MenuItem,
  MenuList,
  MenuSearch,
  ModalContent,
  ModalContext,
  ModalFooter,
  ModalHeader,
  ModalSurface,
  Paragraph,
  Popover,
  PopoverContent,
  Prompt,
  Radio,
  Select,
  SelectMulti,
  Slider,
  Spinner,
  Swatch,
  Tab,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  TextArea,
  theme,
  TimeFormat,
  ToggleSwitch,
  Tooltip,
  useConfirm,
  useMixedStateCheckbox,
  useTabs,
  useToggle,
  VisuallyHidden,
}
