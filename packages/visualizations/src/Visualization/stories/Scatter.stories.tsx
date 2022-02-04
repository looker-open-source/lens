/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { Visualization } from '../Visualization'
import type {
  ScatterProps,
  Fields,
  CScatter,
} from '@looker/visualizations-adapters'
import {
  buildChartConfig,
  QueryContext,
  mockSdkConfigResponse,
  mockSdkDataResponse,
  mockSdkFieldsResponse,
  tabularResponse,
} from '@looker/visualizations-adapters'

export default {
  component: Visualization,
  title: 'Visualizations/Scatter',
}

type StoryTemplateProps = Omit<ScatterProps, 'config'> & {
  config: Omit<CScatter, 'type'>
}

const Template: Story<StoryTemplateProps> = ({
  config: configProp,
  ...restProps
}) => {
  const data = tabularResponse([...mockSdkDataResponse])

  const config = buildChartConfig({
    config: {
      ...mockSdkConfigResponse,
      ...configProp,
      type: 'scatter',
    },
    data,
    fields: mockSdkFieldsResponse as Fields,
  })

  return (
    <QueryContext.Provider
      value={{
        config,
        ok: true,
        loading: false,
        data,
        fields: mockSdkFieldsResponse as Fields,
      }}
    >
      <Visualization {...restProps} />
    </QueryContext.Provider>
  )
}

export const Scatter = Template.bind({})
Scatter.args = {
  height: 600,
  width: 800,
}

export const SizeBy = Template.bind({})
SizeBy.args = {
  height: 600,
  width: 800,
  config: {
    series: {
      'orders.count': { size_by: 'orders.average_total_amount_of_order_usd' },
    },
    y_axis: [{ range: [20, 75] }],
  },
}
