"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[8380],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Form/Inputs/DateFormat/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});var react=__webpack_require__("../../node_modules/react/index.js"),esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),src=__webpack_require__("../components/src/index.ts"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");try{Basic.displayName="Basic",Basic.__docgenInfo={description:"",displayName:"Basic",props:{format:{defaultValue:null,description:"",name:"format",required:!1,type:{name:"string"}},locale:{defaultValue:null,description:"Locale object from date-fns.\n@example import ko from 'date-fns/locale/ko'",name:"locale",required:!1,type:{name:"Locale"}},timeZone:{defaultValue:null,description:"",name:"timeZone",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Form/Inputs/DateFormat/stories/Basic.tsx#Basic"]={docgenInfo:Basic.__docgenInfo,name:"Basic",path:"../components/src/Form/Inputs/DateFormat/stories/Basic.tsx#Basic"})}catch(__react_docgen_typescript_loader_error){}var Table=__webpack_require__("../components/src/Table/Table.tsx"),TableHead=__webpack_require__("../components/src/Table/TableHead/index.tsx"),TableRow=__webpack_require__("../components/src/Table/TableRow/index.tsx"),TableHeaderCell=__webpack_require__("../components/src/Table/TableHeaderCell/index.tsx"),TableBody=__webpack_require__("../components/src/Table/TableBody/index.tsx"),TableDataCell=__webpack_require__("../components/src/Table/TableDataCell/index.tsx"),DateFormat=__webpack_require__("../components/src/Form/Inputs/DateFormat/DateFormat.tsx");const DateFormatTable=()=>react.createElement(Table.i,{mb:"large"},react.createElement(TableHead.s,null,react.createElement(TableRow.S,null,react.createElement(TableHeaderCell.x,null,"FORMAT"),react.createElement(TableHeaderCell.x,null,"OUTPUT"))),react.createElement(TableBody.R,null,react.createElement(TableRow.S,null,react.createElement(TableDataCell.e,null,"Short"),react.createElement(TableDataCell.e,null,react.createElement(DateFormat.t,{format:"short"}))),react.createElement(TableRow.S,null,react.createElement(TableDataCell.e,null,"Medium *"),react.createElement(TableDataCell.e,null,react.createElement(DateFormat.t,null))),react.createElement(TableRow.S,null,react.createElement(TableDataCell.e,null,"Long"),react.createElement(TableDataCell.e,null,react.createElement(DateFormat.t,{format:"long"}))),react.createElement(TableRow.S,null,react.createElement(TableDataCell.e,null,"Full"),react.createElement(TableDataCell.e,null,react.createElement(DateFormat.t,{format:"full"})))));function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:src.DateFormat,title:"Docs/DateFormat",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"dateformat"},"DateFormat"),(0,esm.kt)("p",null,"As it's name implies, ",(0,esm.kt)("inlineCode",{parentName:"p"},"DateFormat")," is used to format a javascript Date object to human readable and localized text."),(0,esm.kt)("p",null,"This is the sibling component of ",(0,esm.kt)("a",{parentName:"p",href:"time-format"},(0,esm.kt)("inlineCode",{parentName:"a"},"TimeFormat")),", which does the same thing for times. If no Date object is provided, it will default to ",(0,esm.kt)("inlineCode",{parentName:"p"},"Now"),"."),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\n\nimport React from 'react'\nimport type { DateTimeFormatProps } from '../../DateTimeFormat'\nimport { DateFormat } from '../DateFormat'\n\nexport default function Basic(props: DateTimeFormatProps) {\n  return <DateFormat {...props} />\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"providing-a-date-object"},"Providing A Date Object"),(0,esm.kt)("p",null,"Wrap the ",(0,esm.kt)("inlineCode",{parentName:"p"},"DateFormat")," component around a javascript Date object to render a human-readable date."),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\n\nimport React from 'react'\nimport { DateFormat } from '../DateFormat'\n\nexport default function DateObject() {\n  return <DateFormat>{new Date(1589411215703)}</DateFormat>\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"format"},"Format"),(0,esm.kt)(DateFormatTable,{mdxType:"DateFormatTable"}),(0,esm.kt)("p",null,"*"," medium is the default format"),(0,esm.kt)("h2",{id:"timezone"},"TimeZone"),(0,esm.kt)("p",null,(0,esm.kt)("inlineCode",{parentName:"p"},"DateFormat"),", as well as ",(0,esm.kt)("a",{parentName:"p",href:"'time-format'"},(0,esm.kt)("inlineCode",{parentName:"a"},"TimeFormat"))," assume that the provided date object is anchored in UTC time. If you need to adjust this to display correctly, you can pass the user's preferred time zone into the ",(0,esm.kt)("inlineCode",{parentName:"p"},"timeZone")," prop. This component will accept any string listed in the the ",(0,esm.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",target:"_blank",rel:"nofollow noopener noreferrer"},"IANA standard")),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\n\nimport React from 'react'\nimport { DateFormat } from '../DateFormat'\n\nexport default function Format() {\n  return (\n    <DateFormat timeZone=\"Pacific/Auckland\">\n      {new Date(Date.parse('05 May 2020 12:00 UTC'))}\n    </DateFormat>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"i18n"},"I18n"),(0,esm.kt)("p",null,"For languages other than English, import the locale (e.g. ",(0,esm.kt)("inlineCode",{parentName:"p"},"koKR"),") and spread it onto ",(0,esm.kt)("inlineCode",{parentName:"p"},"ComponentsProvider"),".\nThis will provide translated strings for components that use them, as well as the locale-specific date strings and formatting."),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-js",metastring:"static",static:!0},"import { ComponentsProvider, koKR } from '@looker/components'\nimport { DateFormat } from '@looker/components'\n\nexport const App = () => {\n  return (\n    <ComponentsProvider {...koKR}>\n      <DateFormat />\n    </ComponentsProvider>\n  )\n}\n")),(0,esm.kt)("p",null,"The locale from the ",(0,esm.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/date-fns",target:"_blank",rel:"nofollow noopener noreferrer"},"date-fns package")," can also be passed directly to the ",(0,esm.kt)("inlineCode",{parentName:"p"},"DateFormat")," component."),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-js",metastring:"static",static:!0},"import { DateFormat } from '@looker/components'\nimport ko from 'date-fns/locale/ko'\n\nexport const LocalizedDateFormat = () => {\n  return <DateFormat locale={ko} />\n}\n")),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.ArgsTable,{of:src.DateFormat,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/DateFormat",component:src.DateFormat,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);