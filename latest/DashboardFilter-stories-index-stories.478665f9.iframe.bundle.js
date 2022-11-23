"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[7825],{"../filter-components/src/DashboardFilter/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,ExpressionOnChange:()=>ExpressionOnChange,Required:()=>Required,Suggestions:()=>Suggestions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var DashboardFilter=__webpack_require__("../filter-components/src/DashboardFilter/DashboardFilter.tsx"),i18n_resources=__webpack_require__("../filter-components/src/locales/i18n_resources.ts"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=(__webpack_require__("../../node_modules/core-js/modules/esnext.async-iterator.filter.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.filter.js"),__webpack_require__("../../node_modules/react/index.js"));function Basic({filter={field:{is_numeric:!0},id:"1",name:"Cost",type:"field_filter",allow_multiple_values:!0},...props}){return react.createElement(DashboardFilter.a,(0,esm_extends.Z)({filter},props))}try{Basic.displayName="Basic",Basic.__docgenInfo={description:"",displayName:"Basic",props:{expression:{defaultValue:null,description:"The current value of the filter.\nSee {@link https://docs.looker.com/reference/filter-expressions Looker Filter Expressions}.",name:"expression",required:!1,type:{name:"string"}},filter:{defaultValue:{value:"{\n    field: { is_numeric: true },\n    id: '1',\n    name: 'Cost',\n    type: 'field_filter',\n    allow_multiple_values: true,\n  }"},description:"A dashboard filter as defined in @looker/sdk",name:"filter",required:!1,type:{name:"IDashboardFilter"}},onChange:{defaultValue:null,description:"Called when the filter expression is changed",name:"onChange",required:!0,type:{name:"(expression: string) => void"}},sdk:{defaultValue:null,description:"An initialized Looker SDK instance",name:"sdk",required:!1,type:{name:"IAPIMethods"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../filter-components/src/DashboardFilter/stories/Basic.tsx#Basic"]={docgenInfo:Basic.__docgenInfo,name:"Basic",path:"../filter-components/src/DashboardFilter/stories/Basic.tsx#Basic"})}catch(__react_docgen_typescript_loader_error){}var SpaceVertical=__webpack_require__("../components/src/Layout/Space/SpaceVertical/SpaceVertical.tsx"),Paragraph=__webpack_require__("../components/src/Text/Paragraph/Paragraph.tsx");function ExpressionOnChange(){const[expression,setExpression]=(0,react.useState)("[0,100]");return react.createElement(SpaceVertical.s,null,react.createElement(DashboardFilter.a,{filter:{field:{is_numeric:!0},id:"1",name:"Age",type:"field_filter"},expression,onChange:setExpression}),react.createElement(Paragraph.n,null,react.createElement("strong",null,"Current filter expression:")," ",expression))}function Suggestions(){const[expression,setExpression]=(0,react.useState)("");return react.createElement(DashboardFilter.a,{filter:{field:{suggestable:!0},name:"Status",type:"field_filter",ui_config:{type:"button_group"},allow_multiple_values:!0},sdk:{ok:value=>value,get:()=>Promise.resolve({suggestions:["complete","pending","cancelled"]})},expression,onChange:setExpression})}function Required(){const[expression,setExpression]=(0,react.useState)("");return react.createElement(DashboardFilter.a,{filter:{field:{is_numeric:!0},id:"1",name:"Age",required:!0,type:"field_filter"},expression,onChange:setExpression})}const index_stories={component:DashboardFilter.a,parameters:{i18nResources:i18n_resources.f,storyshots:{disable:!0}},title:"Filters/Stories/DashboardFilter"},__namedExportsOrder=["Basic","ExpressionOnChange","Suggestions","Required"];try{indexstories.displayName="indexstories",indexstories.__docgenInfo={description:"",displayName:"indexstories",props:{expression:{defaultValue:null,description:"The current value of the filter.\nSee {@link https://docs.looker.com/reference/filter-expressions Looker Filter Expressions}.",name:"expression",required:!1,type:{name:"string"}},filter:{defaultValue:{value:"{\n    field: { is_numeric: true },\n    id: '1',\n    name: 'Cost',\n    type: 'field_filter',\n    allow_multiple_values: true,\n  }"},description:"A dashboard filter as defined in @looker/sdk",name:"filter",required:!1,type:{name:"IDashboardFilter"}},onChange:{defaultValue:null,description:"Called when the filter expression is changed",name:"onChange",required:!0,type:{name:"(expression: string) => void"}},sdk:{defaultValue:null,description:"An initialized Looker SDK instance",name:"sdk",required:!1,type:{name:"IAPIMethods"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../filter-components/src/DashboardFilter/stories/index.stories.tsx#indexstories"]={docgenInfo:indexstories.__docgenInfo,name:"indexstories",path:"../filter-components/src/DashboardFilter/stories/index.stories.tsx#indexstories"})}catch(__react_docgen_typescript_loader_error){}}}]);