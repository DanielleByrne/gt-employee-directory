(this["webpackJsonpgt-employee-directory"]=this["webpackJsonpgt-employee-directory"]||[]).push([[0],{18:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),o=a.n(r),c=a(12),s=a(13),m=a(14),i=a(17),u=a(16),p=a(15),h=a.n(p),d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={search:"",employees:[],filteredEmployees:[]},e.sortEmployees=function(t){var a=e.state.employees.sort((function(e,a){return e.name[t]>a.name[t]?1:e.name[t]<a.name[t]?-1:0}));e.setState({employees:a})},e.handleInputChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(c.a)({},n,l))},e.handleSearch=function(t){t.preventDefault(),e.filterEmployees()},e.filterEmployees=function(){var t=e.state.search.toLowerCase();e.setState({filteredEmployees:e.state.employees.filter((function(e){return e.name.last.toLowerCase().includes(t)}))})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://randomuser.me/api/?results=5").then((function(t){console.log("the response",t.data.results),e.setState({employees:t.data.results,filteredEmployees:t.data.results}),console.log(e.state.filteredEmployees)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Empoyee Directory "),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("form",{onSubmit:this.handleSearch},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search for an Employee by Last Name",name:"search",value:this.state.search,onChange:this.handleInputChange})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Search")))),l.a.createElement("table",{className:"table table-striped table-dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Id"),l.a.createElement("th",{scope:"col",onClick:function(){e.sortEmployees("first")}},l.a.createElement("button",{className:"btn btn-dark"},"First Name")),l.a.createElement("th",{scope:"col",onClick:function(){e.sortEmployees("last")}},l.a.createElement("button",{className:"btn btn-dark"},"Last Name")),l.a.createElement("th",{scope:"col"},"Thumbnail"))),l.a.createElement("tbody",null,this.state.filteredEmployees.map((function(e,t){return l.a.createElement("tr",{key:e.login.uuid},l.a.createElement("td",{scope:"row"},t+1),l.a.createElement("td",null,e.name.first),l.a.createElement("td",null,e.name.last),l.a.createElement("td",null,l.a.createElement("img",{src:e.picture.thumbnail,alt:"Employee Thumbnail"})))}))))))}}]),a}(n.Component);var E=function(){return l.a.createElement("div",null,l.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.d03e88a3.chunk.js.map