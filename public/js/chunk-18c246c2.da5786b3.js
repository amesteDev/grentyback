(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18c246c2"],{6943:function(e,t,s){},"73cf":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("form",{attrs:{id:"app",action:"https://vuejs.org/",method:"post"},on:{submit:e.checkForm}},[e.errors.length?s("p",[s("b",[e._v("Du måste fylla i formuläret enligt nedan:")]),s("ul",e._l(e.errors,(function(t){return s("li",{key:t.idx},[e._v(e._s(t))])})),0)]):e._e(),s("p",[s("label",{attrs:{for:"email"}},[e._v("E-post:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"email",name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),s("p",[s("label",{attrs:{for:"password"}},[e._v("Lösenord")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password",name:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("br"),e._v(" Lösenordet behöver innehålla:"),s("br"),s("span",{class:e.pw_length?"required":""},[e._v("minst åtta tecken")]),s("br"),s("span",{class:e.pw_uppercase?"required":""},[e._v("minst en stor bokstav")]),s("br"),s("span",{class:e.pw_lowercase?"required":""},[e._v("minst en liten bosktav")]),s("br"),s("span",{class:e.pw_number?"required":""},[e._v("minst en siffra")]),s("br")]),s("p",[s("label",{attrs:{for:"name"}},[e._v("Namn:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{id:"name",type:"text",name:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),s("p",[s("label",{attrs:{for:"adress"}},[e._v("Adress:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.adress,expression:"adress"}],attrs:{id:"adress",type:"text",name:"adress"},domProps:{value:e.adress},on:{input:function(t){t.target.composing||(e.adress=t.target.value)}}})]),s("p",[s("label",{attrs:{for:"zip"}},[e._v("Postnummer:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.zip,expression:"zip"}],attrs:{id:"zip",type:"zip",name:"zip"},domProps:{value:e.zip},on:{input:function(t){t.target.composing||(e.zip=t.target.value)}}})]),s("p",[s("label",{attrs:{for:"lan"}},[e._v("Stad:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.lan,expression:"lan"}],attrs:{id:"lan",type:"text",name:"lan"},domProps:{value:e.lan},on:{input:function(t){t.target.composing||(e.lan=t.target.value)}}})]),s("p",[s("label",{attrs:{for:"kommun"}},[e._v("Stad:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.kommun,expression:"kommun"}],attrs:{id:"kommun",type:"text",name:"kommun"},domProps:{value:e.kommun},on:{input:function(t){t.target.composing||(e.kommun=t.target.value)}}})]),s("p",[s("label",{attrs:{for:"city"}},[e._v("Stad:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],attrs:{id:"city",type:"text",name:"city"},domProps:{value:e.city},on:{input:function(t){t.target.composing||(e.city=t.target.value)}}})]),s("label",{attrs:{for:"agree"}},[e._v("Jag godkänner att mina personuppgifter hanteras enligt GDPR och "),s("router-link",{attrs:{to:"/gdpr"}},[e._v("integritetspolicy")])],1),s("input",{attrs:{type:"checkbox",id:"agree",name:"agree"}}),s("button",{staticClass:"button",attrs:{type:"submit",value:"Submit"}},[e._v("Registrera!")])])])},r=[],n=(s("b0c0"),s("bc3a")),i=s.n(n),o=s("5393"),l=s("29ca"),p={data:function(){return{lanLista:o,kommunLista:l,name:null,password:null,adress:null,zip:null,city:null,username:null,lan:null,kommun:null,errors:[],pw_number:!1,pw_length:!1,pw_lowercase:!1,pw_uppercase:!1}},watch:{password:function(){this.pw_length=this.password.length>8,this.pw_number=/\d/.test(this.password),this.pw_lowercase=/[a-z]/.test(this.password),this.pw_uppercase=/[A-Z]/.test(this.password)}},methods:{checkForm:function(e){if(this.name&&this.age)return!0;this.errors=[],this.name||this.errors.push("Fyll i en e-post."),this.password||this.errors.push("Fyll i ett lösenord."),this.name||this.errors.push("Fyll i ditt namn"),this.adress||this.errors.push("Fyll i din adress."),this.zip||this.errors.push("Fyll i ditt postnummer."),this.city||this.errors.push("Fyll i din ort."),e.preventDefault(),this.errors.length||this.registerUser()},registerUser:function(){var e=this;i.a.post("http://localhost:3000/user/reg",{email:this.email,name:this.name,password:this.password,adress:this.adress,zip:this.zip,city:this.city,username:"okok"}).then((function(t){return e.info=t.data}))}}},m=p,u=(s("caf4"),s("2877")),d=Object(u["a"])(m,a,r,!1,null,"f0c59ec4",null);t["default"]=d.exports},caf4:function(e,t,s){"use strict";s("6943")}}]);
//# sourceMappingURL=chunk-18c246c2.da5786b3.js.map