(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{421:function(t,s,a){"use strict";a.r(s);var r=a(2),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("/components/aos-public/aos-button/recycleBtn.vue")]),t._v(" "),s("h4",{attrs:{id:"实例回收站"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例回收站"}},[t._v("#")]),t._v(" 实例回收站")]),t._v(" "),s("ul",[s("li",[t._v("使用效果：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/12/28/StZW4buFoRfqTnw.png",alt:"image-20221226163537726.png"}})]),t._v(" "),s("ul",[s("li",[t._v("代码：")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("button\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("disabled"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ids.length == 0"')]),t._v("\n    @click"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reductionObj()"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("还原\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("button\n    v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NormalBtn.length"')]),t._v("\n    @click"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fullDelete()"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("disabled"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ids.length == 0"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("彻底删除\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("button @click"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"backPage()"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("返回"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("ul",[s("li",[t._v("说明：")])]),t._v(" "),s("p",[t._v("从目前的开发来看，实例回收站列表上方的按钮一直都是固定的。所以，该处的按钮单独封装成了组件。")]),t._v(" "),s("ul",[s("li",[t._v("使用范例（出处：src\\components\\aos-public\\aos-table\\aos-business-table.vue)：")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("recycle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("btn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("entity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"entity"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("ids"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ids"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("btnsArr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"buttons"')]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("show"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isDelete == 1 && defaultBtn"')]),t._v(" @remove"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("refresh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"removeRefresh"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("button v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("show"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isDelete != 1 && defaultBtn"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"right_btn"')]),t._v(" @click"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"toRecycleBin()"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("回收站 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Props")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("isDelete")]),t._v(" "),s("td",[t._v("该值等于1时，代表页面实例页面是处在回收站列表的")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("——")]),t._v(" "),s("td",[t._v("——")])]),t._v(" "),s("tr",[s("td",[t._v("entity")]),t._v(" "),s("td",[t._v("实体对象")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("——")]),t._v(" "),s("td",[t._v("——")])]),t._v(" "),s("tr",[s("td",[t._v("ids")]),t._v(" "),s("td",[t._v("列表数据项被选中的id集合")]),t._v(" "),s("td",[t._v("array")]),t._v(" "),s("td",[t._v("——")]),t._v(" "),s("td",[t._v("——")])]),t._v(" "),s("tr",[s("td",[t._v("btnsArr")]),t._v(" "),s("td",[t._v("后端返回的按钮数据数组")]),t._v(" "),s("td",[t._v("array")]),t._v(" "),s("td",[t._v("——")]),t._v(" "),s("td",[t._v("——")])])])]),t._v(" "),s("p",[s("strong",[t._v("Events")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("事件名称")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("回调函数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("remove-refresh")]),t._v(" "),s("td",[t._v("回收站页面中，“还原”、“彻底删除”、“返回”操作触发")]),t._v(" "),s("td",[t._v("“还原”、“彻底删除”、“返回”操作的回调函数")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);