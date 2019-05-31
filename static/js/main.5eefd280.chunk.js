(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/metadata-img.1977d45a.png"},28:function(e,t,a){e.exports=a.p+"static/media/crosshairs-gps.27b7eeac.svg"},34:function(e,t,a){e.exports=a(62)},39:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),c=a.n(r),l=(a(39),a(20)),i=a(10),u=a(15),s=a(1),m=a(6),d=a(8),p=a(33),E=a(7),f=o.a.createContext({dispatch:function(){},viewport:{},currLocation:{},quakes:[]}),y=a(11),h=a(12),g=function(e){var t=new Date;return t.setDate(t.getDate()-e),"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())},v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(y.a)(this,e),this.parameters=Object(s.a)({starttime:"2019-10-9"},t)}return Object(h.a)(e,[{key:"getUrl",value:function(){var e=Object.getOwnPropertyNames(this.parameters),t=Object.values(this.parameters);return["https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson",e=e.map(function(e,a){return"".concat(e,"=").concat(t[a])})].flat().join("&")}}]),e}();function O(e){return e*Math.PI/180}var b=function(e,t,a,n){var o=O(a-e),r=O(n-t);e=O(e),a=O(a);var c=Math.sin(o/2)*Math.sin(o/2)+Math.sin(r/2)*Math.sin(r/2)*Math.cos(e)*Math.cos(a);return 6371*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))},D=function(e){return w.filter(function(t){return t.minValue<=e&&t.maxValue>e})},T=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?"rgba(".concat(parseInt(t[1],16),",").concat(parseInt(t[2],16),",").concat(parseInt(t[3],16),",0.4)"):null},w=[{minValue:0,maxValue:2,color:"#4A7BA7"},{minValue:2,maxValue:3,color:"#04B4B3"},{minValue:3,maxValue:4,color:"#10CAC9"},{minValue:4,maxValue:5,color:"#F5A623"},{minValue:5,maxValue:6,color:"#FF7D50"},{minValue:6,maxValue:7,color:"#FC6644"},{minValue:7,maxValue:8,color:"#E75F40"},{minValue:8,maxValue:9,color:"#E13A20"},{minValue:9,maxValue:10,color:"#D93218"},{minValue:10,maxValue:20,color:"#C03823"}],k=a(28),A=a.n(k),_=a(29),C=a.n(_);var x=function(e){var t=e.quake,a=t.properties,r=t.geometry,c=Object(n.useContext)(f),l=c.dispatch,i=c.currLocation,u=c.viewport,m=new Date(t.properties.time);return a.mag>=0&&o.a.createElement("li",{id:t.id},o.a.createElement("div",{className:"myGrid"},o.a.createElement("div",{className:"magnitude-container",style:{backgroundColor:D(a.mag)[0]?T(D(a.mag)[0].color):"#333"}},o.a.createElement("div",{className:"magnitude-circle",style:{backgroundColor:D(a.mag)[0]?D(a.mag)[0].color:"#333"}},o.a.createElement("div",{className:"magnitude"},a.mag))),o.a.createElement("div",{style:{margin:"1em",marginBottom:"0.5em"}},o.a.createElement("div",{className:"title"},a.place),o.a.createElement("div",{className:"time"},m.toLocaleString("el-GR")," "),o.a.createElement("div",{className:"distance"},o.a.createElement("span",null,null!=e.currLocation?"".concat(b(r.coordinates[1],r.coordinates[0],i.latitude,i.longitude).toFixed(0)," km from your location"):"- km from your locaiton"),o.a.createElement("img",{alt:"location-icon",className:"locationIcon",src:A.a,width:"18px",height:"18px"})),o.a.createElement("hr",null),o.a.createElement(C.a,{style:{color:D(a.mag)[0].color},onClick:function(e){return l({type:"UPDATED_SELECTED_QUAKE",payload:a=t}),void l({type:"UPDATED_VIEWPORT",payload:Object(s.a)({},u,{longitude:a.geometry.coordinates[0],latitude:a.geometry.coordinates[1],zoom:10})});var a},children:"no children",className:""},"Pin Location"))))};var j=function(e){var t=Object(n.useContext)(f),a=t.quakes,r=t.downloadingData;return o.a.createElement("ul",{className:"quakelist"},r?"loading":a.map(function(e){return o.a.createElement(x,{key:e.id,quake:e})}))},N=o.a.createContext({dispatch:function(){},viewport:{},setFetchedData:function(){},downloadingData:null});var L=Object(i.d)(function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),r=a[0],c=a[1],l=Object(n.useContext)(N),i=l.dispatch,u=l.queryObject,s=o.a.createRef(),d=o.a.createRef();return Object(n.useEffect)(function(){d.current.value=u.place_name||""},[]),o.a.createElement(E.Row,null,o.a.createElement(E.Col,{xsOffset:2,sm:10,smOffset:1,mdOffset:9,md:3,xs:8},o.a.createElement("div",{id:"search-container",className:"search-bar-container"},o.a.createElement("input",{ref:d,id:"search-field",onFocus:function(e){s.current.style.opacity="1"},onBlur:function(e){s.current.style.opacity="0"},type:"search",onInput:function(e){return function(e){g(30),""!==e.target.value?fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(e.target.value,".json?&types=country,region&access_token=").concat("pk.eyJ1IjoiZWxlZmNvZGVzIiwiYSI6ImNqdnoyemtnaTBjaGo0OG1uMmVhZWlkdzkifQ.I0WGnZdw3YHylb86dAPk3Q")).then(function(e){return e.json()}).then(function(e){c(e.features)}):c([])}(e)},placeholder:"Search something"}),o.a.createElement("div",{id:"search-bar-suggestion",ref:s,className:"search-bar-suggestions"},r.map(function(t){return o.a.createElement("div",{onClick:function(a){return function(t,a){c([]),t.target.parentElement.previousSibling.value=a.matching_place_name||a.place_name,e.history.push("?&place_name=".concat(a.matching_place_name||a.place_name,"&mnlat=").concat(a.bbox[1],"&mnlon=").concat(a.bbox[0],"&mxlat=").concat(a.bbox[3],"&mxlon=").concat(a.bbox[2],"&clon=").concat(a.center[0],"&clat=").concat(a.center[1])),i({type:"UPDATED_SELECTED_REGION",payload:a})}(a,t)},key:t.id,id:t.id},t.matching_place_name||t.place_name)})))))}),I=function(e){var t=e.dispatch,a=e.viewport,r=e.toasts,c=Object(n.useState)(!1),l=Object(m.a)(c,2),i=l[0],d=l[1],p=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){document.getElementById("locationText").style.display="none",t({type:"UPDATED_USER_LOCATION",payload:e.coords}),t({type:"UPDATED_VIEWPORT",payload:Object(s.a)({},a,{latitude:e.coords.latitude,longitude:e.coords.longitude,zoom:7})})},function(e){var a;switch(e.code){case e.PERMISSION_DENIED:a="User denied the request for Geolocation.";break;case e.POSITION_UNAVAILABLE:a="Location information is unavailable.";break;case e.TIMEOUT:a="The request to get user location timed out.";break;case e.UNKNOWN_ERROR:default:a="An unknown error occurred."}t({type:"UPDATED_TOAST_STACK",payload:[].concat(Object(u.a)(r),[{timestamp:new Date,type:"toast",value:a}])}),document.getElementById("locationText").style.display="none"}):t({type:"UPDATED_TOAST_STACK",payload:[].concat(Object(u.a)(r),[{timestamp:new Date,type:"toast",value:"Geolocation is not supported"}])})};return o.a.createElement("div",{onClick:function(e){i?(d(!1),document.getElementsByClassName("location-icon")[0].children[0].setAttribute("fill","#c3c3c3"),t({type:"UPDATED_USER_LOCATION",payload:null})):(d(!0),document.getElementById("locationText").style.display="inline",document.getElementsByClassName("location-icon")[0].children[0].setAttribute("fill","#35B4F6"),p())},className:"user-location"},o.a.createElement("div",null,"Use my Location"," ",o.a.createElement("span",{id:"locationText",className:"loading"},"loading...")," "),o.a.createElement("svg",{className:"location-icon",style:{width:"20px",height:"20px"},viewBox:"0 0 20 20"},o.a.createElement("path",{fill:"#c3c3c3",d:"M10,6.36363636 C12.0083082,6.36363636 13.6363636,7.99169182 13.6363636,10 C13.6363636,12.0083082 12.0083082,13.6363636 10,13.6363636 C7.99169182,13.6363636 6.36363636,12.0083082 6.36363636,10 C6.36363636,7.99169182 7.99169182,6.36363636 10,6.36363636 Z M1.86363636,10.9090909 L0,10.9090909 L0,9.09090909 L1.86363636,9.09090909 C2.27272727,5.3 5.3,2.27272727 9.09090909,1.86363636 L9.09090909,0 L10.9090909,0 L10.9090909,1.86363636 C14.7,2.27272727 17.7272727,5.3 18.1363636,9.09090909 L20,9.09090909 L20,10.9090909 L18.1363636,10.9090909 C17.7272727,14.7 14.7,17.7272727 10.9090909,18.1363636 L10.9090909,20 L9.09090909,20 L9.09090909,18.1363636 C5.3,17.7272727 2.27272727,14.7 1.86363636,10.9090909 Z M10,3.63636364 C6.48546068,3.63636364 3.63636364,6.48546068 3.63636364,10 C3.63636364,13.5145393 6.48546068,16.3636364 10,16.3636364 C13.5145393,16.3636364 16.3636364,13.5145393 16.3636364,10 C16.3636364,6.48546068 13.5145393,3.63636364 10,3.63636364 Z",id:"Shape"}),"/>"))},U={currLocation:null,viewport:{latitude:45.4221,longitude:-75.6903,width:"100%",height:"100vh",zoom:2},fetchedData:[],selectedQuake:null,selectedRegion:null,toasts:[],downloadingData:!1,queryObject:{}},S="UPDATED_VIEWPORT",P="UPDATED_SELECTED_QUAKE",q="UPDATED_SELECTED_REGION",V="UPDATED_USER_LOCATION",R="UPDATED_TOAST_STACK",G="TOGGLE_DATA_DOWNLOADING",W="UPDATED_QUERY_OBJECT",B=function(e,t){switch(console.log("Action",t.type,t.payload),console.log("State",e),t.type){case S:return Object(s.a)({},e,{viewport:t.payload});case P:return Object(s.a)({},e,{selectedQuake:t.payload});case q:return Object(s.a)({},e,{selectedRegion:t.payload});case V:return Object(s.a)({},e,{currLocation:t.payload});case R:return Object(s.a)({},e,{toasts:t.payload});case G:return Object(s.a)({},e,{downloadingData:t.payload});case W:return Object(s.a)({},e,{queryObject:t.payload});default:return Object(s.a)({},e)}};var M=function(e){var t=e.dispatch,a=e.toasts;return o.a.createElement("ul",{className:"toast-stack"},a.map(function(e,n){return n===a.length-1?o.a.createElement("li",{key:e.timestamp,onAnimationEndCapture:function(){return t({type:"UPDATED_TOAST_STACK",payload:[]})},className:"animated-item"},e.value):o.a.createElement("li",{key:e.timestamp,className:"animated-item"},e.value)}))};var Q=function(){return o.a.createElement("div",{className:"offline-popup"},o.a.createElement("div",{className:"offline-popup-wrapper"},o.a.createElement("div",null,"No internet connection"),o.a.createElement("div",{className:"offline-popup-button",onClick:function(){return window.location.reload()}},"Reload")))};a(54),a(55),a(56);var Z=function(e){var t=Object(n.useReducer)(B,U),a=Object(m.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)([]),i=Object(m.a)(l,2),y=i[0],h=i[1],O=Object(n.useState)(!1),b=Object(m.a)(O,2),T=b[0],w=b[1];setInterval(function(){navigator.onLine?w(!1):w(!0)},5e3),Object(n.useEffect)(function(){var t=new URLSearchParams(e.location.search),a={},n=!0,o=!1,r=void 0;try{for(var l,i=t.keys()[Symbol.iterator]();!(n=(l=i.next()).done);n=!0){var u=l.value;a[u]=t.get(u),console.log(u,t.get(u))}}catch(s){o=!0,r=s}finally{try{n||null==i.return||i.return()}finally{if(o)throw r}}console.log(a),0===Object.entries(a).length&&a.constructor===Object||k(a),c({type:"UPDATED_QUERY_OBJECT",payload:a})},[e.location]);var k=function(e){var t=new v({starttime:g(30),minlatitude:e.mnlat,minlongitude:e.mnlon,maxlatitude:e.mxlat,maxlongitude:e.mxlon,limit:50,orderby:"time"});c({type:"TOGGLE_DATA_DOWNLOADING",payload:!0}),c({type:"UPDATED_VIEWPORT",payload:Object(s.a)({},r.viewport,{longitude:+e.clon+4,latitude:+e.clat,zoom:6})}),fetch(t.getUrl()).then(function(e){return e.json()}).then(function(e){0===e.features.length&&c({type:"UPDATED_TOAST_STACK",payload:[].concat(Object(u.a)(r.toasts),[{timestamp:new Date,type:"toast",value:"No earthquakes found"}])}),h(e.features),c({type:"TOGGLE_DATA_DOWNLOADING",payload:!1})}).catch(function(e){return console.error(e)})};return o.a.createElement(E.Grid,{fluid:!0},o.a.createElement(d.e,{latitude:r.viewport.latitude,longitude:r.viewport.longitude,zoom:r.viewport.zoom,style:{width:"100%",height:"100vh"},accessToken:"pk.eyJ1IjoiZWxlZmNvZGVzIiwiYSI6ImNqdnoyemtnaTBjaGo0OG1uMmVhZWlkdzkifQ.I0WGnZdw3YHylb86dAPk3Q",mapStyle:"mapbox://styles/elefcodes/cjvz1805a00cq1clmiekbyx1p",onViewportChange:function(e){c({type:"UPDATED_VIEWPORT",payload:e})}},null!=r.currLocation?o.a.createElement(d.b,{latitude:r.currLocation.latitude,longitude:r.currLocation.longitude},o.a.createElement("div",{className:"marker-btn mylocation"})):null,o.a.createElement(p.a,{raduis:40,extent:512,nodeSize:64,component:function(e){var t=e.longitude,a=e.latitude,n=e.pointCount;return o.a.createElement(d.b,{longitude:t,latitude:a},o.a.createElement("div",{className:"cluster-marker"},n))}},y.map(function(e){return o.a.createElement(d.b,{key:e.id,latitude:e.geometry.coordinates[1],longitude:e.geometry.coordinates[0]},o.a.createElement("div",{className:"marker-btn",style:{backgroundColor:D(e.properties.mag)[0]?D(e.properties.mag)[0].color:"#333"},onClick:function(t){t.preventDefault(),c({type:"UPDATED_SELECTED_QUAKE",payload:e})}}))})),r.selectedQuake&&o.a.createElement(d.d,{latitude:r.selectedQuake.geometry.coordinates[1],longitude:r.selectedQuake.geometry.coordinates[0],onClose:function(){c({type:"UPDATED_SELECTED_QUAKE",payload:null})}},o.a.createElement("div",null,r.selectedQuake.properties.title)),o.a.createElement(d.c,{showCompass:!0,showZoom:!0,position:"bottom-left"}),T&&o.a.createElement(E.Row,null,o.a.createElement(E.Col,{xs:12},o.a.createElement(Q,null))),o.a.createElement(E.Row,null,o.a.createElement(E.Col,{xsOffset:0,xs:12,md:9,smOffset:1,mdOffset:0,sm:10},o.a.createElement(N.Provider,{value:{dispatch:c,queryObject:r.queryObject}},o.a.createElement(L,null)),o.a.createElement(M,{dispatch:c,toasts:r.toasts})),o.a.createElement(E.Col,{xsOffset:1,xs:10,mdOffset:0,md:3,smOffset:2,sm:8},o.a.createElement("div",{className:"mobile-view"},o.a.createElement(I,{dispatch:c,viewport:r.viewport,toasts:r.toasts}),o.a.createElement(f.Provider,{value:{dispatch:c,viewport:r.viewport,currLocation:r.currLocation,quakes:y,downloadingData:r.downloadingData}},o.a.createElement(j,null)))))))},z=a(32),F=a(22),K=a.n(F);var Y=function(){return o.a.createElement(z.Helmet,null,o.a.createElement("title",null,"Earthquakes from All Over The Wolrd"),o.a.createElement("meta",{name:"title",content:"Earthquakes from All Over The Wolrd"}),o.a.createElement("meta",{name:"description",content:"Search for the most recent earthquakes all over the earth. Use your location to check if an earthquake occurred nearby you."}),o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"og:url",content:"https://panteliselef.github.io/react-earthquake-app/"}),o.a.createElement("meta",{property:"og:title",content:"Earthquakes from All Over The Wolrd"}),o.a.createElement("meta",{property:"og:description",content:"Search for the most recent earthquakes all over the earth. Use your location to check if an earthquake occurred nearby you."}),o.a.createElement("meta",{property:"og:image",content:K.a}),o.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{property:"twitter:url",content:"https://panteliselef.github.io/react-earthquake-app/"}),o.a.createElement("meta",{property:"twitter:title",content:"Earthquakes from All Over The Wolrd"}),o.a.createElement("meta",{property:"twitter:description",content:"Search for the most recent earthquakes all over the earth. Use your location to check if an earthquake occurred nearby you."}),o.a.createElement("meta",{property:"twitter:image",content:K.a}))};var J=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(Y,null),o.a.createElement(l.a,null,o.a.createElement(i.a,{path:"/",component:Z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.5eefd280.chunk.js.map