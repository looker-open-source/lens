"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[6932],{"../components/docs/foundations/demos/DocTable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>DocTable});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../components/src/Table/Table.tsx"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../components/src/Text/Code/Code.tsx");const DocTable=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(_src__WEBPACK_IMPORTED_MODULE_1__.i).withConfig({displayName:"DocTable",componentId:"sc-139mrvg-0"})(["font-size:",";margin-bottom:",";","{color:",";}"],(({theme})=>theme.fontSizes.small),(({theme})=>theme.space.u8),_src__WEBPACK_IMPORTED_MODULE_2__.E,(({theme})=>theme.colors.key));try{DocTable.displayName="DocTable",DocTable.__docgenInfo={description:"",displayName:"DocTable",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLTableElement | null) => void) | RefObject<HTMLTableElement> | null"}},border:{defaultValue:null,description:"Border can be specified as a boolean or a key of the theme colors object.\n1px border is applied to all four sides.\n\n`true` - will use theme's `ui2` color\n`false` - will not apply any border\n`keyof Colors` - will use the color of the key",name:"border",required:!1,type:{name:"BorderProp"}},borderBottom:{defaultValue:null,description:"A 1px border is applied to the bottom.\nSee `border` property for specifics values that can be specified..",name:"borderBottom",required:!1,type:{name:"BorderProp"}},borderLeft:{defaultValue:null,description:"A 1px border is applied to the left.\nSee `border` property for specifics values that can be specified..",name:"borderLeft",required:!1,type:{name:"BorderProp"}},borderRight:{defaultValue:null,description:"A 1px border is applied to the right.\nSee `border` property for specifics values that can be specified..",name:"borderRight",required:!1,type:{name:"BorderProp"}},borderTop:{defaultValue:null,description:"A 1px border is applied to the top.\nSee `border` property for specifics values that can be specified..",name:"borderTop",required:!1,type:{name:"BorderProp"}},borderX:{defaultValue:null,description:"A 1px border is applied to the left & right.\nSee `border` property for specifics values that can be specified..",name:"borderX",required:!1,type:{name:"BorderProp"}},borderY:{defaultValue:null,description:"A 1px border is applied to the top & bottom.\nSee `border` property for specifics values that can be specified..",name:"borderY",required:!1,type:{name:"BorderProp"}},borderColor:{defaultValue:null,description:"@deprecated - not used by borderHelper which is exported as `border` and can be deleted. Once all usage has been deleted then this prop can be removed from here.",name:"borderColor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/docs/foundations/demos/DocTable.tsx#DocTable"]={docgenInfo:DocTable.__docgenInfo,name:"DocTable",path:"../components/docs/foundations/demos/DocTable.tsx#DocTable"})}catch(__react_docgen_typescript_loader_error){}},"../components/docs/foundations/breakpoints.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>breakpoints_stories});var react=__webpack_require__("../../node_modules/react/index.js"),esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),TableHeaderCell=(__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.async-iterator.map.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.map.js"),__webpack_require__("../components/src/Table/TableHeaderCell/index.tsx")),Text=__webpack_require__("../components/src/Text/Text/Text.tsx"),TableRow=__webpack_require__("../components/src/Table/TableRow/index.tsx"),TableDataCell=__webpack_require__("../components/src/Table/TableDataCell/index.tsx"),Code=__webpack_require__("../components/src/Text/Code/Code.tsx"),TableHead=__webpack_require__("../components/src/Table/TableHead/index.tsx"),TableBody=__webpack_require__("../components/src/Table/TableBody/index.tsx"),DocTable=__webpack_require__("../components/docs/foundations/demos/DocTable.tsx");const breakpointLabels=["Breakpoint","Starts At","Definition","Description"],breakpointList=[{description:"Smaller screens like phones",rem:"30rem",slot:0,starts:"480px"},{description:"Medium sized screens like tablets",rem:"48rem",slot:1,starts:"768px"},{description:"Large screens like laptops",rem:"64rem",slot:2,starts:"1024px"},{description:"Larger screens like a desktop monitor",rem:"75rem",slot:3,starts:"1200px"},{description:"Wider screens",rem:"90rem",slot:4,starts:"1440px"}],BreakpointTable=({breakpoints=breakpointList,labels=breakpointLabels})=>react.createElement(DocTable.L,null,react.createElement(TableHead.s,null,react.createElement(TableRow.S,null,labels.map(((label,i)=>((label,key)=>react.createElement(TableHeaderCell.x,{key},react.createElement(Text.x,{fontSize:"small",fontWeight:"semiBold"},label)))(label,i))))),react.createElement(TableBody.R,null,breakpoints.map(((bp,i)=>{return slot=bp.slot,starts=bp.starts,rem=bp.rem,description=bp.description,key=i,react.createElement(TableRow.S,{key,style:{verticalAlign:"middle"}},react.createElement(TableDataCell.e,null,slot),react.createElement(TableDataCell.e,null,starts),react.createElement(TableDataCell.e,null,react.createElement(Code.E,null,"min-width: ",rem)),react.createElement(TableDataCell.e,null,description));var slot,starts,rem,description,key}))));try{BreakpointTable.displayName="BreakpointTable",BreakpointTable.__docgenInfo={description:"",displayName:"BreakpointTable",props:{breakpoints:{defaultValue:{value:"[\n  {\n    description: 'Smaller screens like phones',\n    rem: '30rem',\n    slot: 0,\n    starts: '480px',\n  },\n  {\n    description: 'Medium sized screens like tablets',\n    rem: '48rem',\n    slot: 1,\n    starts: '768px',\n  },\n  {\n    description: 'Large screens like laptops',\n    rem: '64rem',\n\n    slot: 2,\n    starts: '1024px',\n  },\n  {\n    description: 'Larger screens like a desktop monitor',\n    rem: '75rem',\n    slot: 3,\n    starts: '1200px',\n  },\n  { description: 'Wider screens', rem: '90rem', slot: 4, starts: '1440px' },\n]"},description:"",name:"breakpoints",required:!1,type:{name:"BreakpointExample[]"}},labels:{defaultValue:{value:"[\n  'Breakpoint',\n  'Starts At',\n  'Definition',\n  'Description',\n]"},description:"",name:"labels",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/docs/foundations/demos/BreakpointTable.tsx#BreakpointTable"]={docgenInfo:BreakpointTable.__docgenInfo,name:"BreakpointTable",path:"../components/docs/foundations/demos/BreakpointTable.tsx#BreakpointTable"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Meta=(name="Meta",function MDXDefaultShortcode(props){return console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope"),(0,esm.kt)("div",props)});var name;const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(Meta,{title:"Foundations/Breakpoints",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"breakpoints"},"Breakpoints"),(0,esm.kt)("p",null,"Breakpoints give hooks for components and layouts to adapt and change in relation to the window size of the users device."),(0,esm.kt)("p",null,"We use a mobile first approach to breakpoints, that means we use the ",(0,esm.kt)("inlineCode",{parentName:"p"},"min-width")," property for our media queries. This technique is used for applying basic layout styles first and then using breakpoints to adjust for wider screens."),(0,esm.kt)("h2",{id:"available-breakpoints"},"Available Breakpoints"),(0,esm.kt)(BreakpointTable,{mdxType:"BreakpointTable"}),(0,esm.kt)("p",null,"There are a few ways to use the breakpoints, for simpler responsive behaviors you can use them as an array of values inline like"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-jsx"},"<Box2 bg={['green', 'blue', 'red', 'purple']} p=\"u10\" color=\"white\">\n  My background changes color as you resize the window\n</Box2>\n")),(0,esm.kt)("p",null,"Another option if you are writing more complex responsive behaviors you can access the breakpoints from the theme and use them a styled block"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-js",metastring:"static",static:!0},"const ResponsiveBox = styled(Box)`\n  background: green;\n\n  // make the background red at breakpoint[0](480px)\n  @media (min-width ${({ theme }) => theme.breakpoints[0]}) {\n    background: red;\n  }\n\n  // make the background red at breakpoint[1](768x)\n  @media (min-width ${({ theme }) => theme.breakpoints[1]}) {\n    background: blue;\n  }\n`\n")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Foundations/Breakpoints",includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const breakpoints_stories=componentMeta,__namedExportsOrder=["__page"]}}]);