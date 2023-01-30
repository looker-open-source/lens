"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[7431],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Accordion2/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),Accordion2=__webpack_require__("../components/src/Accordion2/Accordion2.tsx"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:Accordion2.V,title:"Docs/Accordion2",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"accordion2"},"Accordion2"),(0,esm.kt)("p",null,(0,esm.kt)("inlineCode",{parentName:"p"},"<Accordion2>")," hides and shows ",(0,esm.kt)("inlineCode",{parentName:"p"},"children")," on click like a collapsible section."),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"label")," of ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Accordion2>")," is always visible and acts as the trigger to toggle the accordion. ",(0,esm.kt)("inlineCode",{parentName:"p"},"label")," can be either be a ",(0,esm.kt)("inlineCode",{parentName:"p"},"string")," or a ",(0,esm.kt)("inlineCode",{parentName:"p"},"ReactNode"),"."),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"children")," determines what content is hidden or shown by the accordion."),(0,esm.kt)("p",null,"Use the ",(0,esm.kt)("inlineCode",{parentName:"p"},"id")," prop to set the ID of the ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Accordion2>"),". In addition, IDs will be auto-generated for the underlying disclosure element and content container element based on ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Accordion2>"),"'s ID."),(0,esm.kt)("p",null,"Use the ",(0,esm.kt)("inlineCode",{parentName:"p"},"onClose")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"onOpen")," props if you would like to trigger callbacks on ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Accordion2>")," open or close."),(0,esm.kt)("p",null,"If you want your ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Accordion2>")," open by default, use the ",(0,esm.kt)("inlineCode",{parentName:"p"},"defaultOpen")," prop."),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Accordion2 } from '../..'\n\nexport default function DefaultOpen() {\n  return (\n    <Accordion2\n      defaultOpen={true}\n      onClose={() => alert('Closing doors')}\n      onOpen={() => alert('Opening doors')}\n      label=\"Show me some other cheese!\"\n    >\n      Swiss\n    </Accordion2>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("p",null,(0,esm.kt)("strong",{parentName:"p"},"Note:")," ",(0,esm.kt)("inlineCode",{parentName:"p"},"defaultOpen")," should only be used when using an uncontrolled ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Accordion2>"),". For more details on controlled ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Accordion2>"),'s, see the "Controlling an Accordion" section.'),(0,esm.kt)("h2",{id:"basic-accordion2-behavior"},"Basic Accordion2 behavior"),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Accordion2 } from '../..'\nconst lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`\nexport default function Basic() {\n  return <Accordion2 label=\"See more\">{lorem}</Accordion2>\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"controlling-an-accordion"},"Controlling an Accordion"),(0,esm.kt)("p",null,"By default, the ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Accordion2>")," is an uncontrolled component and maintains its own opened/closed state."),(0,esm.kt)("p",null,"However, you can use the ",(0,esm.kt)("inlineCode",{parentName:"p"},"isOpen")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"toggleOpen")," props to explicitly control the state of your ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Accordion2>"),"."),(0,esm.kt)("p",null,"When the ",(0,esm.kt)("inlineCode",{parentName:"p"},"isOpen")," prop receives ",(0,esm.kt)("inlineCode",{parentName:"p"},"true"),", your ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Accordion2>")," will reveal its content. When ",(0,esm.kt)("inlineCode",{parentName:"p"},"false"),", your content will be hidden."),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"toggleOpen")," prop should receive a function that has one parameter: a boolean. When the disclosure is clicked, the ",(0,esm.kt)("inlineCode",{parentName:"p"},"toggleOpen")," callback will be triggered and passed the opposite boolean of the current ",(0,esm.kt)("inlineCode",{parentName:"p"},"isOpen")," prop value."),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Accordion2 } from '../..'\nimport { useToggle } from '../../utils/useToggle'\nconst lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`\n\nexport default function Controlled() {\n  const { value, change } = useToggle(true)\n\n  return (\n    <Accordion2 isOpen={value} toggleOpen={change} label=\"See more\">\n      {lorem}\n    </Accordion2>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"styling-an-accordions-indicator"},"Styling an Accordion's indicator"),(0,esm.kt)("p",null,"You can customize an ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Accordion2>")," indicator icon's position and icon type via props."),(0,esm.kt)("p",null,"Use the ",(0,esm.kt)("inlineCode",{parentName:"p"},"indicatorPosition")," prop to set the indicator's position on either the left or right side of the disclosure."),(0,esm.kt)("p",null,"NOTE: ",(0,esm.kt)("inlineCode",{parentName:"p"},'indicatorPosition="left"')," will also change the default ",(0,esm.kt)("inlineCode",{parentName:"p"},"indicatorIcons")," as shown below."),(0,esm.kt)("p",null,"Use the ",(0,esm.kt)("inlineCode",{parentName:"p"},"indicatorIcons")," prop to customize which icons represent an open or closed ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Accordion2>"),"."),(0,esm.kt)("p",null,"By default, the ",(0,esm.kt)("inlineCode",{parentName:"p"},"CaretDown")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"CaretUp")," ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Icon>"),"s are used."),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport * as MaterialIcons from '@styled-icons/material'\nimport { Accordion2 } from '../..'\n\nexport default function IndicatorIcons() {\n  return (\n    <Accordion2\n      label=\"Hello\"\n      indicatorIcons={{\n        close: <MaterialIcons.ChevronLeft />,\n        open: <MaterialIcons.ExpandMore />,\n      }}\n    >\n      World\n    </Accordion2>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"density"},"Density"),(0,esm.kt)("p",null,"You can customize the density of the content within an ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Accordion2>"),"."),(0,esm.kt)("p",null,"Use the ",(0,esm.kt)("inlineCode",{parentName:"p"},"density")," prop to set the density."),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Accordion2, SpaceVertical, Grid } from '../..'\n\nexport default function Density() {\n  return (\n    <SpaceVertical>\n      <Grid columns={5}>\n        <Accordion2 defaultOpen density={1} label={`Density Example: 1`}>\n          Content within accordion.\n        </Accordion2>\n        <Accordion2 defaultOpen density={0} label={`Density Example: 0`}>\n          Content within accordion.\n        </Accordion2>\n        <Accordion2 defaultOpen density={-1} label={`Density Example: -1`}>\n          Content within accordion.\n        </Accordion2>\n        <Accordion2 defaultOpen density={-2} label={`Density Example: -2`}>\n          Content within accordion.\n        </Accordion2>\n        <Accordion2 defaultOpen density={-3} label={`Density Example: -3`}>\n          Content within accordion.\n        </Accordion2>\n      </Grid>\n    </SpaceVertical>\n  )\n}\n",mdxType:"Editor"}),"## Props",(0,esm.kt)(dist_esm.ArgsTable,{of:Accordion2.V,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/Accordion2",component:Accordion2.V,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);