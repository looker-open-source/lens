"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[3582],{"../components/src/Form/Inputs/InputColor/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,ControlledColor:()=>ControlledColor,DefaultValue:()=>DefaultValue,Disabled:()=>Disabled,DisabledNoValue:()=>DisabledNoValue,ReadOnly:()=>ReadOnly,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts"),InputColor=__webpack_require__("../components/src/Form/Inputs/InputColor/InputColor.tsx"),react=__webpack_require__("../../node_modules/react/index.js"),Select=__webpack_require__("../components/src/Form/Inputs/Select/Select.tsx"),Space=__webpack_require__("../components/src/Layout/Space/Space/Space.tsx"),Text=__webpack_require__("../components/src/Text/Text/Text.tsx");function ControlledColor(){const[color,setColor]=(0,react.useState)("red");return react.createElement(Space.T,null,react.createElement(Select.P,{options:[{value:"green"},{value:"purple"},{value:"red"}],value:color,onChange:function handleChange(value){setColor(value)},autoResize:!0}),react.createElement(InputColor.S,{value:color,onChange:function handleColorChange(e){setColor(e.currentTarget.value)}}),react.createElement(Text.x,null,color))}function Basic(props){return react.createElement(InputColor.S,props)}try{Basic.displayName="Basic",Basic.__docgenInfo={description:"",displayName:"Basic",props:{fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"ResponsiveValue<FontFamilies, Required<Theme<TLengthStyledSystem>>>"}},fontSize:{defaultValue:null,description:"Use a @looker/components FontSizes to set font size",name:"fontSize",required:!1,type:{name:"ResponsiveValue<FontSizes, Required<Theme<TLengthStyledSystem>>>"}},fontWeight:{defaultValue:null,description:"Use a @looker/components FontWeights to set weight\n  normal, medium, semiBold, bold",name:"fontWeight",required:!1,type:{name:"ResponsiveValue<FontWeights, Required<Theme<TLengthStyledSystem>>>"}},lineHeight:{defaultValue:null,description:"Use a @looker/components LineHeights (xxsmall - xxxxlarge) to set line height",name:"lineHeight",required:!1,type:{name:"ResponsiveValue<FontSizes, Required<Theme<TLengthStyledSystem>>>"}},onClose:{defaultValue:null,description:"Called when the suggestion list closes, whether via blur, escape or selection",name:"onClose",required:!1,type:{name:"ComboboxCallback<MaybeComboboxOptionObject>"}},onOpen:{defaultValue:null,description:"Called when the suggestion list opens, whether via typing, click, or focus",name:"onOpen",required:!1,type:{name:"ComboboxCallback<MaybeComboboxOptionObject>"}},wrapperAriaLabel:{defaultValue:null,description:"The optional a11y aria label for combobox Wrapper element that has popup",name:"wrapperAriaLabel",required:!1,type:{name:"string"}},openOnFocus:{defaultValue:null,description:"If true, the popover opens when focus is on the text box.",name:"openOnFocus",required:!1,type:{name:"boolean"}},openOnClick:{defaultValue:{value:"true"},description:"If true, the popover opens when the text box is clicked.",name:"openOnClick",required:!1,type:{name:"boolean"}},validationType:{defaultValue:null,description:"",name:"validationType",required:!1,type:{name:"enum",value:[{value:'"error"'}]}},hideInput:{defaultValue:null,description:"No longer supported and will be removed in an upcoming 3.x release\n@deprecated",name:"hideInput",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Form/Inputs/InputColor/stories/Basic.tsx#Basic"]={docgenInfo:Basic.__docgenInfo,name:"Basic",path:"../components/src/Form/Inputs/InputColor/stories/Basic.tsx#Basic"})}catch(__react_docgen_typescript_loader_error){}function DefaultValue(){return react.createElement(InputColor.S,{defaultValue:"purple"})}function Disabled(){return react.createElement(InputColor.S,{disabled:!0,value:"purple"})}function DisabledNoValue(){return react.createElement(InputColor.S,{disabled:!0})}function ReadOnly(){return react.createElement(InputColor.S,{readOnly:!0,value:"purple"})}ControlledColor.parameters={storyshots:{disable:!0}};const index_stories={argTypes:defaultArgTypes.W,component:InputColor.S,title:"Stories/InputColor"},__namedExportsOrder=["Basic","ControlledColor","DefaultValue","Disabled","DisabledNoValue","ReadOnly"];try{indexstories.displayName="indexstories",indexstories.__docgenInfo={description:"",displayName:"indexstories",props:{fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"ResponsiveValue<FontFamilies, Required<Theme<TLengthStyledSystem>>>"}},fontSize:{defaultValue:null,description:"Use a @looker/components FontSizes to set font size",name:"fontSize",required:!1,type:{name:"ResponsiveValue<FontSizes, Required<Theme<TLengthStyledSystem>>>"}},fontWeight:{defaultValue:null,description:"Use a @looker/components FontWeights to set weight\n  normal, medium, semiBold, bold",name:"fontWeight",required:!1,type:{name:"ResponsiveValue<FontWeights, Required<Theme<TLengthStyledSystem>>>"}},lineHeight:{defaultValue:null,description:"Use a @looker/components LineHeights (xxsmall - xxxxlarge) to set line height",name:"lineHeight",required:!1,type:{name:"ResponsiveValue<FontSizes, Required<Theme<TLengthStyledSystem>>>"}},onClose:{defaultValue:null,description:"Called when the suggestion list closes, whether via blur, escape or selection",name:"onClose",required:!1,type:{name:"ComboboxCallback<MaybeComboboxOptionObject>"}},onOpen:{defaultValue:null,description:"Called when the suggestion list opens, whether via typing, click, or focus",name:"onOpen",required:!1,type:{name:"ComboboxCallback<MaybeComboboxOptionObject>"}},wrapperAriaLabel:{defaultValue:null,description:"The optional a11y aria label for combobox Wrapper element that has popup",name:"wrapperAriaLabel",required:!1,type:{name:"string"}},openOnFocus:{defaultValue:null,description:"If true, the popover opens when focus is on the text box.",name:"openOnFocus",required:!1,type:{name:"boolean"}},openOnClick:{defaultValue:{value:"true"},description:"If true, the popover opens when the text box is clicked.",name:"openOnClick",required:!1,type:{name:"boolean"}},validationType:{defaultValue:null,description:"",name:"validationType",required:!1,type:{name:"enum",value:[{value:'"error"'}]}},hideInput:{defaultValue:null,description:"No longer supported and will be removed in an upcoming 3.x release\n@deprecated",name:"hideInput",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Form/Inputs/InputColor/stories/index.stories.tsx#indexstories"]={docgenInfo:indexstories.__docgenInfo,name:"indexstories",path:"../components/src/Form/Inputs/InputColor/stories/index.stories.tsx#indexstories"})}catch(__react_docgen_typescript_loader_error){}},"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)}}]);