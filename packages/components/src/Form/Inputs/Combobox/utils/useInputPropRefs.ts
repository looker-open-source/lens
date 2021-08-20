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
import type { Context } from 'react'
import { useContext, useLayoutEffect } from 'react'
import type { ComboboxInputProps, ComboboxMultiInputProps } from '../types'
import type {
  ComboboxContextProps,
  ComboboxMultiContextProps,
} from '../ComboboxContext'

export function useInputPropRefs<
  TProps extends
    | ComboboxInputProps
    | ComboboxMultiInputProps = ComboboxInputProps,
  TContext extends
    | ComboboxContextProps
    | ComboboxMultiContextProps = ComboboxContextProps
>(
  { autoComplete = true, freeInput = false, inputReadOnly = false }: TProps,
  context: Context<TContext>
) {
  const { autoCompletePropRef, freeInputPropRef, inputReadOnlyPropRef } =
    useContext(context)

  useLayoutEffect(() => {
    if (autoCompletePropRef) autoCompletePropRef.current = autoComplete
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoComplete])

  useLayoutEffect(() => {
    if (freeInputPropRef) freeInputPropRef.current = freeInput
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [freeInput])

  useLayoutEffect(() => {
    if (inputReadOnlyPropRef) inputReadOnlyPropRef.current = inputReadOnly
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputReadOnly])
}
