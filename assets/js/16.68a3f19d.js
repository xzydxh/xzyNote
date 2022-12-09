(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{424:function(t,e,a){"use strict";a.r(e);var n=a(2),s=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"前端开发规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端开发规范"}},[t._v("#")]),t._v(" 前端开发规范")]),t._v(" "),e("p",[t._v("作者：肖卓彦")]),t._v(" "),e("p",[t._v("日期：2022-10-31")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"前端文件组织结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端文件组织结构"}},[t._v("#")]),t._v(" 前端文件组织结构")]),t._v(" "),e("p",[t._v("前端项目根目录下各文件夹/文件内容如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("|-- App.vue\n|-- api --与后端交互API\n|-- assets --前端静态资源\n|-- components --通用组件\n|-- config --全局配置\n|-- const --系统变量\n|-- directive --自定义指令\n|-- doc --storybook文档\n|-- error.js \n|-- eventbus --事件总线\n|-- ext --eip融合通用方法\n|-- filters --过滤器\n|-- main.js\n|-- mixins --混入\n|-- page --系统级页面\n|-- permission.js\n|-- router --路由\n|-- store --vuex相关配置\n|-- stories --storybook相关配置\n|-- style --样式文件\n|-- util --工具文件\n`-- views --开发vue代码放置位置\n")])])]),e("h2",{attrs:{id:"api中代码的组织结构要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api中代码的组织结构要求"}},[t._v("#")]),t._v(" API中代码的组织结构要求")]),t._v(" "),e("p",[t._v("todo 待完善")]),t._v(" "),e("h2",{attrs:{id:"views-页面相关代码-中与实体相关内容的组织结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#views-页面相关代码-中与实体相关内容的组织结构"}},[t._v("#")]),t._v(" views(页面相关代码)中与实体相关内容的组织结构")]),t._v(" "),e("p",[t._v("内置实体放在内置实体文件夹下(buildEntity)，通用实体相关代码放在entity文件夹下")]),t._v(" "),e("blockquote",[e("p",[t._v("buildEntity 与 buildInentity文档重复，需要修改合并")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("`-- views\n |-- admin\n |-- briefing\n |-- buildEntity --内置实体\n |-- buildinEntity\n |-- docEntity\n |-- eamap\n |-- entity --通用实体\n |-- gen\n |-- kpiEntity\n |-- masterDataEntity\n |-- process\n |-- redirect.vue\n |-- relation\n |-- relationKnowledge\n |-- system `-- treeEntity\n")])])]),e("h3",{attrs:{id:"通用实体的文件结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通用实体的文件结构"}},[t._v("#")]),t._v(" 通用实体的文件结构")]),t._v(" "),e("h4",{attrs:{id:"实体各配置页面的组织结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实体各配置页面的组织结构"}},[t._v("#")]),t._v(" 实体各配置页面的组织结构")]),t._v(" "),e("div",{staticClass:"language-views文件夹下代码结构 extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".\n|-- eamap\n|-- entity\n|   |-- changeHistory --历史记录\n|   |-- codeRule.vue  --编码规则\n|   |-- components  --实体组件\n|   |-- derive  --实体派生\n|   |-- detail.vue  -- 实体基本信息\n|   |-- display  -- 实体实例展示相关代码\n|   |-- fastHelp.vue \n|   |-- fields --实体字段\n|   |-- index.vue --实体列表\n|   |-- lifeCycle  -- 实体生命周期\n|   |-- operation  -- 实体新增/编辑/删除页面\n|   |-- page --实体页面配置\n|   |-- reference  -- 应用实体\n|   `-- versionRule.vue  --版本规则\n|-- gen\n|-- kpiEntity\n|-- masterDataEntity\n|-- process\n|-- redirect.vue\n|-- relation\n|-- relationKnowledge\n|-- system\n`-- treeEntity\n")])])]),e("h4",{attrs:{id:"实例组织结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例组织结构"}},[t._v("#")]),t._v(" 实例组织结构")]),t._v(" "),e("p",[t._v("实例文件放在 entity/display文件夹下，相关内容修改在该文件夹下进行")]),t._v(" "),e("div",{staticClass:"language-display文件夹下代码结构 extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".\n|-- components\n|   |-- Import\n|   |-- components\n|   |-- editEntity\n|   |-- mattersEntity\n|   |-- mattersEntity_HOME\n|   |-- plainEntity\n|   |-- treeEntity\n|   `-- update\n|-- dataView.vue\n|-- detail.vue\n|-- index.vue\n`-- platePage.vue\n")])])]),e("h3",{attrs:{id:"内置实体组织结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内置实体组织结构"}},[t._v("#")]),t._v(" 内置实体组织结构")]),t._v(" "),e("h4",{attrs:{id:"只有按钮以及右键菜单不同的内置实体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#只有按钮以及右键菜单不同的内置实体"}},[t._v("#")]),t._v(" 只有按钮以及右键菜单不同的内置实体")]),t._v(" "),e("p",[t._v("在实体中新增按钮配置，以及右键菜单配置，通过在实体中配置为特殊的内置实体添加不同的按钮、按钮回调事件、不同的右键菜单、菜单回调事件来对不同类型的内置实体进行处理操作，该部分需要修改代码结构，如确认采取该方案，则给出详细的设计方案。")]),t._v(" "),e("h4",{attrs:{id:"差别较大的内置实体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#差别较大的内置实体"}},[t._v("#")]),t._v(" 差别较大的内置实体")]),t._v(" "),e("p",[t._v("对于需要大量开发量开发的内置实体如树实体等，将实体放置在buildEntity，通过设置路由条件展示对应实体页面，所有内置实体均放置在buildEntity文件夹下，实体的目录与剧本实体目录相同。")]),t._v(" "),e("p",[t._v("Todo: 在buildInEntity下提供一个内置实体demo，通过配置实体路由，以及复制该实体下的代码，即可在它的基础上修改，开发内置实体")]),t._v(" "),e("h3",{attrs:{id:"其他系统实体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他系统实体"}},[t._v("#")]),t._v(" 其他系统实体")]),t._v(" "),e("p",[t._v("如果其他实体上具有特殊功能，需要在views下文件夹下标识实体，需要重写的代码统一在该文件夹内部进行处理，按照需要导入实体所需功能，通过实体标识配置路由。")]),t._v(" "),e("h2",{attrs:{id:"命名规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命名规范"}},[t._v("#")]),t._v(" 命名规范")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("列表页面以 index.vue命名，详情页面以 detail.vue命名")])]),t._v(" "),e("li",[e("p",[t._v("引用类型变量应标识出数据类型：如 xxxList，xxxObject , xxxDict等，变量采用驼峰方式命名")])]),t._v(" "),e("li",[e("p",[t._v("函数名称以翻译软件翻译的英文命名，处理函数以handle开头，如(handleClick()等)")])]),t._v(" "),e("li",[e("p",[t._v("引用组件以html规范的组件标识，多个词语以 - 分隔，如"),e("base-table")],1)]),t._v(" "),e("li",[e("p",[t._v("基础组件以base开头命名，如 "),e("base-button")],1)])]),t._v(" "),e("h2",{attrs:{id:"注释规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注释规范"}},[t._v("#")]),t._v(" 注释规范")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("定义的全局变量应给出注释，说明变量含义")])]),t._v(" "),e("li",[e("p",[t._v("定义的函数应当给出注释，注释内容包括：函数功能、函数变量、函数返回值等")])]),t._v(" "),e("li",[e("p",[t._v("复杂的函数应当在注释中给出设计说明，说明函数的执行逻辑")])]),t._v(" "),e("li",[e("p",[t._v("变量注释标识在变量之后，函数注释标识在函数定义上方")])]),t._v(" "),e("li",[e("p",[t._v("在vue页面上使用插件增加注释，标识页面说明、修改人员、修改日期等信息")])])]),t._v(" "),e("h2",{attrs:{id:"代码结构规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码结构规范"}},[t._v("#")]),t._v(" 代码结构规范")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("公共函数应当提取形成公共js，以减少代码冗余")])]),t._v(" "),e("li",[e("p",[t._v("不在页面中使用行内样式")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);