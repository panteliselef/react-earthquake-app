(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/crosshairs-gps.27b7eeac.svg"},31:function(e,t,a){e.exports=a(54)},36:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(14),l=a.n(c),r=(a(36),a(26)),i=a(10),s=a(6),u=a(8),m=a(29),d=[{minValue:0,maxValue:2,color:"#4A7BA7"},{minValue:2,maxValue:3,color:"#04B4B3"},{minValue:3,maxValue:4,color:"#10CAC9"},{minValue:4,maxValue:5,color:"#F5A623"},{minValue:5,maxValue:6,color:"#FF7D50"},{minValue:6,maxValue:7,color:"#FC6644"},{minValue:7,maxValue:8,color:"#E75F40"},{minValue:8,maxValue:9,color:"#E13A20"},{minValue:9,maxValue:10,color:"#D93218"},{minValue:10,maxValue:20,color:"#C03823"}],p=function(e){return d.filter(function(t){return t.minValue<=e&&t.maxValue>e})},E=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?"rgba(".concat(parseInt(t[1],16),",").concat(parseInt(t[2],16),",").concat(parseInt(t[3],16),",0.4)"):null},g=a(7),v=a(2),f=o.a.createContext({dispatch:function(){},viewport:{},currLocation:{},quakes:[]});function y(e){return e*Math.PI/180}var h=function(e,t,a,n){var o=y(a-e),c=y(n-t);e=y(e),a=y(a);var l=Math.sin(o/2)*Math.sin(o/2)+Math.sin(c/2)*Math.sin(c/2)*Math.cos(e)*Math.cos(a);return 2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))*6371},D=a(24),b=a.n(D),w=a(25),O=a.n(w);var A=function(e){var t=e.quake,a=t.properties,c=t.geometry,l=Object(n.useContext)(f),r=l.dispatch,i=l.currLocation,s=l.viewport,u=new Date(t.properties.time);return a.mag>=0&&o.a.createElement("li",{id:t.id},o.a.createElement("div",{className:"myGrid"},o.a.createElement("div",{className:"magnitude-container",style:{backgroundColor:p(a.mag)[0]?E(p(a.mag)[0].color):"#333"}},o.a.createElement("div",{className:"magnitude-circle",style:{backgroundColor:p(a.mag)[0]?p(a.mag)[0].color:"#333"}},o.a.createElement("div",{className:"magnitude"},a.mag))),o.a.createElement("div",{style:{margin:"1em",marginBottom:"0.5em"}},o.a.createElement("div",{className:"title"},a.place),o.a.createElement("div",{className:"time"},u.toLocaleString("el-GR")," "),o.a.createElement("div",{className:"distance"},o.a.createElement("span",null,null!=e.currLocation?"".concat(h(c.coordinates[1],c.coordinates[0],i.latitude,i.longitude).toFixed(0)," km from your location"):"- km from your locaiton"),o.a.createElement("img",{alt:"location-icon",className:"locationIcon",src:b.a,width:"18px",height:"18px"})),o.a.createElement("hr",null),o.a.createElement(O.a,{style:{color:p(a.mag)[0].color},onClick:function(e){return r({type:"UPDATED_SELECTED_QUAKE",payload:a=t}),void r({type:"UPDATED_VIEWPORT",payload:Object(v.a)({},s,{longitude:a.geometry.coordinates[0],latitude:a.geometry.coordinates[1],zoom:10})});var a},children:"no children",className:""},"Pin Location"))))};var T=function(e){var t=Object(n.useContext)(f),a=t.quakes,c=t.downloadingData;return o.a.createElement("ul",{className:"quakelist"},c?"loading":a.map(function(e){return o.a.createElement(A,{key:e.id,quake:e})}))},k=a(30),x=o.a.createContext({dispatch:function(){},viewport:{},setFetchedData:function(){},downloadingData:null}),C=a(11),N=a(12),_=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(C.a)(this,e),this.parameters=Object(v.a)({starttime:"2019-10-9"},t)}return Object(N.a)(e,[{key:"getUrl",value:function(){var e=Object.getOwnPropertyNames(this.parameters),t=Object.values(this.parameters);return["https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson",e=e.map(function(e,a){return"".concat(e,"=").concat(t[a])})].flat().join("&")}}]),e}();var j=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],l=a[1],r=Object(n.useContext)(x),i=r.dispatch,u=r.viewport,m=r.setFetchedData,d=r.toasts,p=o.a.createRef(),E=function(e){var t=new Date;return t.setDate(t.getDate()-e),"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())},f=function(e){console.log(p.current),console.log(p.current.style),p.current.style.visibility="hidden"};return o.a.createElement(g.Row,null,o.a.createElement(g.Col,{xsOffset:2,sm:10,smOffset:1,mdOffset:2,md:8,xs:8},o.a.createElement("div",{id:"search-container",className:"search-bar-container"},o.a.createElement("input",{id:"search-field",onFocus:function(e){p.current.style.visibility="visible"},type:"search",onInput:function(e){return function(e){E(30),""!==e.target.value?fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(e.target.value,".json?&types=country,region&access_token=").concat("pk.eyJ1IjoiZWxlZmNvZGVzIiwiYSI6ImNqdnoyemtnaTBjaGo0OG1uMmVhZWlkdzkifQ.I0WGnZdw3YHylb86dAPk3Q")).then(function(e){return e.json()}).then(function(e){console.log(e.features),l(e.features)}):l([]),console.log(e.target.value)}(e)},placeholder:"Search something"}),o.a.createElement("div",{id:"search-bar-suggestion",ref:p,className:"search-bar-suggestions"},c.map(function(e){return o.a.createElement("div",{onClick:function(t){return function(e,t){console.log("ID",t.id),f(),e.target.parentElement.previousSibling.value=t.matching_place_name||t.place_name,console.log("Selected:",t),i({type:"TOGGLE_DATA_DOWNLOADING",payload:!0}),i({type:"UPDATED_VIEWPORT",payload:Object(v.a)({},u,{longitude:t.center[0]+4,latitude:t.center[1],zoom:6})});var a=new _({starttime:E(30),minlatitude:t.bbox[1],minlongitude:t.bbox[0],maxlatitude:t.bbox[3],maxlongitude:t.bbox[2],limit:50,orderby:"time"});fetch(a.getUrl()).then(function(e){return e.json()}).then(function(e){console.log("DATA",e),0===e.features.length&&i({type:"UPDATED_TOAST_STACK",payload:[].concat(Object(k.a)(d),[{timestame:new Date,type:"toast",value:"No earthquakes found"}])}),m(e.features),i({type:"TOGGLE_DATA_DOWNLOADING",payload:!1})}).catch(function(e){return console.error(e)}),i({type:"UPDATED_SELECTED_REGION",payload:t})}(t,e)},key:e.id,id:e.id},e.matching_place_name||e.place_name)})))))},V=(a(45),function(e){var t=e.dispatch,a=e.viewport,c=Object(n.useState)(!1),l=Object(s.a)(c,2),r=l[0],i=l[1],u=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){document.getElementById("locationText").style.display="none",console.log(e.coords),t({type:"UPDATED_USER_LOCATION",payload:e.coords}),t({type:"UPDATED_VIEWPORT",payload:Object(v.a)({},a,{latitude:e.coords.latitude,longitude:e.coords.longitude,zoom:7})})}):console.error("Geolocation is not supported")};return o.a.createElement("div",{onClick:function(e){r?(i(!1),document.getElementsByClassName("location-icon")[0].children[0].setAttribute("fill","#c3c3c3"),t({type:"UPDATED_USER_LOCATION",payload:null})):(i(!0),document.getElementById("locationText").style.display="inline",document.getElementsByClassName("location-icon")[0].children[0].setAttribute("fill","#35B4F6"),u())},className:"user-location"},o.a.createElement("div",null,"Use my Location"," ",o.a.createElement("span",{id:"locationText",className:"loading"},"loading...")," "),o.a.createElement("svg",{className:"location-icon",style:{width:"24px",height:"24px"},viewBox:"0 0 30 30"},o.a.createElement("path",{fill:"#c3c3c3",d:"M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z"})))}),I={currLocation:null,viewport:{latitude:45.4221,longitude:-75.6903,width:"100%",height:"100vh",zoom:2},fetchedData:[],selectedQuake:null,selectedRegion:null,toasts:[],downloadingData:!1},P="UPDATED_VIEWPORT",L="UPDATED_SELECTED_QUAKE",S="UPDATED_SELECTED_REGION",U="UPDATED_USER_LOCATION",G="UPDATED_TOAST_STACK",R="TOGGLE_DATA_DOWNLOADING",M=function(e,t){switch(console.log("Action",t.type,t.payload),console.log("State",e),t.type){case P:return Object(v.a)({},e,{viewport:t.payload});case L:return Object(v.a)({},e,{selectedQuake:t.payload});case S:return Object(v.a)({},e,{selectedRegion:t.payload});case U:return Object(v.a)({},e,{currLocation:t.payload});case G:return Object(v.a)({},e,{toasts:t.payload});case R:return Object(v.a)({},e,{downloadingData:t.payload});default:return Object(v.a)({},e)}};a(46),a(47);var W=function(e){var t=e.dispatch,a=e.toasts;return o.a.createElement("ul",{className:"toast-stack"},a.map(function(e,n){return console.log(e),n===a.length-1?o.a.createElement("li",{key:e.timestamp,onAnimationEndCapture:function(){return t({type:"UPDATED_TOAST_STACK",payload:[]})},className:"animated-item"},e.value):o.a.createElement("li",{key:e.timestamp,className:"animated-item"},e.value)}))};var q=function(){return o.a.createElement("div",{className:"offline-popup"},o.a.createElement("div",{className:"offline-popup-wrapper"},o.a.createElement("div",null,"No internet connection"),o.a.createElement("div",{className:"offline-popup-button",onClick:function(){return window.location.reload()}},"Reload")))};var B=function(e){var t=Object(n.useReducer)(M,I),a=Object(s.a)(t,2),c=a[0],l=a[1],r=Object(n.useState)([]),i=Object(s.a)(r,2),d=i[0],E=i[1],v=Object(n.useState)(!1),y=Object(s.a)(v,2),h=y[0],D=y[1];return setInterval(function(){navigator.onLine?D(!1):D(!0)},5e3),Object(n.useEffect)(function(){console.log(e.location);var t=new URLSearchParams(e.location.search);console.log(t.get("region"))},[e.location]),o.a.createElement(g.Grid,{fluid:!0},o.a.createElement(u.e,{latitude:c.viewport.latitude,longitude:c.viewport.longitude,zoom:c.viewport.zoom,style:{width:"100%",height:"100vh"},accessToken:"pk.eyJ1IjoiZWxlZmNvZGVzIiwiYSI6ImNqdnoyemtnaTBjaGo0OG1uMmVhZWlkdzkifQ.I0WGnZdw3YHylb86dAPk3Q",mapStyle:"mapbox://styles/elefcodes/cjvz1805a00cq1clmiekbyx1p",onViewportChange:function(e){l({type:"UPDATED_VIEWPORT",payload:e})}},null!=c.currLocation?o.a.createElement(u.b,{latitude:c.currLocation.latitude,longitude:c.currLocation.longitude},o.a.createElement("div",{className:"marker-btn mylocation"})):null,o.a.createElement(m.a,{raduis:40,extent:512,nodeSize:64,component:function(e){var t=e.longitude,a=e.latitude,n=e.pointCount;return o.a.createElement(u.b,{longitude:t,latitude:a},o.a.createElement("div",{className:"cluster-marker"},n))}},d.map(function(e){return o.a.createElement(u.b,{key:e.id,latitude:e.geometry.coordinates[1],longitude:e.geometry.coordinates[0]},o.a.createElement("div",{className:"marker-btn",style:{backgroundColor:p(e.properties.mag)[0]?p(e.properties.mag)[0].color:"#333"},onClick:function(t){t.preventDefault(),l({type:"UPDATED_SELECTED_QUAKE",payload:e})}}))})),c.selectedQuake&&o.a.createElement(u.d,{latitude:c.selectedQuake.geometry.coordinates[1],longitude:c.selectedQuake.geometry.coordinates[0],onClose:function(){l({type:"UPDATED_SELECTED_QUAKE",payload:null})}},o.a.createElement("div",null,c.selectedQuake.properties.title)),o.a.createElement(u.c,{showCompass:!0,showZoom:!0,position:"bottom-left"}),h&&o.a.createElement(g.Row,null,o.a.createElement(g.Col,{xs:12},o.a.createElement(q,null))),o.a.createElement(g.Row,null,o.a.createElement(g.Col,{xs:9,md:9,sm:7},o.a.createElement(x.Provider,{value:{dispatch:l,setFetchedData:E,viewport:c.viewport,downloadingData:c.downloadingData,toasts:c.toasts}},o.a.createElement(j,null)),o.a.createElement(W,{dispatch:l,toasts:c.toasts})),o.a.createElement(g.Col,{xs:3,md:3,sm:5},o.a.createElement(V,{dispatch:l,viewport:c.viewport}),o.a.createElement(f.Provider,{value:{dispatch:l,viewport:c.viewport,currLocation:c.currLocation,quakes:d,downloadingData:c.downloadingData}},o.a.createElement(T,null))))))};var Q=function(){return o.a.createElement(r.a,null,o.a.createElement(i.a,{path:"/",component:B}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.bd074070.chunk.js.map