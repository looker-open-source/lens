"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[2732],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Card/stories/CardMedia/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),CardMedia=__webpack_require__("../components/src/Card/CardMedia.tsx"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:CardMedia.Z,title:"Docs/CardMedia",mdxType:"Meta"}),(0,esm.kt)("h2",{id:"cardmedia"},"CardMedia"),(0,esm.kt)("p",null,"A common pattern for ",(0,esm.kt)("inlineCode",{parentName:"p"},"Cards")," is to display an image that reinforces what the content is about."),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"CardMedia")," component accepts and ",(0,esm.kt)("inlineCode",{parentName:"p"},"image")," property that will render the image as a background image and the optional ",(0,esm.kt)("inlineCode",{parentName:"p"},"title")," property used to give the image an accessible title if needed."),(0,esm.kt)(Editor.Editor,{code:'/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the "Software"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\nimport React from \'react\'\nimport { Card } from \'../../Card\'\nimport { CardContent } from \'../../CardContent\'\nimport { Paragraph, Heading } from \'../../../Text\'\n\nexport default () => {\n  return (\n    <Card raised>\n      <CardContent>\n        <Heading fontSize="xxxlarge">🎉 Looker Release Notes 🎉</Heading>\n        <Heading as="h4" fontSize="small">\n          Read all about our latest features\n        </Heading>\n        <Paragraph fontSize="xsmall" color="text1">\n          Last updated 3 days ago\n        </Paragraph>\n      </CardContent>\n    </Card>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("h2",{id:"a-group-of-media-cards"},"A group of media Cards"),(0,esm.kt)("p",null,"A few common patterns for ",(0,esm.kt)("inlineCode",{parentName:"p"},"Cards")," are displaying them in groups and using images to reinforce the content of the card."),(0,esm.kt)(Editor.Editor,{code:'/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the "Software"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\nimport React from \'react\'\nimport { Card } from \'../../Card\'\nimport { CardContent } from \'../../CardContent\'\nimport { CardMedia } from \'../../CardMedia\'\nimport { Grid } from \'../../../Layout\'\nimport { Paragraph, Heading, Span } from \'../../../Text\'\n\nexport default () => {\n  return (\n    <Grid columns={3}>\n      <Card raised>\n        <CardMedia\n          image="https://placeimg.com/640/480/nature"\n          title="Summer Nature"\n        />\n        <CardContent>\n          <Span\n            fontSize="xsmall"\n            textTransform="uppercase"\n            fontWeight="semiBold"\n            color="text1"\n          >\n            Summer\n          </Span>\n          <Heading as="h4" fontSize="medium" fontWeight="semiBold" truncate>\n            Life in The Great Outdoors\n          </Heading>\n          <Paragraph fontSize="small">\n            10 reasons to get off the couch and head outside this summer.\n          </Paragraph>\n        </CardContent>\n      </Card>\n      <Card raised>\n        <CardMedia\n          image="https://placeimg.com/630/480/nature"\n          title="A Scenic Valley"\n        />\n        <CardContent>\n          <Span\n            fontSize="xsmall"\n            textTransform="uppercase"\n            fontWeight="semiBold"\n            color="text1"\n          >\n            Explore\n          </Span>\n          <Heading as="h4" fontSize="medium" fontWeight="semiBold" truncate>\n            Best Scenic Hikes\n          </Heading>\n          <Paragraph fontSize="small">\n            Looking for a new place to trailblaze? Make sure it has a great\n            view!\n          </Paragraph>\n        </CardContent>\n      </Card>\n      <Card raised>\n        <CardMedia\n          image="https://placeimg.com/620/480/nature"\n          title="Relaxing Views"\n        />\n        <CardContent>\n          <Span\n            fontSize="xsmall"\n            textTransform="uppercase"\n            fontWeight="semiBold"\n            color="text1"\n          >\n            Relax\n          </Span>\n          <Heading as="h4" fontSize="large" fontWeight="semiBold" truncate>\n            Mindfull Wilderness\n          </Heading>\n          <Paragraph fontSize="small">\n            Find a place to find your self.\n          </Paragraph>\n        </CardContent>\n      </Card>\n    </Grid>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.ArgsTable,{of:CardMedia.Z,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/CardMedia",component:CardMedia.Z,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);