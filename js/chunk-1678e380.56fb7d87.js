(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1678e380"],{1517:function(t,a,e){},"1b795":function(t,a,e){"use strict";var n=e("1517"),s=e.n(n);s.a},"2cdd":function(t,a,e){},3690:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("a-icon",{staticStyle:{"margin-right":"8px"},attrs:{type:t.type}}),t._v("\n  "+t._s(t.text)+"\n")],1)},s=[],i=(e("d027"),{name:"IconText",props:{type:{type:String,required:!0},text:{type:[String,Number],required:!0}}}),r=i,o=e("17cc"),c=Object(o["a"])(r,n,s,!1,null,null,null);a["a"]=c.exports},4964:function(t,a,e){"use strict";function n(t){if(Array.isArray(t)){for(var a=0,e=new Array(t.length);a<t.length;a++)e[a]=t[a];return e}}function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){return n(t)||s(t)||i()}e.d(a,"a",function(){return r})},"4a09":function(t,a,e){"use strict";var n=e("2cdd"),s=e.n(n);s.a},6981:function(t,a,e){"use strict";var n=e("dffc"),s=e.n(n);s.a},dffc:function(t,a,e){},f2f0:function(t,a,e){"use strict";e.r(a);for(var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-header-index-wide page-header-wrapper-grid-content-main"},[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{md:24,lg:7}},[e("a-card",{attrs:{bordered:!1}},[e("div",{staticClass:"account-center-avatarHolder"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.avatar()}})]),e("div",{staticClass:"username"},[t._v(t._s(t.nickname()))]),e("div",{staticClass:"bio"},[t._v("海纳百川，有容乃大")])]),e("div",{staticClass:"account-center-detail"},[e("p",[e("i",{staticClass:"title"}),t._v("交互专家\n          ")]),e("p",[e("i",{staticClass:"group"}),t._v("蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED\n          ")]),e("p",[e("i",{staticClass:"address"}),e("span",[t._v("浙江省")]),e("span",[t._v("杭州市")])])]),e("a-divider"),e("div",{staticClass:"account-center-tags"},[e("div",{staticClass:"tagsTitle"},[t._v("标签")]),e("div",[t._l(t.tags,function(a,n){return[a.length>20?e("a-tooltip",{key:a,attrs:{title:a}},[e("a-tag",{key:a,attrs:{closable:0!==n,afterClose:function(){return t.handleTagClose(a)}}},[t._v(t._s(a.slice(0,20)+"..."))])],1):e("a-tag",{key:a,attrs:{closable:0!==n,afterClose:function(){return t.handleTagClose(a)}}},[t._v(t._s(a))])]}),t.tagInputVisible?e("a-input",{ref:"tagInput",style:{width:"78px"},attrs:{type:"text",size:"small",value:t.tagInputValue},on:{change:t.handleInputChange,blur:t.handleTagInputConfirm,keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.handleTagInputConfirm(a)}}}):e("a-tag",{staticStyle:{background:"#fff",borderStyle:"dashed"},on:{click:t.showTagInput}},[e("a-icon",{attrs:{type:"plus"}}),t._v("New Tag\n            ")],1)],2)]),e("a-divider",{attrs:{dashed:!0}}),e("div",{staticClass:"account-center-team"},[e("div",{staticClass:"teamTitle"},[t._v("团队")]),e("a-spin",{attrs:{spinning:t.teamSpinning}},[e("div",{staticClass:"members"},[e("a-row",t._l(t.teams,function(a,n){return e("a-col",{key:n,attrs:{span:12}},[e("a",[e("a-avatar",{attrs:{size:"small",src:a.avatar}}),e("span",{staticClass:"member"},[t._v(t._s(a.name))])],1)])}),1)],1)])],1)],1)],1),e("a-col",{attrs:{md:24,lg:17}},[e("a-card",{staticStyle:{width:"100%"},attrs:{bordered:!1,tabList:t.tabListNoTitle,activeTabKey:t.noTitleKey},on:{tabChange:function(a){return t.handleTabChange(a,"noTitleKey")}}},["article"===t.noTitleKey?e("article-page"):"app"===t.noTitleKey?e("app-page"):"project"===t.noTitleKey?e("project-page"):t._e()],1)],1)],1)],1)},s=[],i=e("4964"),r=(e("5221"),e("d05b"),e("e20c")),o=e("680a"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-list"},[e("a-list",{attrs:{grid:{gutter:24,lg:3,md:2,sm:1,xs:1},dataSource:t.dataSource},scopedSlots:t._u([{key:"renderItem",fn:function(a){return e("a-list-item",{},[e("a-card",{attrs:{hoverable:!0}},[e("a-card-meta",[e("div",{staticStyle:{"margin-bottom":"3px"},attrs:{slot:"title"},slot:"title"},[t._v(t._s(a.title))]),e("a-avatar",{staticClass:"card-avatar",attrs:{slot:"avatar",src:a.avatar,size:"small"},slot:"avatar"}),e("div",{staticClass:"meta-cardInfo",attrs:{slot:"description"},slot:"description"},[e("div",[e("p",[t._v("活跃用户")]),e("p",[e("span",[t._v(t._s(a.activeUser)),e("span",[t._v("万")])])])]),e("div",[e("p",[t._v("新增用户")]),e("p",[t._v(t._s(t._f("NumberFormat")(a.newUser)))])])])],1),e("template",{staticClass:"ant-card-actions",slot:"actions"},[e("a",[e("a-icon",{attrs:{type:"download"}})],1),e("a",[e("a-icon",{attrs:{type:"edit"}})],1),e("a",[e("a-icon",{attrs:{type:"share-alt"}})],1),e("a",[e("a-dropdown",[e("a",{staticClass:"ant-dropdown-link",attrs:{href:"javascript:;"}},[e("a-icon",{attrs:{type:"ellipsis"}})],1),e("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e("a-menu-item",[e("a",{attrs:{href:"javascript:;"}},[t._v("1st menu item")])]),e("a-menu-item",[e("a",{attrs:{href:"javascript:;"}},[t._v("2nd menu item")])]),e("a-menu-item",[e("a",{attrs:{href:"javascript:;"}},[t._v("3rd menu item")])])],1)],1)],1)])],2)],1)}}])})],1)},l=[],u=[],d=0;d<11;d++)u.push({title:"Alipay",avatar:"https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",activeUser:17,newUser:1700});var p={name:"Article",components:{},data:function(){return{dataSource:u}}},g=p,m=(e("6981"),e("17cc")),v=Object(m["a"])(g,c,l,!1,null,"28b7dfe4",null),f=v.exports,h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-list",{attrs:{size:"large",rowKey:"id",loading:t.loading,itemLayout:"vertical",dataSource:t.data},scopedSlots:t._u([{key:"renderItem",fn:function(a){return e("a-list-item",{key:a.id},[e("template",{slot:"actions"},[e("icon-text",{attrs:{type:"star-o",text:a.star}}),e("icon-text",{attrs:{type:"like-o",text:a.like}}),e("icon-text",{attrs:{type:"message",text:a.message}})],1),e("a-list-item-meta",[e("a",{attrs:{slot:"title",href:"https://vue.ant.design/"},slot:"title"},[t._v(t._s(a.title))]),e("template",{slot:"description"},[e("span",[e("a-tag",[t._v("Ant Design")]),e("a-tag",[t._v("设计语言")]),e("a-tag",[t._v("蚂蚁金服")])],1)])],2),e("article-list-content",{attrs:{description:a.description,owner:a.owner,avatar:a.avatar,href:a.href,updateAt:a.updatedAt}})],2)}}])},[t.data.length>0?e("div",{staticStyle:{"text-align":"center","margin-top":"16px"},attrs:{slot:"footer"},slot:"footer"},[e("a-button",{attrs:{loading:t.loadingMore},on:{click:t.loadMore}},[t._v("加载更多")])],1):t._e()])},y=[],_=e("2af9"),b=e("3690"),C={name:"Article",components:{IconText:b["a"],ArticleListContent:_["a"]},data:function(){return{loading:!0,loadingMore:!1,data:[]}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.$http.get("/list/article").then(function(a){console.log("res",a),t.data=a.result,t.loading=!1})},loadMore:function(){var t=this;this.loadingMore=!0,this.$http.get("/list/article").then(function(a){t.data=t.data.concat(a.result)}).finally(function(){t.loadingMore=!1})}}},w=C,k=Object(m["a"])(w,h,y,!1,null,"d432e448",null),T=k.exports,x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ant-pro-pages-account-projects-cardList"},[e("a-list",{attrs:{loading:t.loading,"data-source":t.data,grid:{gutter:24,xxl:3,xl:2,lg:2,md:2,sm:2,xs:1}},scopedSlots:t._u([{key:"renderItem",fn:function(a){return e("a-list-item",{},[e("a-card",{staticClass:"ant-pro-pages-account-projects-card",attrs:{hoverable:""}},[e("img",{attrs:{slot:"cover",src:a.cover,alt:a.title},slot:"cover"}),e("a-card-meta",{attrs:{title:a.title}},[e("template",{slot:"description"},[e("ellipsis",{attrs:{length:50}},[t._v(t._s(a.description))])],1)],2),e("div",{staticClass:"cardItemContent"},[e("span",[t._v(t._s(t._f("fromNow")(a.updatedAt)))]),e("div",{staticClass:"avatarList"},[e("avatar-list",{attrs:{size:"mini"}},t._l(a.members,function(t,n){return e("avatar-list-item",{key:a.id+"-avatar-"+n,attrs:{src:t.avatar,tips:t.name}})}),1)],1)])],1)],1)}}])})],1)},I=[],j=e("6bf2"),S=e.n(j),A=_["t"].Option,O=_["b"].AvatarItem,L={name:"Project",components:{AvatarList:_["b"],AvatarListItem:O,Ellipsis:_["g"],TagSelect:_["t"],TagSelectOption:A,StandardFormRow:_["r"]},data:function(){return{data:[],form:this.$form.createForm(this),loading:!0}},filters:{fromNow:function(t){return S()(t).fromNow()}},mounted:function(){this.getList()},methods:{handleChange:function(t){console.log("selected ".concat(t))},getList:function(){var t=this;this.$http.get("/list/article",{params:{count:8}}).then(function(a){console.log("res",a),t.data=a.result,t.loading=!1})}}},V=L,$=(e("1b795"),Object(m["a"])(V,x,I,!1,null,"507e14b3",null)),E=$.exports,K=e("591a"),N={components:{RouteView:o["d"],PageView:o["c"],AppPage:f,ArticlePage:T,ProjectPage:E},data:function(){return{tags:["很有想法的","专注设计","辣~","大长腿","川妹子","海纳百川"],tagInputVisible:!1,tagInputValue:"",teams:[],teamSpinning:!0,tabListNoTitle:[{key:"article",tab:"文章(8)"},{key:"app",tab:"应用(8)"},{key:"project",tab:"项目(8)"}],noTitleKey:"app"}},mounted:function(){this.getTeams()},methods:Object(r["a"])({},Object(K["c"])(["nickname","avatar"]),{getTeams:function(){var t=this;this.$http.get("/workplace/teams").then(function(a){t.teams=a.result,t.teamSpinning=!1})},handleTabChange:function(t,a){this[a]=t},handleTagClose:function(t){var a=this.tags.filter(function(a){return a!==t});this.tags=a},showTagInput:function(){var t=this;this.tagInputVisible=!0,this.$nextTick(function(){t.$refs.tagInput.focus()})},handleInputChange:function(t){this.tagInputValue=t.target.value},handleTagInputConfirm:function(){var t=this.tagInputValue,a=this.tags;t&&!a.includes(t)&&(a=[].concat(Object(i["a"])(a),[t])),Object.assign(this,{tags:a,tagInputVisible:!1,tagInputValue:""})}})},M=N,z=(e("4a09"),Object(m["a"])(M,n,s,!1,null,"c9d3df08",null));a["default"]=z.exports}}]);