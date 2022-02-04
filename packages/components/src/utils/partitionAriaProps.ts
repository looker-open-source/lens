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

import type React from 'react'

/**
 * Partitions an object into 2 objects, the first containing all aria related prop keys and their respective values
 * and the second containing all other prop keys and their respective values
 *
 * @param {T extends React.AriaAttribute} props
 * @returns {Array} A tuple where the first object contains all aria related props and the second object contains the remaining props
 */
export const partitionAriaProps = <T extends React.AriaAttributes>(
  props: T
) => {
  const aria: { [key: string]: string } = {}
  const remainder: { [key: string]: string } = {}

  Object.entries(props).forEach(([key, value]) =>
    key.startsWith('aria-') ? (aria[key] = value) : (remainder[key] = value)
  )

  return [aria, remainder]
}
