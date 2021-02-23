(()=>{"use strict";var n,e,t,r={426:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,'*{\n    box-sizing: border-box;\n}\n\nhtml{\n    margin: 0;\n    height: 95vh;\n}\n\nbody{\n    font-family: Arial;\n    background: #9BA49A;\n    margin: 0;\n    height: 95vh;\n}\n\n/* Clear floats after the columns */\n.row:after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n\n\n.listMenu{\n    float:left;\n    width: 25%;\n    background-color: #EEEEEB;\n    height: 95vh;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    padding: 20px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\n.newProject, .newTask{\n    color: #fff;\n    background-color: #283227;\n    font-size: 38px!important;\n    border: none;\n    display: inline-block;\n    padding: 16px 24px;\n    vertical-align: middle;\n    overflow: hidden;\n    text-decoration: none;\n    text-align: center;\n    cursor: pointer;\n    white-space: nowrap;\n    border-radius: 50%;\n    align-self: center;\n    margin-top: 50px;\n}\n\n.newProject:hover{\n    background-color: gray;\n    color: #283227;\n}\n\n.clickRipple{\n    transition: opacity 0s;\n    transition-property: opacity;\n    transition-duration: 0s;\n    transition-timing-function: ease;\n    transition-delay: 0s;\n}\n\n.clickRipple:active{\n    opacity: 0.5;\n}\n\n.listContainer{\n    display: flex;\n    flex-direction: column;\n    height: 550px;\n}\n\n.listItem{\n    border: none;\n    padding: 8px 16px;\n    overflow: hidden;\n    color: black;\n    background-color: #879388;\n    text-align: center;\n    cursor: pointer;\n    white-space: nowrap;\n    border-radius: 4px;\n    margin: 10px;\n}\n\n\n.listItem:hover{\n    background-color: gray;\n    color: #283227;\n}\n\n.taskMenu{\n    float: right;\n    width: 74%;\n    background-color: #EEEEEB;\n    height: 95vh;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    padding: 20px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\n.taskContainer{\n    border-color: black;\n    border-style: solid;\n    height: 550px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.tasks{\n    /* border-color: #879388; \n    border-style: solid; */\n    margin-top: 50px;\n    text-align: left;\n    width: 50vw;\n}\n\n.task{\n    margin-top: 10px;\n}\n\n.checkboxContainer{\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.checkboxContainer input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n\n  .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #879388;\n  }\n\n  .checkboxContainer:hover input ~ .checkmark {\n    background-color: #ccc;\n  }\n\n  .checkboxContainer input:checked ~ .checkmark {\n    background-color: #283227;\n  }\n\n  .checkmark:after {\n    content: "";\n    position: absolute;\n    display: none;\n  }\n\n  /* Show the checkmark when checked */\n.checkboxContainer input:checked ~ .checkmark:after {\n    display: block;\n  }\n  \n  /* Style the checkmark/indicator */\n  .checkboxContainer .checkmark:after {\n    left: 9px;\n    top: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n',""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var c=n[o],l=e.base?c[0]+e.base:c[0],s=t[l]||0,d="".concat(l," ").concat(s);t[l]=s+1;var p=a(d),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:d,updater:m(u,e),references:1}),r.push(d)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,d=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function u(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,h=0;function m(n,e){var t,r,o;if(e.singleton){var i=h++;t=f||(f=l(e)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=l(e),r=u.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var l=c(n,e),s=0;s<t.length;s++){var d=a(t[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=l}}}}},o={};function i(n){if(o[n])return o[n].exports;var e=o[n]={id:n,exports:{}};return r[n](e,e.exports,i),e.exports}i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n=i(379),e=i.n(n),t=i(426),e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals})();