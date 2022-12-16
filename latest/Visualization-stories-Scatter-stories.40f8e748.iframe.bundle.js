"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[55],{"../visualizations/src/Visualization/stories/Scatter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Scatter:()=>Scatter,SizeBy:()=>SizeBy,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_Visualization__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../visualizations/src/Visualization/Visualization.tsx"),_looker_visualizations_adapters__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../visualizations-adapters/src/utils/tabularResponse.ts"),_looker_visualizations_adapters__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../visualizations-adapters/src/fixtures/mockSdkDataResponse.ts"),_looker_visualizations_adapters__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../visualizations-adapters/src/utils/buildChartConfig.ts"),_looker_visualizations_adapters__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../visualizations-adapters/src/fixtures/mockSdkConfigResponse.ts"),_looker_visualizations_adapters__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../visualizations-adapters/src/fixtures/mockSdkFieldsResponse.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_Visualization__WEBPACK_IMPORTED_MODULE_1__.F,title:"Visualizations/Stories/Scatter"},Template=({config:configProp,...restProps})=>{const data=(0,_looker_visualizations_adapters__WEBPACK_IMPORTED_MODULE_2__.B)([..._looker_visualizations_adapters__WEBPACK_IMPORTED_MODULE_3__.w]),config=(0,_looker_visualizations_adapters__WEBPACK_IMPORTED_MODULE_4__.J)({config:{..._looker_visualizations_adapters__WEBPACK_IMPORTED_MODULE_5__.M,...configProp,type:"scatter"},data,fields:_looker_visualizations_adapters__WEBPACK_IMPORTED_MODULE_6__.B});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Visualization__WEBPACK_IMPORTED_MODULE_1__.F,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({config,data,fields:_looker_visualizations_adapters__WEBPACK_IMPORTED_MODULE_6__.B},restProps))},Scatter=Template.bind({});Scatter.args={height:600,width:800};const SizeBy=Template.bind({});SizeBy.args={height:600,width:800,config:{series:{"orders.count":{size_by:"orders.average_total_amount_of_order_usd"}},y_axis:[{range:[20,75]}]}},Scatter.parameters={storySource:{source:"({\n  config: configProp,\n  ...restProps\n}) => {\n  const data = tabularResponse([...mockSdkDataResponse])\n\n  const config = buildChartConfig({\n    config: {\n      ...mockSdkConfigResponse,\n      ...configProp,\n      type: 'scatter',\n    },\n    data,\n    fields: mockSdkFieldsResponse as Fields,\n  })\n\n  return (\n    <Visualization\n      config={config}\n      data={data}\n      fields={mockSdkFieldsResponse as Fields}\n      {...restProps}\n    />\n  )\n}"},...Scatter.parameters},SizeBy.parameters={storySource:{source:"({\n  config: configProp,\n  ...restProps\n}) => {\n  const data = tabularResponse([...mockSdkDataResponse])\n\n  const config = buildChartConfig({\n    config: {\n      ...mockSdkConfigResponse,\n      ...configProp,\n      type: 'scatter',\n    },\n    data,\n    fields: mockSdkFieldsResponse as Fields,\n  })\n\n  return (\n    <Visualization\n      config={config}\n      data={data}\n      fields={mockSdkFieldsResponse as Fields}\n      {...restProps}\n    />\n  )\n}"},...SizeBy.parameters};const __namedExportsOrder=["Scatter","SizeBy"]}}]);