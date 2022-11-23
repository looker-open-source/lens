"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[458],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Form/Inputs/InputChips/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),src=__webpack_require__("../components/src/index.ts"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:src.InputChips,title:"Docs/InputChips",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"inputchips"},"InputChips"),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"InputChips")," component takes an array of strings (",(0,esm.kt)("inlineCode",{parentName:"p"},"values"),") and renders them each as a ",(0,esm.kt)("a",{parentName:"p",href:"?path=/docs/docs-chip--docs"},"Chip")," inside a text box.\nThe input value is converted to chip values as the user types via the ",(0,esm.kt)("strong",null,"comma")," or ",(0,esm.kt)("strong",null,"enter")," keys, or on blur.\nChips can be selected, via keyboard commands or clicking, and copy-pasted."),(0,esm.kt)("p",null,"Unlike other form elements, ",(0,esm.kt)("inlineCode",{parentName:"p"},"InputChips")," does not store internal value state, and can only be used as a controlled component. Therefore the ",(0,esm.kt)("inlineCode",{parentName:"p"},"values")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"onChange")," props are required."),(0,esm.kt)("p",null,(0,esm.kt)("inlineCode",{parentName:"p"},"InputChips")," also supports ",(0,esm.kt)("inlineCode",{parentName:"p"},"summary")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"isClearable"),", similar to ",(0,esm.kt)("a",{parentName:"p",href:"?path=/docs/docs-inputsearch--docs"},"InputSearch")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"autoResize"),", similar to ",(0,esm.kt)("a",{parentName:"p",href:"?path=/docs/docs-inputtext--docs"},"InputText"),"."),(0,esm.kt)("h2",{id:"values"},"Values"),(0,esm.kt)("p",null,"The most basic implementation of ",(0,esm.kt)("inlineCode",{parentName:"p"},"InputChips")," requires setting the ",(0,esm.kt)("inlineCode",{parentName:"p"},"values")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"onChange")," props, where ",(0,esm.kt)("inlineCode",{parentName:"p"},"values")," is an array of string values."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React, { useState } from 'react'\nimport { InputChips } from '../'\n\nexport default function Basic() {\n  const [values, setValues] = useState(['cheddar', 'gouda'])\n\n  return (\n    <InputChips\n      placeholder=\"Enter multiple values\"\n      values={values}\n      onChange={setValues}\n    />\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"summary"},"Summary"),(0,esm.kt)("p",null,"Use the ",(0,esm.kt)("inlineCode",{parentName:"p"},"summary"),' prop to render string value to the right side of the input box (in this example: "You\'ve entered 2 items").'),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React, { useState } from 'react'\nimport { InputChips } from '../'\n\nexport default function Summary() {\n  const [values, setValues] = useState<string[]>(['cheddar', 'gouda'])\n  function handleChange(newValues: string[]) {\n    setValues(newValues)\n  }\n  return (\n    <InputChips\n      placeholder=\"Enter multiple values\"\n      summary={\n        values.length > 0 ? `You've entered ${values.length} items` : undefined\n      }\n      values={values}\n      onChange={handleChange}\n    />\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"isclearable"},"isClearable"),(0,esm.kt)("p",null,"You can disable the single-click clear button by setting ",(0,esm.kt)("inlineCode",{parentName:"p"},"isClearable")," to false. Users will still be able to clear individual chips using either backspace or the in-chip clear icons."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React, { useState } from 'react'\nimport { InputChips } from '../'\n\nexport default function IsClearable() {\n  const [values, setValues] = useState(['cheddar', 'gouda'])\n\n  return <InputChips isClearable={false} values={values} onChange={setValues} />\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"cleariconlabel-and-chipiconlabel"},"clearIconLabel and chipIconLabel"),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"InputChips")," component provides the prop ",(0,esm.kt)("inlineCode",{parentName:"p"},"clearIconLabel")," to customize the input icon label, the same is available to the individual ",(0,esm.kt)("inlineCode",{parentName:"p"},"Chip")," with the prop ",(0,esm.kt)("inlineCode",{parentName:"p"},"chipIconLabel"),". Hover over the the ",(0,esm.kt)("inlineCode",{parentName:"p"},"x")," icon to see the tooltip."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React, { useState } from 'react'\nimport { InputChips } from '../'\n\nexport default function ClearIconLabel() {\n  const [values, setValues] = useState(['cheddar', 'gouda'])\n\n  return (\n    <InputChips\n      clearIconLabel=\"remove all chips\"\n      chipIconLabel=\"remove this chip\"\n      values={values}\n      onChange={setValues}\n    />\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"autoresize"},"autoresize"),(0,esm.kt)("p",null,"To make the input box sizing respond dynamically to the amount of content set in the values, set ",(0,esm.kt)("inlineCode",{parentName:"p"},"autoResize")," to true."),(0,esm.kt)(Editor.Editor,{code:'/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the "Software"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React, { useState } from \'react\'\nimport { InputChips } from \'..\'\n\nexport default function AutoResize() {\n  const [values, setValues] = useState<string[]>([])\n\n  return (\n    <InputChips\n      autoResize={true}\n      values={values}\n      onChange={setValues}\n      placeholder="shrink to fit content"\n    />\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("h2",{id:"controlled-input-value"},"Controlled Input Value"),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"inputValue")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"onInputChange")," props allow control of the typed value. We also provide an optional ",(0,esm.kt)("inlineCode",{parentName:"p"},"onClear")," event hook that can be used for post-event cleanup or rendering helpful undo functionality."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React, { useState } from 'react'\nimport { InputChips } from '../'\nimport { usePreviousValue, Paragraph, Button } from '../../../../'\n\nexport default function Controlled() {\n  const [values, setValues] = useState<string[]>(['cheddar'])\n  const previousInputValues = usePreviousValue<string[]>(values)\n  const [inputValue, setInputValue] = useState('')\n  const [renderUndoButton, setRenderUndoButton] = useState(false)\n  function handleChange(newValues: string[]) {\n    setValues(newValues)\n    setRenderUndoButton(true)\n  }\n  function handleInputChange(newValue: string) {\n    setInputValue(newValue)\n  }\n  function handleClear() {\n    setRenderUndoButton(true)\n  }\n  function handleUndo() {\n    if (typeof previousInputValues !== 'undefined') {\n      setValues(previousInputValues)\n    }\n    setRenderUndoButton(false)\n  }\n  return (\n    <>\n      <InputChips\n        placeholder=\"Enter multiple values\"\n        summary={\n          values.length === 0\n            ? `You've entered ${values.length} items`\n            : undefined\n        }\n        values={values}\n        inputValue={inputValue}\n        onChange={handleChange}\n        onInputChange={handleInputChange}\n        onClear={handleClear}\n        mb=\"u3\"\n      />\n      {renderUndoButton && (\n        <>\n          You modified the values! <Button onClick={handleUndo}>Undo</Button>\n        </>\n      )}\n      {inputValue !== '' && (\n        <Paragraph>\n          You are typing: <strong>{inputValue}</strong>\n        </Paragraph>\n      )}\n    </>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"validation"},"Validation"),(0,esm.kt)("p",null,"If a duplicate value is entered, it will not be added to the values list.\nThe optional ",(0,esm.kt)("inlineCode",{parentName:"p"},"validate")," prop is a function returning a boolean that is called for each value that is entered.\nIf it returns false, the value is not added. ",(0,esm.kt)("inlineCode",{parentName:"p"},"onValidationFail")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"onDuplicate")," are optional handlers for when\ninvalid and duplicate values are entered."),(0,esm.kt)(Editor.Editor,{code:'/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the "Software"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React, { useState } from \'react\'\nimport { Paragraph } from \'../../../../\'\nimport { InputChips } from \'..\'\n\nexport default function Validation() {\n  const emailValidator = /^(([^<>()[\\]\\\\.,:\\s@"]+(\\.[^<>()[\\]\\\\.,:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/\n\n  const [values, setValues] = useState<string[]>([])\n  const [invalidValue, setInvalidValue] = useState<string[]>()\n  const [duplicateValue, setDuplicateValue] = useState<string[]>()\n\n  function handleChange(newValues: string[]) {\n    setValues(newValues)\n    setInvalidValue(undefined)\n    setDuplicateValue(undefined)\n  }\n  function validate(valueToValidate: string) {\n    return emailValidator.test(valueToValidate)\n  }\n  function handleInvalid(draftValue: string[]) {\n    setInvalidValue(draftValue)\n  }\n  function handleDuplicate(duplicateValue: string[]) {\n    setDuplicateValue(duplicateValue)\n  }\n\n  return (\n    <>\n      <InputChips\n        placeholder="Enter email addresses"\n        values={values}\n        validate={validate}\n        onChange={handleChange}\n        onValidationFail={handleInvalid}\n        onDuplicate={handleDuplicate}\n        mb="u3"\n      />\n      {invalidValue && (\n        <Paragraph>You entered an invalid email: {invalidValue}</Paragraph>\n      )}\n      {duplicateValue && (\n        <Paragraph>{duplicateValue} has already been entered</Paragraph>\n      )}\n    </>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("h2",{id:"formatinputvalue"},"formatInputValue"),(0,esm.kt)("p",null,"Use this callback to format values after there are entered, before validation. In this example, all chips are converted to UPPERCASE upon entry:"),(0,esm.kt)(Editor.Editor,{code:'/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the "Software"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React, { useState } from \'react\'\nimport { InputChips } from \'../\'\n\nexport default function FormatInput() {\n  const [values, setValues] = useState<string[]>([])\n  return (\n    <InputChips\n      placeholder="Transform values to UPPERCASE"\n      values={values}\n      onChange={setValues}\n      formatInputValue={val => val.toUpperCase()}\n    />\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("p",null,"By default, any leading or trailing whitespace will be trimmed. To disable input formatting altogether,\nuse ",(0,esm.kt)("inlineCode",{parentName:"p"},"formatInputValue={false}"),"."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React, { useState } from 'react'\nimport { InputChips } from '..'\nimport { Space } from '../../../..'\n\nexport default function FormatInputFalse() {\n  const [values, setValues] = useState([' initial  ', '  values'])\n  return (\n    <Space>\n      <InputChips\n        values={values}\n        onChange={setValues}\n        formatInputValue={false}\n        width={400}\n      />\n      <pre data-testid=\"pre\">{JSON.stringify(values)}</pre>\n    </Space>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"removeonbackspace"},"removeOnBackspace"),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"removeOnBackspace")," prop defaults to true.\nWhen set to false, hitting the ",(0,esm.kt)("inlineCode",{parentName:"p"},"Backspace")," key while focused in the input will not remove values."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React, { useState } from 'react'\nimport { InputChips } from '../'\n\nexport default function RemoveOnBackspace() {\n  const [values, setValues] = useState<string[]>(['cheddar', 'gouda'])\n  function handleChange(newValues: string[]) {\n    setValues(newValues)\n  }\n  return (\n    <InputChips\n      placeholder=\"Backspace does not remove values\"\n      values={values}\n      onChange={handleChange}\n      removeOnBackspace={false}\n    />\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"disable"},"Disable"),(0,esm.kt)("p",null,"Use the ",(0,esm.kt)("inlineCode",{parentName:"p"},"disable")," property to make an input field un-editable."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React, { useState } from 'react'\nimport { InputChips } from '../'\n\nexport default function Disable() {\n  const [values, setValues] = useState(['cheddar', 'gouda'])\n\n  return <InputChips disabled values={values} onChange={setValues} />\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"readonly-property"},"ReadOnly property"),(0,esm.kt)("p",null,"As the name suggests, readOnly makes the text un-editable."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React, { useState } from 'react'\nimport { InputChips } from '../'\n\nexport default function ReadOnly() {\n  const [values, setValues] = useState(['you', \"can't\", 'change', 'me', 'here'])\n\n  return <InputChips readOnly values={values} onChange={setValues} />\n}\n",mdxType:"Editor"}),(0,esm.kt)(dist_esm.ArgsTable,{of:src.InputChips,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/InputChips",component:src.InputChips,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);