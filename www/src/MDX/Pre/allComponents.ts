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

import {
  Accordion,
  AccordionContent,
  AccordionDisclosure,
  Aside,
  Breakpoint,
  DataTable,
  DataTableItem,
  DataTableAction,
  DataTableCell,
  AvatarCombo,
  AvatarIcon,
  AvatarUser,
  Badge,
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
  CheckboxGroup,
  Chip,
  Code,
  CodeBlock,
  ColorWheel,
  ComponentsProvider,
  Confirm,
  ConfirmLayout,
  CopyToClipboard,
  doDataTableSort,
  DateFormat,
  DateTimeFormat,
  Dialog,
  DialogContent,
  DialogContext,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  Divider,
  DividerVertical,
  Drawer,
  FadeIn,
  Field,
  FieldCheckbox,
  FieldCheckboxGroup,
  FieldChips,
  FieldColor,
  FieldDate,
  FieldDateRange,
  FieldRadio,
  FieldRadioGroup,
  FieldRangeSlider,
  FieldSelect,
  FieldSelectMulti,
  FieldSlider,
  Fieldset,
  FieldText,
  FieldTextArea,
  FieldTime,
  FieldTimeSelect,
  FieldToggleSwitch,
  Flex,
  FlexItem,
  Footer,
  Form,
  Grid,
  Header,
  Heading,
  Icon,
  IconButton,
  InlineInputText,
  InlineTextArea,
  InputChips,
  InputColor,
  InputDate,
  InputDateRange,
  InputFilters,
  InputHidden,
  InputSearch,
  InputText,
  InputTime,
  InputTimeSelect,
  Label,
  Layout,
  Link,
  List,
  ListItem,
  LuminositySlider,
  Menu,
  MenuDivider,
  MenuHeading,
  MenuItem,
  MenuList,
  MessageBar,
  OrderedList,
  Page,
  PageSize,
  Pagination,
  Panel,
  Panels,
  Paragraph,
  Popover,
  PopoverContent,
  ProgressCircular,
  Prompt,
  Radio,
  RadioGroup,
  RangeSlider,
  Section,
  Select,
  SelectMulti,
  Slider,
  Space,
  SpaceVertical,
  Span,
  Spinner,
  Status,
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
  TimeFormat,
  Truncate,
  theme,
  ToggleSwitch,
  Tooltip,
  Tree,
  TreeItem,
  UnorderedList,
  useConfirm,
  useDialog,
  useMixedStateCheckbox,
  useDrawer,
  usePanel,
  usePreviousValue,
  useSelectManager,
  useTabs,
  useToggle,
  VisuallyHidden,
} from '@looker/components'

import { DialogSurface } from '@looker/components/src/Dialog/DialogSurface'
import styled from 'styled-components'
import isEqual from 'lodash/isEqual'
import { useState } from 'react'
import { GridPlaceholder } from '../../helpers/GridPlaceholder'

const otherLibraries = {
  GridPlaceholder,
  isEqual,
  styled,
  theme,
  useState,
}

const hooks = {
  doDataTableSort,
  useConfirm,
  useDialog,
  useDrawer,
  useMixedStateCheckbox,
  usePanel,
  usePreviousValue,
  useSelectManager,
  useTabs,
  useToggle,
}

export const allComponents = {
  ...otherLibraries,
  ...hooks,
  Accordion,
  AccordionContent,
  AccordionDisclosure,
  Aside,
  AvatarCombo,
  AvatarIcon,
  AvatarUser,
  Badge,
  Box,
  Breakpoint,
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
  CheckboxGroup,
  Chip,
  Code,
  CodeBlock,
  ColorWheel,
  ComponentsProvider,
  Confirm,
  ConfirmLayout,
  CopyToClipboard,
  DataTable,
  DataTableAction,
  DataTableCell,
  DataTableItem,
  DateFormat,
  DateTimeFormat,
  Dialog,
  DialogContent,
  DialogContext,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogSurface,
  Divider,
  DividerVertical,
  Drawer,
  FadeIn,
  Field,
  FieldCheckbox,
  FieldCheckboxGroup,
  FieldChips,
  FieldColor,
  FieldDate,
  FieldDateRange,
  FieldRadio,
  FieldRadioGroup,
  FieldRangeSlider,
  FieldSelect,
  FieldSelectMulti,
  FieldSlider,
  FieldText,
  FieldTextArea,
  FieldTime,
  FieldTimeSelect,
  FieldToggleSwitch,
  Fieldset,
  Flex,
  FlexItem,
  Footer,
  Form,
  Grid,
  Header,
  Heading,
  Icon,
  IconButton,
  InlineInputText,
  InlineTextArea,
  InputChips,
  InputColor,
  InputDate,
  InputDateRange,
  InputFilters,
  InputHidden,
  InputSearch,
  InputText,
  InputTime,
  InputTimeSelect,
  Label,
  Layout,
  Link,
  List,
  ListItem,
  LuminositySlider,
  Menu,
  MenuDivider,
  MenuHeading,
  MenuItem,
  MenuList,
  MessageBar,
  OrderedList,
  Page,
  PageSize,
  Pagination,
  Panel,
  Panels,
  Paragraph,
  Popover,
  PopoverContent,
  ProgressCircular,
  Prompt,
  Radio,
  RadioGroup,
  RangeSlider,
  Section,
  Select,
  SelectMulti,
  Slider,
  Space,
  SpaceVertical,
  Span,
  Spinner,
  Status,
  Swatch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Tabs,
  Text,
  TextArea,
  TimeFormat,
  ToggleSwitch,
  Tooltip,
  Tree,
  TreeItem,
  Truncate,
  UnorderedList,
  VisuallyHidden,
}
