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
import React, { FC } from 'react'
import { render } from 'react-dom'
import {
  ComponentsProvider,
  FieldRangeSlider,
  FieldSlider,
  Grid,
} from '@looker/components'

const App: FC = () => {
  return (
    <ComponentsProvider>
      <Grid columns={2}>
        <FieldSlider
          detail="detail"
          description="description"
          label="Label"
          min={10}
          max={20}
          value={15}
        />
        <FieldSlider
          detail="detail"
          description="description"
          label="Label"
          min={10}
          max={20}
          value={15}
          validationMessage={{ message: 'errorMessage', type: 'error' }}
        />
      </Grid>
      <Grid columns={2}>
        <FieldRangeSlider
          defaultValue={[13, 17]}
          detail="detail"
          description="description"
          label="Label"
          min={10}
          max={20}
        />
        <FieldRangeSlider
          defaultValue={[13, 17]}
          detail="detail"
          description="description"
          label="Label"
          min={10}
          max={20}
          validationMessage={{ message: 'errorMessage', type: 'error' }}
        />
      </Grid>
    </ComponentsProvider>
  )
}

/*
  This is the binding site for the playground. If you want to edit the
  primary application, do your work in App.tsx instead.
 */
document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('container'))
})
