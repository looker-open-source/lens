"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[9195],{"../components/src/MessageBar/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Controlled:()=>Controlled,CustomAction:()=>CustomAction,Intent:()=>Intent,NoAction:()=>NoAction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts"),MessageBar=__webpack_require__("../components/src/MessageBar/MessageBar.tsx"),react=__webpack_require__("../../node_modules/react/index.js");function Basic(props){const{children="Hey! This is a message to you.",...rest}=props;return react.createElement(MessageBar.c,rest,children)}try{Basic.displayName="Basic",Basic.__docgenInfo={description:"",displayName:"Basic",props:{intent:{defaultValue:{value:": 'inform'"},description:"Determines the icon choice and background color",name:"intent",required:!1,type:{name:"enum",value:[{value:'"critical"'},{value:'"warn"'},{value:'"positive"'},{value:'"inform"'}]}},visible:{defaultValue:{value:": true"},description:"Determines whether the MessageBar is rendered or not.",name:"visible",required:!1,type:{name:"boolean"}},primaryAction:{defaultValue:{value:"true (which renders IconButton)"},description:"Polymorphic prop defines the primary action button to render.",name:"primaryAction",required:!1,type:{name:"SupportedActionTypes"}},secondaryAction:{defaultValue:null,description:"Polymorphic prop defines the secondary action button to render.",name:"secondaryAction",required:!1,type:{name:"SupportedActionTypes"}},onPrimaryClick:{defaultValue:{value:"noop"},description:"Callback fires when primaryAction is clicked",name:"onPrimaryClick",required:!1,type:{name:"(() => void)"}},onSecondaryClick:{defaultValue:{value:"noop"},description:"Callback fires when secondaryAction is clicked",name:"onSecondaryClick",required:!1,type:{name:"(() => void)"}},noActions:{defaultValue:{value:"false"},description:"Hide action buttons altogether",name:"noActions",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"ResponsiveValue<FontFamilies, Required<Theme<TLengthStyledSystem>>>"}},fontSize:{defaultValue:null,description:"Use a @looker/components FontSizes to set font size",name:"fontSize",required:!1,type:{name:"ResponsiveValue<FontSizes, Required<Theme<TLengthStyledSystem>>>"}},fontWeight:{defaultValue:null,description:"Use a @looker/components FontWeights to set weight\n  normal, medium, semiBold, bold",name:"fontWeight",required:!1,type:{name:"ResponsiveValue<FontWeights, Required<Theme<TLengthStyledSystem>>>"}},lineHeight:{defaultValue:null,description:"Use a @looker/components LineHeights (xxsmall - xxxxlarge) to set line height",name:"lineHeight",required:!1,type:{name:"ResponsiveValue<FontSizes, Required<Theme<TLengthStyledSystem>>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/MessageBar/stories/Basic.tsx#Basic"]={docgenInfo:Basic.__docgenInfo,name:"Basic",path:"../components/src/MessageBar/stories/Basic.tsx#Basic"})}catch(__react_docgen_typescript_loader_error){}function NoAction(){return react.createElement(MessageBar.c,{noActions:!0},"I can't be closed")}function CustomAction(){return react.createElement(MessageBar.c,{primaryAction:"Primary Action",onPrimaryClick:()=>alert("Primary Action"),secondaryAction:"Secondary Action",onSecondaryClick:()=>alert("Secondary Action")},"Render some custom action labels and actions!")}var ButtonOutline=__webpack_require__("../components/src/Button/ButtonOutline.tsx"),useToggle=__webpack_require__("../components/src/utils/useToggle.ts");function Controlled(){const{value,setOff,setOn}=(0,useToggle.O)(!0);return react.createElement(react.Fragment,null,react.createElement(MessageBar.c,{intent:"warn",onPrimaryClick:setOff,visible:value},"I can be closed and reopened"),!value&&react.createElement(ButtonOutline.I,{m:"u4",onClick:setOn},"Show MessageBar"))}var Space=__webpack_require__("../components/src/Layout/Space/Space/Space.tsx");function Intent(){return react.createElement(Space.T,{around:!0},react.createElement(MessageBar.c,{intent:"critical"},"Key"),react.createElement(MessageBar.c,{intent:"inform"},"Positive"),react.createElement(MessageBar.c,{intent:"positive"},"Inform"),react.createElement(MessageBar.c,{intent:"warn"},"Neutral"))}const index_stories={argTypes:defaultArgTypes.W,component:MessageBar.c,parameters:{storyshots:{disable:!0}},title:"Stories/MessageBar"},__namedExportsOrder=["Basic","NoAction","CustomAction","Controlled","Intent"];try{indexstories.displayName="indexstories",indexstories.__docgenInfo={description:"",displayName:"indexstories",props:{intent:{defaultValue:{value:": 'inform'"},description:"Determines the icon choice and background color",name:"intent",required:!1,type:{name:"enum",value:[{value:'"critical"'},{value:'"warn"'},{value:'"positive"'},{value:'"inform"'}]}},visible:{defaultValue:{value:": true"},description:"Determines whether the MessageBar is rendered or not.",name:"visible",required:!1,type:{name:"boolean"}},primaryAction:{defaultValue:{value:"true (which renders IconButton)"},description:"Polymorphic prop defines the primary action button to render.",name:"primaryAction",required:!1,type:{name:"SupportedActionTypes"}},secondaryAction:{defaultValue:null,description:"Polymorphic prop defines the secondary action button to render.",name:"secondaryAction",required:!1,type:{name:"SupportedActionTypes"}},onPrimaryClick:{defaultValue:{value:"noop"},description:"Callback fires when primaryAction is clicked",name:"onPrimaryClick",required:!1,type:{name:"(() => void)"}},onSecondaryClick:{defaultValue:{value:"noop"},description:"Callback fires when secondaryAction is clicked",name:"onSecondaryClick",required:!1,type:{name:"(() => void)"}},noActions:{defaultValue:{value:"false"},description:"Hide action buttons altogether",name:"noActions",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"ResponsiveValue<FontFamilies, Required<Theme<TLengthStyledSystem>>>"}},fontSize:{defaultValue:null,description:"Use a @looker/components FontSizes to set font size",name:"fontSize",required:!1,type:{name:"ResponsiveValue<FontSizes, Required<Theme<TLengthStyledSystem>>>"}},fontWeight:{defaultValue:null,description:"Use a @looker/components FontWeights to set weight\n  normal, medium, semiBold, bold",name:"fontWeight",required:!1,type:{name:"ResponsiveValue<FontWeights, Required<Theme<TLengthStyledSystem>>>"}},lineHeight:{defaultValue:null,description:"Use a @looker/components LineHeights (xxsmall - xxxxlarge) to set line height",name:"lineHeight",required:!1,type:{name:"ResponsiveValue<FontSizes, Required<Theme<TLengthStyledSystem>>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/MessageBar/stories/index.stories.tsx#indexstories"]={docgenInfo:indexstories.__docgenInfo,name:"indexstories",path:"../components/src/MessageBar/stories/index.stories.tsx#indexstories"})}catch(__react_docgen_typescript_loader_error){}},"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)}}]);