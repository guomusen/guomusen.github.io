(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cfc2a"],{"64a7":function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=this,t=a.$createElement,l=a._self._c||t;return l("a-card",{attrs:{bordered:!1}},[l("div",{staticClass:"table-page-search-wrapper"},[l("a-form",{attrs:{layout:"inline"}},[l("a-row",{attrs:{gutter:48}},[l("a-col",{attrs:{md:8,sm:24}},[l("a-form-item",{attrs:{label:"角色ID"}},[l("a-input",{attrs:{placeholder:"请输入"}})],1)],1),l("a-col",{attrs:{md:8,sm:24}},[l("a-form-item",{attrs:{label:"状态"}},[l("a-select",{attrs:{placeholder:"请选择","default-value":"0"}},[l("a-select-option",{attrs:{value:"0"}},[a._v("全部")]),l("a-select-option",{attrs:{value:"1"}},[a._v("关闭")]),l("a-select-option",{attrs:{value:"2"}},[a._v("运行中")])],1)],1)],1),l("a-col",{attrs:{md:8,sm:24}},[l("span",{staticClass:"table-page-search-submitButtons"},[l("a-button",{attrs:{type:"primary"}},[a._v("查询")]),l("a-button",{staticStyle:{"margin-left":"8px"}},[a._v("重置")])],1)])],1)],1)],1),l("s-table",{attrs:{columns:a.columns,data:a.loadData},scopedSlots:a._u([{key:"actions",fn:function(e,t){return l("span",{},a._l(t.actionList,function(e,t){return l("a-tag",{key:t},[a._v(a._s(e.describe))])}),1)}},{key:"status",fn:function(e){return l("span",{},[a._v("\n      "+a._s(a._f("statusFilter")(e))+"\n    ")])}},{key:"action",fn:function(e,t){return l("span",{},[l("a",{on:{click:function(e){return a.handleEdit(t)}}},[a._v("编辑")]),l("a-divider",{attrs:{type:"vertical"}}),l("a-dropdown",[l("a",{staticClass:"ant-dropdown-link"},[a._v("\n          更多 "),l("a-icon",{attrs:{type:"down"}})],1),l("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[l("a-menu-item",[l("a",{attrs:{href:"javascript:;"}},[a._v("详情")])]),l("a-menu-item",[l("a",{attrs:{href:"javascript:;"}},[a._v("禁用")])]),l("a-menu-item",[l("a",{attrs:{href:"javascript:;"}},[a._v("删除")])])],1)],1)],1)}}])}),l("a-modal",{attrs:{title:"操作",width:800},on:{ok:a.handleOk},model:{value:a.visible,callback:function(e){a.visible=e},expression:"visible"}},[l("a-form",{attrs:{autoFormCreate:function(a){e.form=a}}},[l("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"唯一识别码",hasFeedback:"",validateStatus:"success"}},[l("a-input",{attrs:{placeholder:"唯一识别码",id:"no",disabled:"disabled"},model:{value:a.mdl.id,callback:function(e){a.$set(a.mdl,"id",e)},expression:"mdl.id"}})],1),l("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"权限名称",hasFeedback:"",validateStatus:"success"}},[l("a-input",{attrs:{placeholder:"起一个名字",id:"permission_name"},model:{value:a.mdl.name,callback:function(e){a.$set(a.mdl,"name",e)},expression:"mdl.name"}})],1),l("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"状态",hasFeedback:"",validateStatus:"warning"}},[l("a-select",{model:{value:a.mdl.status,callback:function(e){a.$set(a.mdl,"status",e)},expression:"mdl.status"}},[l("a-select-option",{attrs:{value:"1"}},[a._v("正常")]),l("a-select-option",{attrs:{value:"2"}},[a._v("禁用")])],1)],1),l("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"描述",hasFeedback:""}},[l("a-textarea",{attrs:{rows:5,placeholder:"...",id:"describe"},model:{value:a.mdl.describe,callback:function(e){a.$set(a.mdl,"describe",e)},expression:"mdl.describe"}})],1),l("a-divider"),l("a-form-item",{attrs:{labelCol:a.labelCol,wrapperCol:a.wrapperCol,label:"赋予权限",hasFeedback:""}},[l("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",allowClear:!0},model:{value:a.mdl.actions,callback:function(e){a.$set(a.mdl,"actions",e)},expression:"mdl.actions"}},a._l(a.permissionList,function(e,t){return l("a-select-option",{key:t,attrs:{value:e.value}},[a._v(a._s(e.label))])}),1)],1)],1)],1)],1)},s=[],n=t("2af9"),o={name:"TableList",components:{STable:n["q"]},data:function(){var e=this;return{description:"列表使用场景：后台管理中的权限管理以及角色管理，可用于基于 RBAC 设计的角色权限控制，颗粒度细到每一个操作类型。",visible:!1,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},form:null,mdl:{},advanced:!1,queryParam:{},columns:[{title:"唯一识别码",dataIndex:"id"},{title:"权限名称",dataIndex:"name"},{title:"可操作权限",dataIndex:"actions",scopedSlots:{customRender:"actions"}},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",width:"150px",dataIndex:"action",scopedSlots:{customRender:"action"}}],permissionList:null,loadData:function(a){return e.$http.get("/permission",{params:Object.assign(a,e.queryParam)}).then(function(e){var a=e.result;return a.data.map(function(e){return e.actionList=JSON.parse(e.actionData),e}),a})},selectedRowKeys:[],selectedRows:[]}},filters:{statusFilter:function(e){var a={1:"正常",2:"禁用"};return a[e]}},created:function(){this.loadPermissionList()},methods:{loadPermissionList:function(){var e=this;new Promise(function(e){var a=[{label:"新增",value:"add",defaultChecked:!1},{label:"查询",value:"get",defaultChecked:!1},{label:"修改",value:"update",defaultChecked:!1},{label:"列表",value:"query",defaultChecked:!1},{label:"删除",value:"delete",defaultChecked:!1},{label:"导入",value:"import",defaultChecked:!1},{label:"导出",value:"export",defaultChecked:!1}];setTimeout(e(a),1500)}).then(function(a){e.permissionList=a})},handleEdit:function(e){this.mdl=Object.assign({},e),console.log(this.mdl),this.visible=!0},handleOk:function(){},onChange:function(e,a){this.selectedRowKeys=e,this.selectedRows=a},toggleAdvanced:function(){this.advanced=!this.advanced}},watch:{}},r=o,i=t("17cc"),d=Object(i["a"])(r,l,s,!1,null,null,null);a["default"]=d.exports}}]);