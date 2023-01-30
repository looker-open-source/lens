"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[2264],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Badge/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),Badge=__webpack_require__("../components/src/Badge/Badge.tsx"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");try{Intent.displayName="Intent",Intent.__docgenInfo={description:"",displayName:"Intent",props:{children:{defaultValue:null,description:"I18n recommended: content that is user visible should be treated for i18n",name:"children",required:!0,type:{name:"ReactNode"}},intent:{defaultValue:{value:"key"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"key"'},{value:'"critical"'},{value:'"warn"'},{value:'"positive"'},{value:'"inform"'},{value:'"neutral"'}]}},size:{defaultValue:{value:"medium"},description:"Defines the size of Badge diameter.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Badge/stories/Intent.tsx#Intent"]={docgenInfo:Intent.__docgenInfo,name:"Intent",path:"../components/src/Badge/stories/Intent.tsx#Intent"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:Badge.C,title:"Docs/Badge",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"badge"},"Badge"),(0,esm.kt)("p",null,"A ",(0,esm.kt)("inlineCode",{parentName:"p"},"Badge")," is used for labeling elements with a message or status."),(0,esm.kt)("h2",{id:"intent"},"Intent"),(0,esm.kt)("p",null,"Badge ",(0,esm.kt)("inlineCode",{parentName:"p"},"intent")," is specified as a design token with a semantic meaning. The values can be one of ",(0,esm.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,esm.kt)("inlineCode",{parentName:"p"},"positive"),", ",(0,esm.kt)("inlineCode",{parentName:"p"},"inform"),", ",(0,esm.kt)("inlineCode",{parentName:"p"},"neutral"),", ",(0,esm.kt)("inlineCode",{parentName:"p"},"warn")," or ",(0,esm.kt)("inlineCode",{parentName:"p"},"critical"),"."),(0,esm.kt)(Editor.Editor,{code:'/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\n\nimport React from \'react\'\nimport { Badge, Space } from \'../..\'\nimport type { BadgeProps } from \'../Badge\'\n\nexport default function Intent(props: BadgeProps) {\n  return (\n    <Space around>\n      <Badge intent="key" {...props}>\n        Key\n      </Badge>\n      <Badge intent="positive" {...props}>\n        Positive\n      </Badge>\n      <Badge intent="inform" {...props}>\n        Inform\n      </Badge>\n      <Badge intent="neutral" {...props}>\n        Neutral\n      </Badge>\n      <Badge intent="warn" {...props}>\n        Warn\n      </Badge>\n      <Badge intent="critical" {...props}>\n        Critical\n      </Badge>\n    </Space>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("h2",{id:"sizes"},"Sizes"),(0,esm.kt)("p",null,"Badge ",(0,esm.kt)("inlineCode",{parentName:"p"},"size")," is specified as a design token of ",(0,esm.kt)("inlineCode",{parentName:"p"},"small"),", ",(0,esm.kt)("inlineCode",{parentName:"p"},"medium")," or ",(0,esm.kt)("inlineCode",{parentName:"p"},"large"),". You cannot specify other values such as pixels or design token values outside that range such as ",(0,esm.kt)("inlineCode",{parentName:"p"},"xxlarge"),"."),(0,esm.kt)(Editor.Editor,{code:'/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\n\nimport React from \'react\'\nimport { Badge, Space } from \'../..\'\n\nexport default function Sizes() {\n  return (\n    <Space around>\n      <Badge size="small">Small</Badge>\n      <Badge size="medium">Medium</Badge>\n      <Badge size="large">Large</Badge>\n    </Space>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.ArgsTable,{of:Badge.C,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/Badge",component:Badge.C,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);