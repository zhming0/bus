(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{176:function(e,t,s){"use strict";s.r(t);var r=s(0),a=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("Persistence allows "),s("router-link",{attrs:{to:"/packages/bus-workflow/"}},[e._v("@node-ts/bus-workflow")]),e._v(" to maintain durable state in an underlying provider, and therefore run as a stateless service. This is important for a number of reasons:")],1),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("By default, "),s("router-link",{attrs:{to:"/packages/bus-workflow/"}},[e._v("@node-ts/bus-workflow")]),e._v(" uses an in-memory persistence provider. This is fine to use when playing with the package and doing casual development, however it's not intended for production use as the state won't survive a process restart.")],1),e._v(" "),s("p",[e._v("The following persistence providers are currently available:")]),e._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/packages/bus-postgres/"}},[e._v("@node-ts/bus-postgres")])],1)]),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("Implementing a new transport is relatively simple (and encouraged!). This can be done by implementing the "),s("a",{attrs:{href:"https://github.com/node-ts/bus/blob/master/packages/bus-workflow/src/workflow/persistence/persistence.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Persistence<>"),s("OutboundLink")],1),e._v(" interface from "),s("code",[e._v("@node-ts/bus-workflow")]),e._v(". If you'd like to contribute your persistence adapter back to "),s("code",[e._v("@node-ts/bus")]),e._v(" then please fork this repo, add a new package at "),s("code",[e._v("/packages/bus-<persistence-name>")]),e._v(" and create a PR back to this repository.")]),e._v(" "),s("p",[e._v("Persistence adapters should be created and then registered in a new inversify module so that they consumers can use the persistence just by loading the module.")]),e._v(" "),s("p",[e._v("For an example of a persistence implementation, see the code for the "),s("a",{attrs:{href:"https://github.com/node-ts/bus/blob/master/packages/bus-postgres/",target:"_blank",rel:"noopener noreferrer"}},[e._v("@node-ts/bus-postgres"),s("OutboundLink")],1),e._v(" persistence adapter.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"persistence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#persistence","aria-hidden":"true"}},[this._v("#")]),this._v(" Persistence")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("The workflow service can be treated as an ephemeral service that can be scaled in and out at will")]),this._v(" "),t("li",[this._v("Execution of each workflow can be handled by a pool of distributed workflow services")]),this._v(" "),t("li",[this._v("Workflow state will persist regardless of how many services are running, if any")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"implementing-a-persistence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementing-a-persistence","aria-hidden":"true"}},[this._v("#")]),this._v(" Implementing a Persistence")])}],!1,null,null,null);t.default=a.exports}}]);