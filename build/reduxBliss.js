!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";(function(e,r){var o,i=n(1);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var a=Object(i.a)(o);t.a=a}).call(this,n(2),n(3)(e))},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function a(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function u(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}let c=document.getElementById("input"),d=document.getElementById("addEmail"),s=document.getElementById("list"),f=document.getElementById("emailList"),l={0:{text:"Ir al cine",done:!1},1:{text:"Cenar",done:!0},2:{text:"Grabar",done:!1}};function p(){f.innerHTML="",b.getState().emails.map(e=>{let t=document.createElement("li");t.innerHTML=`\n      <span>${e}</span>\n      <span id=${e}>X</span>\n    `,function(e){e.addEventListener("click",e=>{let t=e.target.id;b.dispatch({type:"DELETE_EMAIL",email:t})})}(t),f.appendChild(t)})}function y(){s.innerHTML="",l=b.getState().todos;for(let e in l){let t=document.createElement("li"),n=l[e].done?"done":"";t.innerHTML=`\n      <span id="${e}" class="${n}">${l[e].text}</span>\n      <span data-id="${e}" data-action="delete" >X</span>\n    `,h(t),s.appendChild(t)}}function h(e){e.addEventListener("click",e=>{if("delete"===e.target.getAttribute("data-action")){let t=e.target.getAttribute("data-id");return void b.dispatch({type:"DELETE_TODO",id:t})}let t=e.target.id;l[t].done=!l[t].done,b.dispatch({type:"UPDATE_TODO",todo:l[t]})})}c.addEventListener("keydown",e=>{if("Enter"===e.key){let t={text:e.target.value,done:!1};e.target.value="",b.dispatch({type:"ADD_TODO",todo:t})}}),d.addEventListener("keydown",e=>{if("Enter"===e.key){let t=e.target.value;e.target.value="",b.dispatch({type:"ADD_EMAIL",email:t})}});let b=function e(t,n,o){var u;if("function"==typeof n&&"function"==typeof o||"function"==typeof o&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof n&&void 0===o&&(o=n,n=void 0),void 0!==o){if("function"!=typeof o)throw new Error("Expected the enhancer to be a function.");return o(e)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var c=t,d=n,s=[],f=s,l=!1;function p(){f===s&&(f=s.slice())}function y(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return d}function h(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return p(),f.push(e),function(){if(t){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,p();var n=f.indexOf(e);f.splice(n,1),s=null}}}function b(e){if(!a(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,d=c(d,e)}finally{l=!1}for(var t=s=f,n=0;n<t.length;n++){(0,t[n])()}return e}function v(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,b({type:i.REPLACE})}function m(){var e,t=h;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(y())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e}return b({type:i.INIT}),(u={dispatch:b,subscribe:h,getState:y,replaceReducer:v})[r.a]=m,u}(function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"==typeof e[o]&&(n[o]=e[o])}var a,c=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(e){a=e}return function(e,t){if(void 0===e&&(e={}),a)throw a;for(var r=!1,o={},i=0;i<c.length;i++){var d=c[i],s=n[d],f=e[d],l=s(f,t);if(void 0===l){var p=u(d,t);throw new Error(p)}o[d]=l,r=r||l!==f}return(r=r||c.length!==Object.keys(e).length)?o:e}}({todos:function(e={},t){switch(t.type){case"ADD_TODO":return t.todo.id=Object.keys(e).length,{...e,[Object.keys(e).length]:t.todo};case"UPDATE_TODO":return{...e,[t.todo.id]:t.todo};case"DELETE_TODO":return delete e[t.id],{...e};default:return e}},emails:function(e=[],t){switch(t.type){case"ADD_EMAIL":return[t.email,...e];case"DELETE_EMAIL":return[...e.filter(e=>e!==t.email)];default:return e}}}),{emails:["arty1498@hotmail.com"],todos:{0:{text:"Crear store",done:!0,id:0}}});b.subscribe(()=>{y(),p()}),y(),p()}]);