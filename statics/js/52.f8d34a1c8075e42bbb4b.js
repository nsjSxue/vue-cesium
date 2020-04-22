(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{AEBS:function(s,t,a){s.exports=a("IpZW")},IpZW:function(s,t,a){"use strict";a.r(t);var r=a("JFUb"),e=Object(r.a)({data:function(){return{alpha:1,brightness:1,contrast:1}},methods:{ready:function(s){s.Cesium,s.viewer}}},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("GridImageryProvider")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("Example")]),s._v(" "),a("h3",[s._v("Load an imagerylayer with GridImageryProvider")]),s._v(" "),a("h4",[s._v("Preview")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-layer-imagery",{attrs:{alpha:s.alpha,brightness:s.brightness,contrast:s.contrast}},[a("vc-provider-imagery-grid")],1)],1),s._v(" "),a("div",{staticClass:"demo-tool"},[a("span",[s._v("alpha")]),s._v(" "),a("vue-slider",{attrs:{min:0,max:1,interval:.01},model:{value:s.alpha,callback:function(t){s.alpha=t},expression:"alpha"}}),s._v(" "),a("span",[s._v("brightness")]),s._v(" "),a("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:s.brightness,callback:function(t){s.brightness=t},expression:"brightness"}}),s._v(" "),a("span",[s._v("contrast")]),s._v(" "),a("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:s.contrast,callback:function(t){s.contrast=t},expression:"contrast"}})],1)],1)]],2),s._v(" "),a("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("Events")]),s._v(" "),s._m(4),s._v(" "),a("hr")],1)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("vc-provider-imagery-grid")]),this._v(" An ImageryProvider that draws a wireframe grid on every tile with controllable background and glow. May be useful for custom rendering effects or debugging terrain.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":alpha")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":brightness")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":contrast")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-grid")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-grid")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("alpha"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("brightness"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("contrast"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("alpha")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("brightness")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("contrast")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("type")]),s._v(" "),a("th",[s._v("default")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("tilingScheme")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("required")]),s._v(" The tiling scheme for which to draw tiles.")])]),s._v(" "),a("tr",[a("td",[s._v("ellipsoid")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.")])]),s._v(" "),a("tr",[a("td",[s._v("cells")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("8")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The number of grids cells.")])]),s._v(" "),a("tr",[a("td",[s._v("color")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("[1.0, 1.0, 1.0, 0.4]")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The color to draw grid lines.")])]),s._v(" "),a("tr",[a("td",[s._v("glowColor")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("[0.0, 1.0, 0.0, 0.05]")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The color to draw glow for grid lines.")])]),s._v(" "),a("tr",[a("td",[s._v("glowWidth")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("6")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The width of lines used for rendering the line glow effect.")])]),s._v(" "),a("tr",[a("td",[s._v("backgroundColor")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("[0.0, 0.5, 0.0, 0.2]")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" Background fill color.")])]),s._v(" "),a("tr",[a("td",[s._v("tileWidth")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("256")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The width of the tile for level-of-detail selection purposes.")])]),s._v(" "),a("tr",[a("td",[s._v("tileHeight")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("256")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The height of the tile for level-of-detail selection purposes.")])]),s._v(" "),a("tr",[a("td",[s._v("canvasSize")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("256")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The size of the canvas used for rendering.")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/GridImageryProvider.html"}},[this._v("GridImageryProvider")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("parameter")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),s._v(" "),a("tr",[a("td",[s._v("errorEvent")]),s._v(" "),a("td",[s._v("TileProviderError")]),s._v(" "),a("td",[s._v("Triggers when the imagery provider encounters an asynchronous error.")])]),s._v(" "),a("tr",[a("td",[s._v("readyPromise")]),s._v(" "),a("td",[s._v("ImageryProvider")]),s._v(" "),a("td",[s._v("Triggers when the provider is ready for use.")])])])])}],!1,null,null,null);t.default=e.exports}}]);
//# sourceMappingURL=52.f8d34a1c8075e42bbb4b.js.map