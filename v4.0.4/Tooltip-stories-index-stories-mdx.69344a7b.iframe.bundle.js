"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[9182],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Tooltip/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),src=__webpack_require__("../components/src/index.ts"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");const ExampleRenderProp="/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\nimport React from 'react'\nimport { Tooltip } from '../Tooltip'\nimport { Button } from '../../Button'\n\nexport default function ExampleRenderProp() {\n  return (\n    <Tooltip content=\"Example using render props exploded\">\n      {props => (\n        <Button\n          aria-describedby={props['aria-describedby']}\n          className={props.className}\n          onBlur={props.onBlur}\n          onFocus={props.onFocus}\n          onMouseOut={props.onMouseOut}\n          onMouseOver={props.onMouseOver}\n          ref={props.ref}\n        >\n          Render Props Example\n        </Button>\n      )}\n    </Tooltip>\n  )\n}\n";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:src.Tooltip,title:"Docs/Tooltip",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"tooltip"},"Tooltip"),(0,esm.kt)("p",null,"A simple Tooltip component with out of the box styles and behavior."),(0,esm.kt)(Editor.Editor,{code:'/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the "Software"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\nimport React from \'react\'\nimport { Tooltip } from \'../Tooltip\'\nimport { Button } from \'../../Button\'\n\nexport default function Default() {\n  return (\n    <Tooltip content="Simple Content">\n      <Button m="xxxlarge">Open Tooltip</Button>\n    </Tooltip>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\nimport React from 'react'\nimport { Tooltip } from '../Tooltip'\nimport { ButtonOutline } from '../../Button'\nimport { Link } from '../../Link'\n\nexport default function Example() {\n  return (\n    <Tooltip\n      content={\n        <>\n          This is a tooltip with quite a bit of text. It's probably not ideal to\n          have this much text in a Tooltip. Perhaps you should link to\n          <Link href=\"#\">another document &rarr;</Link>\n        </>\n      }\n    >\n      <ButtonOutline>Tooltip with lots of text</ButtonOutline>\n    </Tooltip>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"tooltip-placement"},"Tooltip Placement"),(0,esm.kt)("p",null,"Tooltip allows you to specify where it should appear in relation to the target element. It accepts the following values:"),(0,esm.kt)("ol",null,(0,esm.kt)("li",{parentName:"ol"},(0,esm.kt)("inlineCode",{parentName:"li"},"auto")),(0,esm.kt)("li",{parentName:"ol"},(0,esm.kt)("inlineCode",{parentName:"li"},"auto-end")),(0,esm.kt)("li",{parentName:"ol"},(0,esm.kt)("inlineCode",{parentName:"li"},"top-start")),(0,esm.kt)("li",{parentName:"ol"},(0,esm.kt)("inlineCode",{parentName:"li"},"top")),(0,esm.kt)("li",{parentName:"ol"},(0,esm.kt)("inlineCode",{parentName:"li"},"top-end")),(0,esm.kt)("li",{parentName:"ol"},(0,esm.kt)("inlineCode",{parentName:"li"},"right-start")),(0,esm.kt)("li",{parentName:"ol"},(0,esm.kt)("inlineCode",{parentName:"li"},"right")),(0,esm.kt)("li",{parentName:"ol"},(0,esm.kt)("inlineCode",{parentName:"li"},"right-end")),(0,esm.kt)("li",{parentName:"ol"},(0,esm.kt)("inlineCode",{parentName:"li"},"bottom-end")),(0,esm.kt)("li",{parentName:"ol"},(0,esm.kt)("inlineCode",{parentName:"li"},"bottom")),(0,esm.kt)("li",{parentName:"ol"},(0,esm.kt)("inlineCode",{parentName:"li"},"bottom-start")),(0,esm.kt)("li",{parentName:"ol"},(0,esm.kt)("inlineCode",{parentName:"li"},"left-end")),(0,esm.kt)("li",{parentName:"ol"},(0,esm.kt)("inlineCode",{parentName:"li"},"left")),(0,esm.kt)("li",{parentName:"ol"},(0,esm.kt)("inlineCode",{parentName:"li"},"left-start"))),(0,esm.kt)(Editor.Editor,{code:'/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the "Software"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\nimport React from \'react\'\nimport { Tooltip } from \'../Tooltip\'\nimport { Button } from \'../../Button\'\nimport { Space } from \'../../Layout\'\n\nexport default function ExamplePlacement() {\n  return (\n    <Space around>\n      <Tooltip content="I\'m on top" placement="top">\n        <Button>Top</Button>\n      </Tooltip>\n      <Tooltip content="I\'m on bottom" placement="bottom">\n        <Button>Bottom</Button>\n      </Tooltip>\n      <Tooltip content="I\'m on the left" placement="left">\n        <Button>Left</Button>\n      </Tooltip>\n      <Tooltip content="I\'m on the right" placement="right">\n        <Button>Right</Button>\n      </Tooltip>\n    </Space>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("h2",{id:"delay"},"Delay"),(0,esm.kt)("p",null,"By default, the tooltip will show a brief delay. To customize this, use the ",(0,esm.kt)("inlineCode",{parentName:"p"},"delay")," prop."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\nimport React from 'react'\nimport { Tooltip } from '../Tooltip'\nimport { Button } from '../../Button'\n\nexport default function DelayNone() {\n  return (\n    <Tooltip content={'Simple Content'} delay={'none'}>\n      <Button m=\"xxxlarge\">Open Tooltip</Button>\n    </Tooltip>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"render-prop-style"},'"Render Prop" style'),(0,esm.kt)("p",null,"Sometimes you may need to control how ",(0,esm.kt)("inlineCode",{parentName:"p"},"Tooltip")," applies handlers to the component within it. If so you can use the render prop form of the component:"),(0,esm.kt)(Editor.Editor,{code:ExampleRenderProp,mdxType:"Editor"}),(0,esm.kt)("p",null,"If you need to be very specific"),(0,esm.kt)(Editor.Editor,{code:ExampleRenderProp,mdxType:"Editor"}),(0,esm.kt)("h2",{id:"tooltip-passes-a-hover-class"},'Tooltip passes a "hover" class'),(0,esm.kt)("p",null,'In both the regular and "Render Prop" styles, ',(0,esm.kt)("inlineCode",{parentName:"p"},"Tooltip")," will pass a class named ",(0,esm.kt)("inlineCode",{parentName:"p"},"hover")," to its child element (or function) when the ",(0,esm.kt)("inlineCode",{parentName:"p"},"Tooltip")," is open."),(0,esm.kt)("p",null,"This will preserve any hover styling when the cursor is on the tooltip text and off of the trigger element itself."),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.ArgsTable,{of:src.Tooltip,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/Tooltip",component:src.Tooltip,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);