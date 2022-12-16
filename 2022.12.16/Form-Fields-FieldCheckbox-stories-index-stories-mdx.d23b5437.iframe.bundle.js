"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[9977],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Form/Fields/FieldCheckbox/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),src=__webpack_require__("../components/src/index.ts"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");try{Basic.displayName="Basic",Basic.__docgenInfo={description:"",displayName:"Basic",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"MixedBoolean"}},validationType:{defaultValue:null,description:"",name:"validationType",required:!1,type:{name:"enum",value:[{value:'"error"'}]}},"data-autofocus":{defaultValue:null,description:"",name:"data-autofocus",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Defines the label for the field.\nI18n recommended: content that is user visible should be treated for i18n",name:"label",required:!1,type:{name:"ReactNode"}},autoResize:{defaultValue:null,description:"Allows Field to adjust to the width of the input (InputText and Select)",name:"autoResize",required:!1,type:{name:"boolean"}},detail:{defaultValue:null,description:"notes and details added to the top right corner of the field\nI18n recommended: content that is user visible should be treated for i18n",name:"detail",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"notes and more info added to the bottom of the field\nI18n recommended: content that is user visible should be treated for i18n",name:"description",required:!1,type:{name:"ReactNode"}},inline:{defaultValue:{value:"false"},description:"Determines where to place the label in relation to the input.",name:"inline",required:!1,type:{name:"boolean"}},validationMessage:{defaultValue:null,description:"Holds the type of validation (error, warning, etc.) and corresponding message.",name:"validationMessage",required:!1,type:{name:"ValidationMessageProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Form/Fields/FieldCheckbox/stories/Basic.tsx#Basic"]={docgenInfo:Basic.__docgenInfo,name:"Basic",path:"../components/src/Form/Fields/FieldCheckbox/stories/Basic.tsx#Basic"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:src.FieldCheckbox,title:"Docs/FieldCheckbox",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"fieldcheckbox"},"FieldCheckbox"),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"<FieldCheckbox />")," component is composed of a ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Checkbox />")," component and a ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Label />")," component. Using ",(0,esm.kt)("inlineCode",{parentName:"p"},"<FieldCheckbox />")," allows for rendering validation messages."),(0,esm.kt)(Editor.Editor,{code:'/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the "Software"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the "Software"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\nimport React from \'react\'\nimport { FieldCheckbox } from \'../../FieldCheckbox\'\nimport type { FieldCheckboxProps } from \'../../FieldCheckbox\'\nexport default function Basic(props: FieldCheckboxProps) {\n  return (\n    <FieldCheckbox id="id" label="Example Field" name="thumbsUp" {...props} />\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("h3",{id:"fieldcheckbox-validation"},"FieldCheckbox Validation"),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"<FieldCheckbox />")," components accepts ",(0,esm.kt)("inlineCode",{parentName:"p"},"validationMessage")," as a property. This is an object with properties ",(0,esm.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"message"),"."),(0,esm.kt)("p",null,"See ",(0,esm.kt)("inlineCode",{parentName:"p"},"ValidationMessage")," ",(0,esm.kt)("a",{parentName:"p",href:"?path=/docs/docs-validationmessage--docs"},"here")),(0,esm.kt)("p",null,"If you have multiple fields in need of validation, it is recommended that you wrap them in a ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Form />")," component and pass to it a dictionary with key as field name and value as a ",(0,esm.kt)("inlineCode",{parentName:"p"},"ValidationMessage"),"."),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"alignValidationMessage")," can also be used to adjust where the validation message appears in relation to the input field. By default, it will render to the right, which is the best practice in most cases."),(0,esm.kt)("p",null,(0,esm.kt)("strong",{parentName:"p"},(0,esm.kt)("em",{parentName:"strong"},"Note: In the current implementation, any ",(0,esm.kt)("inlineCode",{parentName:"em"},"ValidationMessage")," set in a ",(0,esm.kt)("inlineCode",{parentName:"em"},"<FieldCheckbox />")," component will be overridden by ",(0,esm.kt)("inlineCode",{parentName:"em"},"ValidationMessages")," set in the parent ",(0,esm.kt)("inlineCode",{parentName:"em"},"<Form />")," component. Because of this, it is highly recommended that you only ever directly set ",(0,esm.kt)("inlineCode",{parentName:"em"},"ValidationMessage")," if a ",(0,esm.kt)("inlineCode",{parentName:"em"},"<FieldCheckbox />")," is outside a ",(0,esm.kt)("inlineCode",{parentName:"em"},"<Form />"),"."))),(0,esm.kt)(Editor.Editor,{code:'/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the "Software"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the "Software"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\nimport React from \'react\'\nimport { FieldCheckbox } from \'../../FieldCheckbox\'\nexport default function Validation() {\n  return (\n    <FieldCheckbox\n      id="id"\n      label="Validation error"\n      name="thumbsUp"\n      validationMessage={{ message: \'This is an error\', type: \'error\' }}\n    />\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.ArgsTable,{of:src.FieldCheckbox,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/FieldCheckbox",component:src.FieldCheckbox,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);