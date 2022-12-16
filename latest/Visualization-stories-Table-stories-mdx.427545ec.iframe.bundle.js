"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[7302],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../visualizations/src/Visualization/stories/Table.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>Table_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts"),Table=__webpack_require__("../visualizations-table/src/Table/index.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:Table.i,title:"Visualizations/Docs/Table",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"visualizations-table"},"Visualizations: Table"),(0,esm.kt)("p",null,"The Table data visualization can be rendered by setting config type to ",(0,esm.kt)("inlineCode",{parentName:"p"},"table"),"."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\nimport React from 'react'\nimport type { Fields } from '@looker/visualizations-adapters'\nimport {\n  buildChartConfig,\n  mockSdkFieldsResponse,\n  tabularResponse,\n  mockSdkDataResponse,\n  mockSdkConfigResponse,\n  mockTotals,\n} from '@looker/visualizations-adapters'\nimport { Visualization } from '../'\n\nexport default function Basic() {\n  const data = tabularResponse([...mockSdkDataResponse])\n\n  const config = buildChartConfig({\n    config: {\n      ...mockSdkConfigResponse,\n      show_row_numbers: true,\n      show_totals: true,\n      type: 'table',\n    },\n    data,\n    fields: mockSdkFieldsResponse as Fields,\n  })\n\n  return (\n    <Visualization\n      data={data}\n      fields={mockSdkFieldsResponse as Fields}\n      height={600}\n      totals={mockTotals}\n      config={config}\n    />\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"groupedpivoted-columns"},"Grouped/pivoted columns"),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\nimport React from 'react'\nimport type { Fields } from '@looker/visualizations-adapters'\nimport {\n  buildChartConfig,\n  buildPivotFields,\n  mockSdkPivotedFieldsResponse,\n  mockPivots,\n  tabularPivotResponse,\n  mockSdkPivotDataResponse,\n  mockSdkConfigResponse,\n} from '@looker/visualizations-adapters'\nimport { Visualization } from '../Visualization'\n\nexport default function Pivot() {\n  const mockPivotFields = buildPivotFields({\n    fields: mockSdkPivotedFieldsResponse as Fields,\n    pivots: mockPivots,\n  })\n\n  const mockPivotData = tabularPivotResponse({\n    data: [...mockSdkPivotDataResponse],\n    fields: mockSdkPivotedFieldsResponse as Fields,\n    pivots: mockPivots,\n  })\n\n  const config = buildChartConfig({\n    config: { ...mockSdkConfigResponse, type: 'table' },\n    data: mockPivotData,\n    fields: mockPivotFields,\n  })\n\n  return (\n    <Visualization\n      config={config}\n      data={mockPivotData}\n      fields={mockPivotFields}\n      pivots={mockPivots}\n      height={600}\n    />\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"wrapped-text"},"Wrapped text"),(0,esm.kt)("p",null,"By default, the Table visualization will wrap long headers and cell content into multiple lines."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\nimport React from 'react'\nimport { mockTableConfig } from '@looker/visualizations-adapters'\nimport { Visualization } from '../'\n\nexport default function WrappedText() {\n  return (\n    <Visualization\n      config={{\n        ...mockTableConfig,\n        truncate_text: false,\n        truncate_header: false,\n      }}\n      data={[\n        {\n          'author.name': 'Henry David Thoreau',\n          'author.bio':\n            'Henry David Thoreau was an American naturalist, essayist, poet, and philosopher. A leading transcendentalist, he is best known for his book Walden, a reflection upon simple living in natural surroundings, and his essay \"Civil Disobedience\", an argument for disobedience to an unjust state.',\n          'author.books_published': 2,\n        },\n        {\n          'author.name': 'Margaret Atwood',\n          'author.bio':\n            \"Margaret Eleanor Atwood (born November 18, 1939) is a Canadian poet, novelist, literary critic, essayist, teacher, environmental activist, and inventor. Since 1961, she has published 18 books of poetry, 18 novels, 11 books of non-fiction, nine collections of short fiction, eight children's books, and two graphic novels, and a number of small press editions of both poetry and fiction. Atwood has won numerous awards and honors for her writing, including two Booker Prizes, the Arthur C. Clarke Award, the Governor General's Award, the Franz Kafka Prize, Princess of Asturias Awards, and the National Book Critics and PEN Center USA Lifetime Achievement Awards\",\n          'author.books_published': 47,\n        },\n      ]}\n      fields={{\n        measures: [\n          {\n            is_numeric: true,\n            label: 'Books Published',\n            label_short: 'Books Published',\n            name: 'author.books_published',\n            sortable: true,\n            sorted: { desc: true, sort_index: 0 },\n            type: 'count_distinct',\n            view: 'author',\n            view_label: 'Author',\n            value_format: null,\n          },\n        ],\n        dimensions: [\n          {\n            is_filter: false,\n            is_fiscal: false,\n            is_numeric: false,\n            is_timeframe: true,\n            label: 'Author Name',\n            label_short: 'Author Name',\n            name: 'author.name',\n            sortable: true,\n            type: 'string',\n            view: 'author',\n            view_label: 'Author',\n            value_format: null,\n          },\n          {\n            is_filter: false,\n            is_fiscal: false,\n            is_numeric: false,\n            is_timeframe: true,\n            label: 'Author Biography',\n            label_short: 'Author Biography',\n            name: 'author.bio',\n            sortable: true,\n            type: 'string',\n            view: 'author',\n            view_label: 'Author',\n            value_format: null,\n          },\n        ],\n        pivots: [],\n      }}\n    />\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"truncated-text"},"Truncated text"),(0,esm.kt)("p",null,"If you wish the header text or cell text to be contained to a single line, set ",(0,esm.kt)("inlineCode",{parentName:"p"},"truncate_header")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"truncate_text")," to ",(0,esm.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\nimport React from 'react'\nimport { mockTableConfig } from '@looker/visualizations-adapters'\nimport { Visualization } from '../'\n\nexport default function TruncatedText() {\n  return (\n    <Visualization\n      config={{\n        ...mockTableConfig,\n        truncate_text: true,\n        truncate_header: true,\n      }}\n      data={[\n        {\n          'author.name': 'Henry David Thoreau',\n          'author.bio':\n            'Henry David Thoreau was an American naturalist, essayist, poet, and philosopher. A leading transcendentalist, he is best known for his book Walden, a reflection upon simple living in natural surroundings, and his essay \"Civil Disobedience\", an argument for disobedience to an unjust state.',\n          'author.books_published': 2,\n        },\n        {\n          'author.name': 'Margaret Atwood',\n          'author.bio':\n            \"Margaret Eleanor Atwood (born November 18, 1939) is a Canadian poet, novelist, literary critic, essayist, teacher, environmental activist, and inventor. Since 1961, she has published 18 books of poetry, 18 novels, 11 books of non-fiction, nine collections of short fiction, eight children's books, and two graphic novels, and a number of small press editions of both poetry and fiction. Atwood has won numerous awards and honors for her writing, including two Booker Prizes, the Arthur C. Clarke Award, the Governor General's Award, the Franz Kafka Prize, Princess of Asturias Awards, and the National Book Critics and PEN Center USA Lifetime Achievement Awards\",\n          'author.books_published': 47,\n        },\n      ]}\n      fields={{\n        measures: [\n          {\n            is_numeric: true,\n            label: 'Books Published',\n            label_short: 'Books Published',\n            name: 'author.books_published',\n            sortable: true,\n            sorted: { desc: true, sort_index: 0 },\n            type: 'count_distinct',\n            view: 'author',\n            view_label: 'Author',\n            value_format: null,\n          },\n        ],\n        dimensions: [\n          {\n            is_filter: false,\n            is_fiscal: false,\n            is_numeric: false,\n            is_timeframe: true,\n            label: 'Author Name',\n            label_short: 'Author Name',\n            name: 'author.name',\n            sortable: true,\n            type: 'string',\n            view: 'author',\n            view_label: 'Author',\n            value_format: null,\n          },\n          {\n            is_filter: false,\n            is_fiscal: false,\n            is_numeric: false,\n            is_timeframe: true,\n            label: 'Author Biography',\n            label_short: 'Author Biography',\n            name: 'author.bio',\n            sortable: true,\n            type: 'string',\n            view: 'author',\n            view_label: 'Author',\n            value_format: null,\n          },\n        ],\n        pivots: [],\n      }}\n    />\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"column-sorting-state"},"Column Sorting State"),(0,esm.kt)("p",null,"The Table visualization can sort by multiple columns simultaneously."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\nimport React from 'react'\nimport { mockTableConfig } from '@looker/visualizations-adapters'\nimport { Visualization } from '../'\n\nexport default function TableMultiSort() {\n  return (\n    <Visualization\n      config={{ ...mockTableConfig, series: [{ cell_visualization: true }] }}\n      data={[\n        {\n          'order.year': '2012',\n          'user.state': 'Oregon',\n          'order.count': 200,\n        },\n        {\n          'order.year': '2013',\n          'user.state': 'Oregon',\n          'order.count': 300,\n        },\n        {\n          'order.year': '2014',\n          'user.state': 'Oregon',\n          'order.count': 150,\n        },\n        {\n          'order.year': '2012',\n          'user.state': 'California',\n          'order.count': 400,\n        },\n        {\n          'order.year': '2013',\n          'user.state': 'California',\n          'order.count': 250,\n        },\n        {\n          'order.year': '2014',\n          'user.state': 'California',\n          'order.count': 600,\n        },\n        {\n          'order.year': '2012',\n          'user.state': 'Washington',\n          'order.count': 99,\n        },\n        {\n          'order.year': '2013',\n          'user.state': 'Washington',\n          'order.count': 500,\n        },\n        {\n          'order.year': '2014',\n          'user.state': 'Washington',\n          'order.count': 250,\n        },\n      ]}\n      fields={{\n        measures: [\n          {\n            is_numeric: true,\n            label: 'Order count',\n            label_short: 'Orders',\n            name: 'order.count',\n            sortable: true,\n            sorted: { desc: false, sort_index: 1 },\n            type: 'count_distinct',\n            view: 'order',\n            view_label: 'Orders',\n            value_format: null,\n          },\n        ],\n        dimensions: [\n          {\n            is_filter: false,\n            is_fiscal: false,\n            is_numeric: false,\n            is_timeframe: true,\n            label: 'Order Year',\n            label_short: 'Year',\n            name: 'order.year',\n            sortable: true,\n            sorted: { desc: false, sort_index: 0 },\n            type: 'string',\n            view: 'order',\n            view_label: 'Order',\n            value_format: null,\n          },\n          {\n            is_filter: false,\n            is_fiscal: false,\n            is_numeric: false,\n            is_timeframe: true,\n            label: 'User State',\n            label_short: 'State',\n            name: 'user.state',\n            sortable: true,\n            sorted: { desc: true, sort_index: 2 },\n            type: 'string',\n            view: 'user',\n            view_label: 'User',\n            value_format: null,\n          },\n        ],\n        pivots: [],\n      }}\n    />\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"horizontal-virtual-scrolling"},"Horizontal virtual scrolling"),(0,esm.kt)("p",null,"When your dataset is very wide, as in the case of a pivoted query with many columns, the Table visualization utilizes horizontal scroll virtualization to maintain page performance."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\nimport React from 'react'\nimport { mockPivotedQuery } from '@looker/visualizations-adapters'\nimport { Visualization } from '../'\n\nexport default function HorizontalScroll() {\n  // demonstrates horizontal virtual scrolling functionality\n  return (\n    <Visualization\n      {...mockPivotedQuery}\n      height={600}\n      config={{ type: 'table', show_totals: true }}\n    />\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)(dist_esm.ArgsTable,{of:Table.i,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Visualizations/Docs/Table",component:Table.i,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const Table_stories=componentMeta,__namedExportsOrder=["__page"]}}]);