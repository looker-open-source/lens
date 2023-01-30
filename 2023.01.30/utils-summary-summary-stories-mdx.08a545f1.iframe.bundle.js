"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[2750],{"../filter-expressions/src/utils/summary/summary.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),_summary__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),__webpack_require__("../filter-expressions/src/utils/summary/summary.ts"));function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const makeShortcode=name=>function MDXDefaultShortcode(props){return console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("div",props)},Meta=makeShortcode("Meta"),ImportMessage=makeShortcode("ImportMessage"),layoutProps={};function MDXContent({components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(Meta,{component:_summary__WEBPACK_IMPORTED_MODULE_3__.S,title:"Filters/Docs/Summary",mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",{id:"summary"},"summary"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(ImportMessage,{packageName:"filter-components",mdxType:"ImportMessage"},"summary"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"The ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("inlineCode",{parentName:"p"},"summary")," function returns a localized, human-readable summary of a\nfilter expression, given the expression's type, the expression itself,\nand the user attributes and field, if applicable."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-jsx"},";() => {\n  const type = 'number'\n  const [expression, setExpression] = useState('[0,20],>30')\n  const handleChange = (value) => {\n    setExpression(value.expression)\n  }\n  return (\n    <Popover\n      content={\n        <PopoverContent>\n          <Filter\n            expressionType={type}\n            expression={expression}\n            onChange={handleChange}\n          />\n        </PopoverContent>\n      }\n    >\n      <Button>{summary({ type, expression })}</Button>\n    </Popover>\n  )\n}\n")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Filters/Docs/Summary",component:_summary__WEBPACK_IMPORTED_MODULE_3__.S,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null)};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]}}]);