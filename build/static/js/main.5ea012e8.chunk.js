(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{30:function(e){e.exports=JSON.parse('[{"id":1,"name":"Project-2 My Health Journal","image":"https://github.com/ohall1223/project-2/blob/main/assets/LandingPage.png?raw=true","github":"https://github.com/ohall1223/project-2","deployed":"https://my-health-journal.herokuapp.com/","topics":"Mysql, Express, CSS, HTML"},{"id":2,"name":"Project-1 uProjekt","image":"https://github.com/L-Buchholz/project-1/blob/main/assets/images/screenshot.png?raw=true","github":"https://github.com/L-Buchholz/project-1","deployed":"https://github.com/L-Buchholz/project-1","topics":"CSS, HTML"},{"id":3,"name":"Code-Quiz","image":"https://github.com/ohall1223/Code-Quiz/blob/main/assets/Screen%20Shot%202022-02-01%20at%204.43.49%20PM.png?raw=true","github":"https://github.com/ohall1223/Code-Quiz","deployed":"https://ohall1223.github.io/Code-Quiz/","topics":"CSS, HTML"},{"id":4,"name":"Code Refactor","image":"https://github.com/ohall1223/code-refactor/blob/main/assets/images/screenshot1.png?raw=true","github":"https://github.com/ohall1223/code-refactor","deployed":"https://ohall1223.github.io/code-refactor/","topics":"HTML"},{"id":5,"name":"E-Commerce-Back-End","image":"https://github.com/ohall1223/E-Commerce-Back-End/blob/main/Screen%20Shot%202022-02-01%20at%204.50.49%20PM.png?raw=true","github":"https://github.com/ohall1223/E-Commerce-Back-End","deployed":"https://watch.screencastify.com/v/hCaYMdC7kqitFk9Yc8qn","topics":"Mysql, Express"},{"id":6,"name":"Good-ReadMe-Generator","image":"https://github.com/ohall1223/Good-README-Generator-/blob/main/Screen%20Shot%202022-02-01%20at%204.54.15%20PM.png?raw=true","github":"https://github.com/ohall1223/Good-README-Generator-","deployed":" https://watch.screencastify.com/v/Ga5qfbN1kWzymdEjLN0v","topics":"CSS, HTML"}]')},33:function(e,t,a){e.exports=a(50)},39:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),l=a(12),o=a.n(l),r=(a(39),a(15)),c=a(16),s=a(22),m=a(21),u=a(31),d=a(5),h=a(32),g=a(17),p=a.n(g);var f=function(e){return i.a.createElement("div",null,i.a.createElement(h.a,{expand:"lg",bg:"dark",sticky:"top"},i.a.createElement(p.a,{className:"nav-link",to:"/"},i.a.createElement("div",{class:"text-light"},i.a.createElement("h1",{class:"nav-title-front"},"Olivia Hall"))),i.a.createElement("ul",{class:"navbar-nav ml-auto navitem-indent"},i.a.createElement("li",{class:"nav-item"},i.a.createElement(p.a,{to:"/about"},i.a.createElement("div",{class:"nav-front text-light"},"About Me"))),i.a.createElement("li",{class:"nav-item"},i.a.createElement(p.a,{to:"/portfolio"},i.a.createElement("div",{class:"nav-front text-light"},"Portfolio"))),i.a.createElement("li",{class:"nav-item"},i.a.createElement(p.a,{to:"/contact"},i.a.createElement("div",{class:"nav-front text-light"},"Contact"))),i.a.createElement("li",{class:"nav-item"},i.a.createElement(p.a,{to:"/resume"},i.a.createElement("div",{class:"nav-front text-light"},"Resume"))))))};var E=function(){return i.a.createElement("section",{className:"container"},i.a.createElement("h2",{class:"top-title"},"Olivia Hall"),i.a.createElement("hr",null),i.a.createElement("div",null,i.a.createElement("img",{class:"mb-5",id:"avatar",src:"https://avatars.githubusercontent.com/u/81581516?v=4",alt:"Olivia Hall"}),i.a.createElement("p",null,"Hello! I am a student at the University of Denver coding bootcamp. My studies include JavaScript, CSS, HTML, handlebars, bootstrap, express, MySQL, node JS, MongoDB, and React. I am a passionate life-long learner. I love the outdoors, cooking and spending time with my friends & family.")))};a(23);var b=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"},i.a.createElement("h3",{className:"card-title"},e.name),i.a.createElement("h3",{class:"proj-icons-container"},i.a.createElement("a",{href:e.github},i.a.createElement("img",{class:"ptoject-icon",src:"https://img.icons8.com/fluent/48/000000/github.png",alt:"github repo"})),i.a.createElement("a",{href:e.deploy},i.a.createElement("img",{class:"project=icon",src:"https://img.icons8.com/fluent/48/000000/domain.png",alt:"live application"}))),i.a.createElement("h5",{class:"topics"},"(",e.topics,")")))},v=a(30);function y(e){return i.a.createElement("div",{className:"wrapper"},e.children)}var w=function(){return i.a.createElement("section",{className:"container"},i.a.createElement("div",{className:"project"},i.a.createElement("h2",{className:"top-title"},"Portfolio"),i.a.createElement("hr",null)),i.a.createElement(y,{id:"card-data"},v.map((function(e){return i.a.createElement(b,{key:e.id,image:e.image,name:e.name,github:e.github,deploy:e.deploy,topics:e.topics})}))))},C=a(6),k=a(1),M=a(14);var S=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(M.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),r=Object(M.a)(o,2),c=r[0],s=r[1],m=a.name,u=a.email,d=a.message;function h(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);s(t?"":"please enter a valid email")}c||l(Object(k.a)(Object(k.a)({},a),{},Object(C.a)({},e.target.name,e.target.value)))}return i.a.createElement("section",{className:"container"},i.a.createElement("h2",{"data-testid":"h1tag",className:"top-title"},"Contact Information"),i.a.createElement("hr",null),i.a.createElement("form",{class:"justify-content-center",id:"contact-form"},i.a.createElement("div",{class:"mt-5"},i.a.createElement("label",{htmlFor:"name"},"Name:"),i.a.createElement("input",{class:"form-control",type:"text",name:"name",defaultValue:m,onBlur:h})),i.a.createElement("div",{class:"mt-5"},i.a.createElement("label",{htmlFor:"email"},"Email address:"),i.a.createElement("input",{class:"form-control",type:"email",name:"email",defaultValue:u,onBlur:h})),i.a.createElement("div",{class:"mt-5"},i.a.createElement("label",{htmlFor:"message"},"Message:"),i.a.createElement("input",{class:"form-control",type:"text",name:"message",defaultValue:d,onBlur:h,rows:"7"})),c&&i.a.createElement("div",null,i.a.createElement("p",{className:"error-text"},c)),i.a.createElement("div",{class:"mt-5 mb-5"},i.a.createElement("button",{"fata-testid":"button",class:"btn btn-outline-dark",type:"submit",onSubmit:function(e){e.preventDefault()}},"Submit"))))};var j=function(){return i.a.createElement("section",{class:"container"},i.a.createElement("h2",{className:"top-title"},"Resume"),i.a.createElement("hr",null),i.a.createElement("div",null,i.a.createElement("div",{class:"mt-5"},i.a.createElement("h2",{className:"top-title"},"Olivia Hall"),i.a.createElement("ul",null,i.a.createElement("h4",null,"Qualifications:"),i.a.createElement("li",null,"Like hands-on work within a team environment. Good at resolving problems and thinking logically, analytically, and creatively. Proficient with computing programs such as SolidWorks, MATLAB, AutoCAD, Mathcad, RAM Steel, and ProSteel , EPA Net, Microsoft Word and Excel, EnerCalc, RetainPro. Comfortable with writing, concisely and professionally."),i.a.createElement("h4",null,"Education:"),i.a.createElement("li",null,"2008-2013 University of Colorado at Denver School of Engineering and Applied Sciences Major: Engineering-Civil Engineering GPA 3.30 2016 Red Rocks Community College Civil 3D drafting course"),i.a.createElement("h4",null,"Experience:"),i.a.createElement("li",null,"8/19-12/19 Lead Drafting Engineer, Elite Environmental Controls Responsible for drafting environmental control plans for the cannabis industry. My responsibilities included: Drafting CO2 lines from the tank, to the safety valve, to the flow box, which distributed CO2 to the various, grow rooms. Drafting wiring plans including sensor & alarm schematics and wiring from CO2 , temperature and humidity sensors to the environmental control panel to the CO2 alarms. Drafting safety valve schematics, control panel schematics & flow box schematics. Thoroughly researching the CO2 enrichment building codes in Colorado, California, Michigan, Massachusetts & Maryland. 10/17-12/18 Lead Drafting Engineer, Universal Grow Controls Responsible for drafting carbon dioxide enrichment and irrigation plans for the cannabis industry. My responsibilities included: Drafting CO2 lines from the tank, to the safety valve, to the flow box, which distributed CO2 to the various, grow rooms. Drafting wiring plans including sensor & alarm schematics and wiring from the CO2 sensors to the control panel to the CO2 alarms. Drafting safety valve schematics, control panel schematics & flow box schematics. Thoroughly researching the CO2 enrichment building codes in Colorado, California, Michigan, Massachusetts & Maryland. Drafting piping and instrumentation diagrams for irrigation systems including various methods of dosing water with nutrients. 05/14-06/15 Engineering Consultant, Alliance Engineering LTD Responsible for consulting and design of several civil engineering disciplines including Foundation design for residential buildings Parcel layout for subdivisions Beam design for residential and commercial buildings Flood plain development permits, including flood plain cross sections Water and waste-water system layouts Retaining wall and flood wall design UDFCD Drainage Studies and Detention Basin Sizing 10/13-05/14 E.I., Tower Engineering Professionals, Inspections team Responsible for inspecting towers and drafting reports for clients Performing inspections involves climbing towers, taking measurements, notes and photos of essential elements for later review Responsible for drafting reports, based on notes and photos taken during inspections, for clients on AutoCAD pertaining to cellular towers foundations, structures, mounts and antennas 4/12-8/12 Intern, CH2M Hill, Energy & Chemicals Structural team Performed several tasks for engineers, calculation and administrative work for mining and refinery projects Became proficient at several engineering design programs (noted above) Gained experience in the process and management of taking a project from bid, to design, to manufacturing/construction"),i.a.createElement("h4",null,"Certifications and Honors:"),i.a.createElement("li",null,"08/13 Outstanding Undergraduate Student in Civil Engineering (Faculty Nominated) 12/12 Fundamentals of Engineering certification exam 11/11 ACI Concrete Field Testing Technician- Grade 1"),i.a.createElement("h4",null,"Interests:"),i.a.createElement("li",null,"Sustainability, green space, efficient homes and buildings Making a difference in how the world views modern civilization"),i.a.createElement("h4",null,"References:"),i.a.createElement("li",null,"Available upon request")),i.a.createElement("p",{class:"mt-5"},i.a.createElement("a",{href:"https://www.linkedin.com/in/olivia-hall-ei-a524b364/"},i.a.createElement("img",{src:"https://img.icons8.com/fluent/48/000000/linkedin.png",alt:"linkedIn"}))),i.a.createElement("a",{href:"https://github.com/ohall1223",alt:"github"}))))},O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement("header",null,i.a.createElement(f,null)),i.a.createElement("div",{className:"content"},i.a.createElement(d.Route,{exact:!0,path:"/",render:function(){return i.a.createElement(d.Redirect,{to:"/about"})}}),i.a.createElement(d.Route,{path:"/about",component:E}),i.a.createElement(d.Route,{path:"/portfolio",component:w}),i.a.createElement(d.Route,{path:"/contact",component:S}),i.a.createElement(d.Route,{path:"/resume",component:j})))}}]),a}(n.Component);var N=function(){return i.a.createElement("footer",{className:"footer bg-dark fixed-bottom"},i.a.createElement("a",{href:"https://github.com/ohall1223"},i.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/github--v1.png",alt:"Github",className:"icon"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/olivia-hall-ei-a524b364/"},i.a.createElement("img",{src:"https://img.icons8.com/fluent/48/000000/linkedin.png",alt:"LinkedIn",className:"icon"})),i.a.createElement("a",{href:"https://ohall1223.github.io/Portfolio/"},i.a.createElement("img",{src:"https://img.icons8.com/ios-glyphs/30/000000/capricorn.png",alt:"OliviaHall",className:"icon"})))};a(49);var x=function(){return i.a.createElement("div",null,i.a.createElement(O,null),i.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),l(e),o(e)}))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),D()}},[[33,1,2]]]);
//# sourceMappingURL=main.5ea012e8.chunk.js.map