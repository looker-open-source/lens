"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[3307],{"../components/docs/foundations/borders.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>borders_stories});var react=__webpack_require__("../../node_modules/react/index.js"),esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),styled_components_browser_esm=(__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.async-iterator.map.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.map.js"),__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js")),Box2=__webpack_require__("../components/src/Layout/Box2/index.ts"),Heading=__webpack_require__("../components/src/Text/Heading/Heading.tsx"),Code=__webpack_require__("../components/src/Text/Code/Code.tsx");const borderData=[{color:"ui3",examples:["background","ui1","ui2"],label:"Default Border",textColor:"text3"},{color:"ui4",examples:["background","ui1","ui2","ui3"],label:"Dark Border",textColor:"text3"},{color:"ui2",examples:["background","ui1","ui3"],label:"Light Border",textColor:"text3"},{color:"text2",examples:["inverse"],label:"Border on Dark",textColor:"inverseOn"}],BorderRender=()=>borderData.map((border=>react.createElement(Example,{border,key:border.color}))),Example=({border:{color,examples,label,textColor}})=>react.createElement(Box2.T,{mb:"xlarge"},react.createElement(Heading.X,{as:"h3",fontWeight:"semiBold",mb:"small"},label," ",react.createElement(Code.E,{fontSize:"medium"},color)),examples.map((example=>react.createElement(BorderExample,{bg:example,key:example,color:textColor,border:"ui3"},react.createElement(Code.E,null,example),react.createElement(BorderDividerExample,{bg:color}))))),BorderExample=(0,styled_components_browser_esm.ZP)(Box2.T).withConfig({displayName:"BorderRender__BorderExample",componentId:"sc-1ky4gbi-0"})(["align-items:center;display:flex;justify-content:space-between;padding:",";&:not(:last-child){border-bottom:none;}"],(({theme})=>theme.space.u5)),BorderDividerExample=(0,styled_components_browser_esm.ZP)(Box2.T).withConfig({displayName:"BorderRender__BorderDividerExample",componentId:"sc-1ky4gbi-1"})(["height:1px;width:70%;"]);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Meta=(name="Meta",function MDXDefaultShortcode(props){return console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope"),(0,esm.kt)("div",props)});var name;const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(Meta,{title:"Foundations/Borders & Dividers",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"borders"},"Borders"),(0,esm.kt)("p",null,"Borders help define the space and structure of the interface."),(0,esm.kt)(BorderRender,{mdxType:"BorderRender"}),(0,esm.kt)("h3",{id:"using-border-colors"},"Using Border Colors"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-jsx"},'<Box2 border="ui3" p="u5" mb="u3">\n  I have the default border\n</Box2>\n<Box2 border="ui4" p="u5">\n  I have the dark border\n</Box2>\n')))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Foundations/Borders & Dividers",includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const borders_stories=componentMeta,__namedExportsOrder=["__page"]}}]);