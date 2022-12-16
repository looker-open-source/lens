"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[2336],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Form/Inputs/CheckboxGroup/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),src=__webpack_require__("../components/src/index.ts"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");try{Basic.displayName="Basic",Basic.__docgenInfo={description:"",displayName:"Basic",props:{legend:{defaultValue:null,description:"Displayed above the children of Fieldset\nI18n recommended: content that is user visible should be treated for i18n",name:"legend",required:!1,type:{name:"ReactNode"}},wrap:{defaultValue:{value:"false"},description:"Allowed fields to wrap if they exceed the container width",name:"wrap",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Determines where to place the label in relation to the input.",name:"inline",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Use this property (alongside toggleOpen) if you wish to use the component in a `controlled` manner.\nisOpen determines whether the Accordion is currently open or closed",name:"isOpen",required:!1,type:{name:"boolean"}},toggleOpen:{defaultValue:null,description:"Use this property (alongside isOpen) if you wish to use the component in a `controlled` manner.\ntoggleOpen is a function that should control the value / state of isOpen",name:"toggleOpen",required:!1,type:{name:"((isOpen: boolean) => void)"}},defaultOpen:{defaultValue:null,description:"Use this property if you wish to use the component in a `uncontrolled` manner and have it open when initially rendering.\nComponent will hold internal state and open and close on disclosure click",name:"defaultOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback that is triggered when closing the Accordion (i.e. when clicking on an open Accordion)",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Callback that is triggered when opening the Accordion (i.e. when clicking on a closed Accordion)",name:"onOpen",required:!1,type:{name:"(() => void)"}},gap:{defaultValue:{value:"medium"},description:"Amount of space between fields",name:"gap",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"u4"'},{value:'"xxxsmall"'},{value:'"xxsmall"'},{value:'"xsmall"'},{value:'"medium"'},{value:'"large"'},{value:'"xlarge"'},{value:'"xxlarge"'},{value:'"xxxlarge"'},{value:'"xxxxlarge"'},{value:'"u05"'},{value:'"u1"'},{value:'"u2"'},{value:'"u3"'},{value:'"u5"'},{value:'"u6"'},{value:'"u7"'},{value:'"u8"'},{value:'"u9"'},{value:'"u10"'},{value:'"u11"'},{value:'"u12"'},{value:'"u13"'},{value:'"u14"'},{value:'"u15"'},{value:'"u16"'}]}},accordion:{defaultValue:{value:"false"},description:"If true, the Fieldset will be wrapped by an Accordion structure (i.e. a collapsible section)",name:"accordion",required:!1,type:{name:"boolean"}},fieldsHideLabel:{defaultValue:null,description:"",name:"fieldsHideLabel",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"CheckboxGroupOptionProps[]"}},validationType:{defaultValue:null,description:"",name:"validationType",required:!1,type:{name:"enum",value:[{value:'"error"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Form/Inputs/CheckboxGroup/stories/Basic.tsx#Basic"]={docgenInfo:Basic.__docgenInfo,name:"Basic",path:"../components/src/Form/Inputs/CheckboxGroup/stories/Basic.tsx#Basic"})}catch(__react_docgen_typescript_loader_error){}try{DisabledGroup.displayName="DisabledGroup",DisabledGroup.__docgenInfo={description:"",displayName:"DisabledGroup",props:{legend:{defaultValue:null,description:"Displayed above the children of Fieldset\nI18n recommended: content that is user visible should be treated for i18n",name:"legend",required:!1,type:{name:"ReactNode"}},wrap:{defaultValue:{value:"false"},description:"Allowed fields to wrap if they exceed the container width",name:"wrap",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Determines where to place the label in relation to the input.",name:"inline",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Use this property (alongside toggleOpen) if you wish to use the component in a `controlled` manner.\nisOpen determines whether the Accordion is currently open or closed",name:"isOpen",required:!1,type:{name:"boolean"}},toggleOpen:{defaultValue:null,description:"Use this property (alongside isOpen) if you wish to use the component in a `controlled` manner.\ntoggleOpen is a function that should control the value / state of isOpen",name:"toggleOpen",required:!1,type:{name:"((isOpen: boolean) => void)"}},defaultOpen:{defaultValue:null,description:"Use this property if you wish to use the component in a `uncontrolled` manner and have it open when initially rendering.\nComponent will hold internal state and open and close on disclosure click",name:"defaultOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback that is triggered when closing the Accordion (i.e. when clicking on an open Accordion)",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Callback that is triggered when opening the Accordion (i.e. when clicking on a closed Accordion)",name:"onOpen",required:!1,type:{name:"(() => void)"}},gap:{defaultValue:{value:"medium"},description:"Amount of space between fields",name:"gap",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"u4"'},{value:'"xxxsmall"'},{value:'"xxsmall"'},{value:'"xsmall"'},{value:'"medium"'},{value:'"large"'},{value:'"xlarge"'},{value:'"xxlarge"'},{value:'"xxxlarge"'},{value:'"xxxxlarge"'},{value:'"u05"'},{value:'"u1"'},{value:'"u2"'},{value:'"u3"'},{value:'"u5"'},{value:'"u6"'},{value:'"u7"'},{value:'"u8"'},{value:'"u9"'},{value:'"u10"'},{value:'"u11"'},{value:'"u12"'},{value:'"u13"'},{value:'"u14"'},{value:'"u15"'},{value:'"u16"'}]}},accordion:{defaultValue:{value:"false"},description:"If true, the Fieldset will be wrapped by an Accordion structure (i.e. a collapsible section)",name:"accordion",required:!1,type:{name:"boolean"}},fieldsHideLabel:{defaultValue:null,description:"",name:"fieldsHideLabel",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"CheckboxGroupOptionProps[]"}},validationType:{defaultValue:null,description:"",name:"validationType",required:!1,type:{name:"enum",value:[{value:'"error"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Form/Inputs/CheckboxGroup/stories/DisabledGroup.tsx#DisabledGroup"]={docgenInfo:DisabledGroup.__docgenInfo,name:"DisabledGroup",path:"../components/src/Form/Inputs/CheckboxGroup/stories/DisabledGroup.tsx#DisabledGroup"})}catch(__react_docgen_typescript_loader_error){}try{DisabledItem.displayName="DisabledItem",DisabledItem.__docgenInfo={description:"",displayName:"DisabledItem",props:{legend:{defaultValue:null,description:"Displayed above the children of Fieldset\nI18n recommended: content that is user visible should be treated for i18n",name:"legend",required:!1,type:{name:"ReactNode"}},wrap:{defaultValue:{value:"false"},description:"Allowed fields to wrap if they exceed the container width",name:"wrap",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Determines where to place the label in relation to the input.",name:"inline",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Use this property (alongside toggleOpen) if you wish to use the component in a `controlled` manner.\nisOpen determines whether the Accordion is currently open or closed",name:"isOpen",required:!1,type:{name:"boolean"}},toggleOpen:{defaultValue:null,description:"Use this property (alongside isOpen) if you wish to use the component in a `controlled` manner.\ntoggleOpen is a function that should control the value / state of isOpen",name:"toggleOpen",required:!1,type:{name:"((isOpen: boolean) => void)"}},defaultOpen:{defaultValue:null,description:"Use this property if you wish to use the component in a `uncontrolled` manner and have it open when initially rendering.\nComponent will hold internal state and open and close on disclosure click",name:"defaultOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback that is triggered when closing the Accordion (i.e. when clicking on an open Accordion)",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Callback that is triggered when opening the Accordion (i.e. when clicking on a closed Accordion)",name:"onOpen",required:!1,type:{name:"(() => void)"}},gap:{defaultValue:{value:"medium"},description:"Amount of space between fields",name:"gap",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"u4"'},{value:'"xxxsmall"'},{value:'"xxsmall"'},{value:'"xsmall"'},{value:'"medium"'},{value:'"large"'},{value:'"xlarge"'},{value:'"xxlarge"'},{value:'"xxxlarge"'},{value:'"xxxxlarge"'},{value:'"u05"'},{value:'"u1"'},{value:'"u2"'},{value:'"u3"'},{value:'"u5"'},{value:'"u6"'},{value:'"u7"'},{value:'"u8"'},{value:'"u9"'},{value:'"u10"'},{value:'"u11"'},{value:'"u12"'},{value:'"u13"'},{value:'"u14"'},{value:'"u15"'},{value:'"u16"'}]}},accordion:{defaultValue:{value:"false"},description:"If true, the Fieldset will be wrapped by an Accordion structure (i.e. a collapsible section)",name:"accordion",required:!1,type:{name:"boolean"}},fieldsHideLabel:{defaultValue:null,description:"",name:"fieldsHideLabel",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"CheckboxGroupOptionProps[]"}},validationType:{defaultValue:null,description:"",name:"validationType",required:!1,type:{name:"enum",value:[{value:'"error"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Form/Inputs/CheckboxGroup/stories/DisabledItem.tsx#DisabledItem"]={docgenInfo:DisabledItem.__docgenInfo,name:"DisabledItem",path:"../components/src/Form/Inputs/CheckboxGroup/stories/DisabledItem.tsx#DisabledItem"})}catch(__react_docgen_typescript_loader_error){}try{Inline.displayName="Inline",Inline.__docgenInfo={description:"",displayName:"Inline",props:{legend:{defaultValue:null,description:"Displayed above the children of Fieldset\nI18n recommended: content that is user visible should be treated for i18n",name:"legend",required:!1,type:{name:"ReactNode"}},wrap:{defaultValue:{value:"false"},description:"Allowed fields to wrap if they exceed the container width",name:"wrap",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Determines where to place the label in relation to the input.",name:"inline",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Use this property (alongside toggleOpen) if you wish to use the component in a `controlled` manner.\nisOpen determines whether the Accordion is currently open or closed",name:"isOpen",required:!1,type:{name:"boolean"}},toggleOpen:{defaultValue:null,description:"Use this property (alongside isOpen) if you wish to use the component in a `controlled` manner.\ntoggleOpen is a function that should control the value / state of isOpen",name:"toggleOpen",required:!1,type:{name:"((isOpen: boolean) => void)"}},defaultOpen:{defaultValue:null,description:"Use this property if you wish to use the component in a `uncontrolled` manner and have it open when initially rendering.\nComponent will hold internal state and open and close on disclosure click",name:"defaultOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback that is triggered when closing the Accordion (i.e. when clicking on an open Accordion)",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Callback that is triggered when opening the Accordion (i.e. when clicking on a closed Accordion)",name:"onOpen",required:!1,type:{name:"(() => void)"}},gap:{defaultValue:{value:"medium"},description:"Amount of space between fields",name:"gap",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"u4"'},{value:'"xxxsmall"'},{value:'"xxsmall"'},{value:'"xsmall"'},{value:'"medium"'},{value:'"large"'},{value:'"xlarge"'},{value:'"xxlarge"'},{value:'"xxxlarge"'},{value:'"xxxxlarge"'},{value:'"u05"'},{value:'"u1"'},{value:'"u2"'},{value:'"u3"'},{value:'"u5"'},{value:'"u6"'},{value:'"u7"'},{value:'"u8"'},{value:'"u9"'},{value:'"u10"'},{value:'"u11"'},{value:'"u12"'},{value:'"u13"'},{value:'"u14"'},{value:'"u15"'},{value:'"u16"'}]}},accordion:{defaultValue:{value:"false"},description:"If true, the Fieldset will be wrapped by an Accordion structure (i.e. a collapsible section)",name:"accordion",required:!1,type:{name:"boolean"}},fieldsHideLabel:{defaultValue:null,description:"",name:"fieldsHideLabel",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"CheckboxGroupOptionProps[]"}},validationType:{defaultValue:null,description:"",name:"validationType",required:!1,type:{name:"enum",value:[{value:'"error"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Form/Inputs/CheckboxGroup/stories/Inline.tsx#Inline"]={docgenInfo:Inline.__docgenInfo,name:"Inline",path:"../components/src/Form/Inputs/CheckboxGroup/stories/Inline.tsx#Inline"})}catch(__react_docgen_typescript_loader_error){}try{Controlled.displayName="Controlled",Controlled.__docgenInfo={description:"",displayName:"Controlled",props:{legend:{defaultValue:null,description:"Displayed above the children of Fieldset\nI18n recommended: content that is user visible should be treated for i18n",name:"legend",required:!1,type:{name:"ReactNode"}},wrap:{defaultValue:{value:"false"},description:"Allowed fields to wrap if they exceed the container width",name:"wrap",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Determines where to place the label in relation to the input.",name:"inline",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Use this property (alongside toggleOpen) if you wish to use the component in a `controlled` manner.\nisOpen determines whether the Accordion is currently open or closed",name:"isOpen",required:!1,type:{name:"boolean"}},toggleOpen:{defaultValue:null,description:"Use this property (alongside isOpen) if you wish to use the component in a `controlled` manner.\ntoggleOpen is a function that should control the value / state of isOpen",name:"toggleOpen",required:!1,type:{name:"((isOpen: boolean) => void)"}},defaultOpen:{defaultValue:null,description:"Use this property if you wish to use the component in a `uncontrolled` manner and have it open when initially rendering.\nComponent will hold internal state and open and close on disclosure click",name:"defaultOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback that is triggered when closing the Accordion (i.e. when clicking on an open Accordion)",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Callback that is triggered when opening the Accordion (i.e. when clicking on a closed Accordion)",name:"onOpen",required:!1,type:{name:"(() => void)"}},gap:{defaultValue:{value:"medium"},description:"Amount of space between fields",name:"gap",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"u4"'},{value:'"xxxsmall"'},{value:'"xxsmall"'},{value:'"xsmall"'},{value:'"medium"'},{value:'"large"'},{value:'"xlarge"'},{value:'"xxlarge"'},{value:'"xxxlarge"'},{value:'"xxxxlarge"'},{value:'"u05"'},{value:'"u1"'},{value:'"u2"'},{value:'"u3"'},{value:'"u5"'},{value:'"u6"'},{value:'"u7"'},{value:'"u8"'},{value:'"u9"'},{value:'"u10"'},{value:'"u11"'},{value:'"u12"'},{value:'"u13"'},{value:'"u14"'},{value:'"u15"'},{value:'"u16"'}]}},accordion:{defaultValue:{value:"false"},description:"If true, the Fieldset will be wrapped by an Accordion structure (i.e. a collapsible section)",name:"accordion",required:!1,type:{name:"boolean"}},fieldsHideLabel:{defaultValue:null,description:"",name:"fieldsHideLabel",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"CheckboxGroupOptionProps[]"}},validationType:{defaultValue:null,description:"",name:"validationType",required:!1,type:{name:"enum",value:[{value:'"error"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Form/Inputs/CheckboxGroup/stories/Controlled.tsx#Controlled"]={docgenInfo:Controlled.__docgenInfo,name:"Controlled",path:"../components/src/Form/Inputs/CheckboxGroup/stories/Controlled.tsx#Controlled"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:src.CheckboxGroup,title:"Docs/CheckboxGroup",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"checkboxgroup"},"CheckboxGroup"),(0,esm.kt)("p",null,"Groups of checkbox can be displayed with ",(0,esm.kt)("inlineCode",{parentName:"p"},"CheckboxGroup"),"."),(0,esm.kt)("h2",{id:"defaultvalue"},"defaultValue"),(0,esm.kt)("p",null,"Using ",(0,esm.kt)("inlineCode",{parentName:"p"},"defaultValue")," will render a checked checkbox. This is the preferred prop to use if you'd prefer CheckboxGroup to maintain it's own state internally."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React from 'react'\nimport { CheckboxGroup } from '../'\nimport type { CheckboxGroupProps } from '../'\n\nconst mockOptions = [\n  {\n    label: 'Cheddar',\n    value: 'cheddar',\n  },\n  {\n    label: 'Gouda',\n    value: 'gouda',\n  },\n]\n\nexport default function Basic(props: CheckboxGroupProps) {\n  const {\n    options = mockOptions,\n    defaultValue = ['cheddar'],\n    ...restProps\n  } = props\n\n  return (\n    <CheckboxGroup\n      defaultValue={defaultValue}\n      name=\"group1\"\n      options={options}\n      {...restProps}\n    />\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"disabled"},"Disabled"),(0,esm.kt)("p",null,"You can disable CheckboxGroup items in two ways:"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},"Disable everything by setting the prop ",(0,esm.kt)("inlineCode",{parentName:"li"},"disabled={true}")," on CheckboxGroup"),(0,esm.kt)("li",{parentName:"ul"},"Disable individual items by setting ",(0,esm.kt)("inlineCode",{parentName:"li"},"disabled: true")," on the option object")),(0,esm.kt)("h3",{id:"disabled-prop"},"Disabled Prop"),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React from 'react'\nimport { CheckboxGroup } from '..'\nimport type { CheckboxGroupProps } from '..'\n\nconst mockOptions = [\n  {\n    label: 'Cheddar',\n    value: 'cheddar',\n  },\n  {\n    label: 'Gouda',\n    value: 'gouda',\n  },\n]\n\nexport default function DisabledGroup(props: CheckboxGroupProps) {\n  const {\n    options = mockOptions,\n    defaultValue = ['cheddar'],\n    disabled = true,\n    ...restProps\n  } = props\n\n  return (\n    <CheckboxGroup\n      defaultValue={defaultValue}\n      disabled={disabled}\n      name=\"group1\"\n      options={options}\n      {...restProps}\n    />\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h3",{id:"disabled-option"},"Disabled Option"),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React from 'react'\nimport { CheckboxGroup } from '..'\nimport type { CheckboxGroupProps } from '..'\n\nconst mockOptions = [\n  {\n    disabled: true,\n    label: 'Brie',\n    value: 'brie',\n  },\n  {\n    label: 'Cheddar',\n    value: 'cheddar',\n  },\n  {\n    disabled: true,\n    label: 'Gouda',\n    value: 'gouda',\n  },\n  {\n    label: 'Mozzarella',\n    value: 'mozzarella',\n  },\n]\n\nexport default function DisabledItem(props: CheckboxGroupProps) {\n  const {\n    options = mockOptions,\n    defaultValue = ['cheddar'],\n    ...restProps\n  } = props\n\n  return (\n    <CheckboxGroup\n      defaultValue={defaultValue}\n      name=\"group1\"\n      options={options}\n      {...restProps}\n    />\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"inline"},"Inline"),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React from 'react'\nimport { CheckboxGroup } from '../'\nimport type { CheckboxGroupProps } from '../'\n\nconst mockOptions = [\n  {\n    label: 'Cheddar',\n    value: 'cheddar',\n  },\n  {\n    label: 'Gouda',\n    value: 'gouda',\n  },\n]\n\nexport default function Inline(props: CheckboxGroupProps) {\n  const {\n    inline = true,\n    options = mockOptions,\n    defaultValue = ['cheddar'],\n    ...restProps\n  } = props\n\n  return (\n    <CheckboxGroup\n      defaultValue={defaultValue}\n      inline={inline}\n      name=\"group1\"\n      options={options}\n      {...restProps}\n    />\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"controlled-component"},"Controlled component"),(0,esm.kt)("p",null,"Control externally via ",(0,esm.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"onChange")," props."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React, { useState } from 'react'\nimport { CheckboxGroup } from '../'\nimport type { CheckboxGroupProps } from '../'\nimport { Paragraph, Space, Heading } from '../../../../'\n\nconst mockOptions = [\n  {\n    label: 'Cheddar',\n    value: 'cheddar',\n  },\n  {\n    label: 'Gouda',\n    value: 'gouda',\n  },\n]\n\nexport default function Controlled(props: CheckboxGroupProps) {\n  const {\n    value: valueProp = ['cheddar'],\n    options = mockOptions,\n    ...restProps\n  } = props\n\n  const [value, setValue] = useState(valueProp)\n\n  return (\n    <Space align=\"start\">\n      <CheckboxGroup\n        name=\"cheeses\"\n        value={value}\n        onChange={setValue}\n        options={options}\n        {...restProps}\n      />\n      <div>\n        <Heading>Current Selection:</Heading>\n        <Paragraph>{value.join(', ')}</Paragraph>\n      </div>\n    </Space>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.ArgsTable,{of:src.CheckboxGroup,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/CheckboxGroup",component:src.CheckboxGroup,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);