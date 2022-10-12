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
const localeTemplate = (locale, resources) => {
  const localeVarName = locale.replace('-', '')

  return `import merge from 'lodash/merge'
  import type { I18nState } from '../../utils'
  import {${localeVarName} as visAdapterLocales} from '@looker/visualizations-adapters'
  import {${localeVarName} as visTableLocales} from '@looker/visualizations-table'
  import {${localeVarName} as visVisxLocales} from '@looker/visualizations-visx'

const resources = ${resources}
  

export const ${localeVarName}: I18nState = {
  locale: '${locale}',
  resources: { 
    '${locale}': merge(
      {},
      resources, 
      visAdapterLocales.resources['${locale}'], 
      visTableLocales.resources['${locale}'],
      visVisxLocales.resources['${locale}']
    ) 
  },
}`
}

const i18nResourcesTemplate = [
  `import { i18nResources as componentsResources } from '@looker/components'
import { i18nResources as adapterResources } from '@looker/visualizations-adapters'
import { i18nResources as tableResources } from '@looker/visualizations-table'
import { i18nResources as visxResources } from '@looker/visualizations-visx'
import merge from 'lodash/merge'\n`,
  `export const i18nResources = merge(
    componentsResources, 
    adapterResources,
    tableResources,
    visxResources, {\n`,
  '})',
]

module.exports = {
  i18nResourcesTemplate,
  localeTemplate,
}
