(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",{attrs:{id:"app",method:"post"},on:{submit:t.checkForm}},[t.errors.length?r("p",[r("b",[t._v("Du måste fylla i formuläret enligt nedan:")]),r("ul",t._l(t.errors,(function(e){return r("li",{key:e.idx},[t._v(t._s(e))])})),0)]):t._e(),r("p",[r("label",{attrs:{for:"email"}},[t._v("E-post")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"email",type:"email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("p",[r("label",{attrs:{for:"password"}},[t._v("Lösenord")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",type:"password",name:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("button",{staticClass:"button",attrs:{type:"submit",value:"Submit"}},[t._v("Login")])]),r("p",[t._v("Inget konto?")]),r("router-link",{attrs:{to:"register"}},[t._v("Registrera här!")]),r("br")],1)},a=[],o=(r("b0c0"),r("bc3a")),n=r.n(o),i={name:"LoginBox",props:{msg:String},data:function(){return{password:null,email:null,errors:[],info:null}},methods:{checkForm:function(t){if(this.name&&this.age)return!0;this.errors=[],this.email||this.errors.push("Fyll i en e-post."),this.password||this.errors.push("Ange ditt lösenord."),t.preventDefault(),this.errors.length||this.login()},login:function(){var t=this;n.a.post("http://localhost:3000/user/login",{username:this.email,password:this.password}).then((function(e){localStorage.token=e.data.token,localStorage.longitude=e.data.user.longitude,localStorage.latitude=e.data.user.latitude,e.data.err?t.errors.push(e.data.msg):t.$router.go("/")}))}}},l=i,u=r("2877"),p=Object(u["a"])(l,s,a,!1,null,"414317fe",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d2086b7.79cb27be.js.map