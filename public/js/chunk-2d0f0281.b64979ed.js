(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0281"],{"9abe":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("EDIT MACHINE")]),n("form",{on:{submit:e.checkForm}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"price"}],attrs:{type:"number",required:""},domProps:{value:e.price},on:{input:function(t){t.target.composing||(e.price=t.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),n("button",{staticClass:"button",attrs:{type:"submit"}},[e._v("Spara")])])])},r=[],i=n("1da1"),o=(n("96cf"),n("b0c0"),n("a4d3"),n("e01a"),n("bc3a")),s=n.n(o),c={name:"LoginBox",props:{msg:String},data:function(){return{info:null,name:null,price:null,description:null}},methods:{fetchMyMachines:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s.a.get("http://localhost:3000/machine/info/"+e.$route.params.id,{headers:{Authorization:"Bearer "+localStorage.token},email:"info@ameste.se",password:"password",user:"60812f083aea642b9c7c41a5"}).then((function(t){e.name=t.data.machineName,e.price=t.data.price,e.description=t.data.description,e.info=t.data,200==t.status&&console.log("Lagring ok")}));case 1:case"end":return t.stop()}}),t)})))()},checkForm:function(e){if(this.name&&this.age)return!0;this.errors=[],this.name||this.errors.push("Fyll i ett namn."),this.price||this.errors.push("Ange ett pris på maskinen."),e.preventDefault(),this.errors.length||this.updateMachine()},updateMachine:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s.a.put("http://localhost:3000/machine/update",{machineName:e.name,price:e.price,description:e.description,_id:e.$route.params.id},{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxMmYwODNhZWE2NDJiOWM3YzQxYTUiLCJuYW1lIjoicsO2diIsImV4cCI6MTYyNDkwMTY0Ny44NTUsImlhdCI6MTYxOTcxNzY0N30.msQa3ktAw7vZ7cIi-W0_4_gKMIJuSXVtcT6tjvTQ6X8"}});case 1:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.fetchMyMachines()}},u=c,p=n("2877"),m=Object(p["a"])(u,a,r,!1,null,"4b8f843c",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0f0281.b64979ed.js.map