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
import merge from 'lodash/merge'
import dateLocale from 'date-fns/locale/es'
import type { I18nStateWithDates } from '../../utils'
import { esES as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'Añadir',
    Remove: 'Quitar',
  },
  BeforeAfter: {
    absolute: '(absoluto)',
    relative: '(relativo)',
  },
  Between: {
    AND: 'Y',
  },
  get_date_filter_options: {
    is: 'es',
    'is any time': 'es cualquier hora',
    'is before': 'es antes de',
    'is in range': 'está dentro del intervalo',
    'is in the last': 'es en anterior',
    'is in the month': 'es en el mes',
    'is in the year': 'es en el año',
    'is next': 'es en siguiente',
    'is not null': 'no es nulo',
    'is null': 'es nulo',
    'is on or after': 'es el día o después de',
    'is on the day': 'es el día',
    'is previous': 'es en anterior',
    'is this': 'es en este período de',
  },
  get_filter_options: {
    'matches advanced': 'coincide (avanzado)',
  },
  get_location_filter_options: {
    Box: 'Caja',
    Circle: 'Círculo',
    Location: 'Ubicación',
    feet: 'pies',
    'is anywhere': 'está en cualquier lugar',
    'is not null': 'no es nulo',
    'is null': 'es nulo',
    kilometers: 'kilómetros',
    meters: 'metros',
    miles: 'millas',
  },
  get_number_filter_options: {
    exclusive: '(exclusivo)',
    inclusive: '[inclusivo]',
    is: 'es',
    'is between': 'es entre',
    'is greater': 'es >',
    'is greater equal': 'es >=',
    'is less': 'es <',
    'is less equal': 'es <=',
    'is not': 'no es',
    'is not between': 'no es entre',
    'is not null': 'no es nulo',
    'is null': 'es nulo',
    'left exclusive': '(exclusivo a la izquierda]',
    'right exclusive': '[exclusivo a la derecha)',
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'Últimos 14 días',
    'Last 180 Days': 'Últimos 180 días',
    'Last 28 Days': 'Últimos 28 días',
    'Last 30 Days': 'Últimos 30 días',
    'Last 365 Days': 'Últimos 365 días',
    'Last 7 Days': 'Últimos 7 días',
    'Last 90 Days': 'Últimos 90 días',
    'Previous Month': 'Mes anterior',
    'Previous Quarter': 'Trimestre anterior',
    'Previous Week': 'Semana anterior',
    'Previous Year': 'Año anterior',
    'This Month': 'Este mes',
    'This Quarter': 'Este trimestre',
    'This Week': 'Esta semana',
    'This Year': 'Este año',
    Today: 'Hoy',
    'Year To Date': 'Año a la fecha',
    Yesterday: 'Ayer',
  },
  get_string_filter_options: {
    contains: 'contiene',
    'doesnt contain': 'no contiene',
    'doesnt end with': 'no termina con',
    'doesnt start with': 'no empieza con',
    'ends with': 'termina con',
    is: 'está',
    'is blank': 'está en blanco',
    'is not': 'no está',
    'is not blank': 'no está en blanco',
    'is not null': 'no es nulo',
    'is null': 'es nulo',
    'starts with': 'empieza con',
  },
  get_tier_filter_options: {
    is: 'es',
    'is any value': 'es cualquier valor',
    'is not': 'no es',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'coincide con un atributo de usuario',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NumberFilter: {
    'any value': 'cualquier valor',
  },
  OperatorLabel: {
    AND: 'Y',
    OR: 'O',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Borrar todo',
    Remove: 'Quitar',
    Toggle: 'Alternar',
  },
  Relative: {
    ago: 'antes',
    'from now': 'a partir de ahora',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Elija el intervalo temporal',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Personalizado',
    Presets: 'Valores preestablecidos',
  },
  RelativeTimeframePresets: {
    More: 'Más',
  },
  use_option_filtering: {
    'No values': 'No hay ningún valor.',
    'No values match': 'No hay ningún valor que coincida.',
  },
  use_placeholder: {
    'any value': 'cualquier valor',
  },
  use_suggestable: {
    'Error loading suggestions': 'Error al cargar las sugerencias',
  },
  use_validation_message: {
    'Value required': 'Se requiere un valor.',
  },
}

export const esES: I18nStateWithDates = {
  dateLocale,
  locale: 'es-ES',
  resources: { 'es-ES': merge(resources, expressionLocale.resources['es-ES']) },
}
