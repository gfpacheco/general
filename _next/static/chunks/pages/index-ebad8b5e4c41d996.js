(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var u in r)n.call(r,u)&&r[u]&&e.push(u);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},7145:function(e,t,r){"use strict";var n=r(3454);function o(e){return"object"!==typeof e||"toString"in e?e:Object.prototype.toString.call(e).slice(8,-1)}Object.defineProperty(t,"__esModule",{value:!0});var a="object"===typeof n&&!0;function i(e,t){if(!e){if(a)throw new Error("Invariant failed");throw new Error(t())}}t.invariant=i;var u=Object.prototype.hasOwnProperty,l=Array.prototype.splice,c=Object.prototype.toString;function s(e){return c.call(e).slice(8,-1)}var f=Object.assign||function(e,t){return p(t).forEach((function(r){u.call(t,r)&&(e[r]=t[r])})),e},p="function"===typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function d(e){return Array.isArray(e)?f(e.constructor(e.length),e):"Map"===s(e)?new Map(e):"Set"===s(e)?new Set(e):e&&"object"===typeof e?f(Object.create(Object.getPrototypeOf(e)),e):e}var y=function(){function e(){this.commands=f({},b),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(e,t){return e===t},this.update.newContext=function(){return(new e).update}}return Object.defineProperty(e.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(e){this.update.isEquals=e},enumerable:!0,configurable:!0}),e.prototype.extend=function(e,t){this.commands[e]=t},e.prototype.update=function(e,t){var r=this,n="function"===typeof t?{$apply:t}:t;Array.isArray(e)&&Array.isArray(n)||i(!Array.isArray(n),(function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."})),i("object"===typeof n&&null!==n,(function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(r.commands).join(", ")+"."}));var o=e;return p(n).forEach((function(t){if(u.call(r.commands,t)){var a=e===o;o=r.commands[t](n[t],o,n,e),a&&r.isEquals(o,e)&&(o=e)}else{var i="Map"===s(e)?r.update(e.get(t),n[t]):r.update(e[t],n[t]),l="Map"===s(o)?o.get(t):o[t];r.isEquals(i,l)&&("undefined"!==typeof i||u.call(e,t))||(o===e&&(o=d(e)),"Map"===s(o)?o.set(t,i):o[t]=i)}})),o},e}();t.Context=y;var b={$push:function(e,t,r){return h(t,r,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,r){return h(t,r,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,r,n){return function(e,t){i(Array.isArray(e),(function(){return"Expected $splice target to be an array; got "+o(e)})),g(t.$splice)}(t,r),e.forEach((function(e){g(e),t===n&&e.length&&(t=d(n)),l.apply(t,e)})),t},$set:function(e,t,r){return function(e){i(1===Object.keys(e).length,(function(){return"Cannot have more than one key in an object with $set"}))}(r),e},$toggle:function(e,t){v(e,"$toggle");var r=e.length?d(t):t;return e.forEach((function(e){r[e]=!t[e]})),r},$unset:function(e,t,r,n){return v(e,"$unset"),e.forEach((function(e){Object.hasOwnProperty.call(t,e)&&(t===n&&(t=d(n)),delete t[e])})),t},$add:function(e,t,r,n){return j(t,"$add"),v(e,"$add"),"Map"===s(t)?e.forEach((function(e){var r=e[0],o=e[1];t===n&&t.get(r)!==o&&(t=d(n)),t.set(r,o)})):e.forEach((function(e){t!==n||t.has(e)||(t=d(n)),t.add(e)})),t},$remove:function(e,t,r,n){return j(t,"$remove"),v(e,"$remove"),e.forEach((function(e){t===n&&t.has(e)&&(t=d(n)),t.delete(e)})),t},$merge:function(e,t,r,n){var a,u;return a=t,i((u=e)&&"object"===typeof u,(function(){return"update(): $merge expects a spec of type 'object'; got "+o(u)})),i(a&&"object"===typeof a,(function(){return"update(): $merge expects a target of type 'object'; got "+o(a)})),p(e).forEach((function(r){e[r]!==t[r]&&(t===n&&(t=d(n)),t[r]=e[r])})),t},$apply:function(e,t){var r;return i("function"===typeof(r=e),(function(){return"update(): expected spec of $apply to be a function; got "+o(r)+"."})),e(t)}},m=new y;function h(e,t,r){i(Array.isArray(e),(function(){return"update(): expected target of "+o(r)+" to be an array; got "+o(e)+"."})),v(t[r],r)}function v(e,t){i(Array.isArray(e),(function(){return"update(): expected spec of "+o(t)+" to be an array; got "+o(e)+". Did you forget to wrap your parameter in an array?"}))}function g(e){i(Array.isArray(e),(function(){return"update(): expected spec of $splice to be an array of arrays; got "+o(e)+". Did you forget to wrap your parameters in an array?"}))}function j(e,t){var r=s(e);i("Map"===r||"Set"===r,(function(){return"update(): "+o(t)+" expects a target of type Set or Map; got "+o(r)}))}t.isEquals=m.update.isEquals,t.extend=m.extend,t.default=m.update,t.default.default=e.exports=f(t.default,t)},3454:function(e,t,r){"use strict";var n,o;e.exports=(null===(n=r.g.process)||void 0===n?void 0:n.env)&&"object"===typeof(null===(o=r.g.process)||void 0===o?void 0:o.env)?r.g.process:r(7663)},8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9266)}])},9266:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ve}});var n,o=r(5893),a=r(4184),u=r.n(a),l=r(7294),c=r(3809),s=r(7145),f=r.n(s);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"===typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}!function(e){e.one="one",e.two="two",e.three="three",e.four="four",e.five="five",e.six="six"}(n||(n={}));var h,v=Object.keys(n);!function(e){e.threeOfAKind="threeOfAKind",e.fourOfAKind="fourOfAKind",e.fullHouse="fullHouse",e.smallStraight="smallStraight",e.largeStraight="largeStraight",e.general="general",e.chance="chance"}(h||(h={}));var g,j=Object.keys(h),O=(d(g={},n.one,"Um"),d(g,n.two,"Dois"),d(g,n.three,"Tr\xeas"),d(g,n.four,"Quatro"),d(g,n.five,"Cinco"),d(g,n.six,"Seis"),d(g,h.threeOfAKind,"Trinca"),d(g,h.fourOfAKind,"Quadra"),d(g,h.fullHouse,"Full House"),d(g,h.smallStraight,"Sequ\xeancia menor"),d(g,h.largeStraight,"Sequ\xeancia maior"),d(g,h.general,"General"),d(g,h.chance,"Chance"),g),x=b(v).concat(b(j));function w(){return{value:Math.floor(6*Math.random())+1,locked:!1}}function S(e,t){var r=function(e){var t=[0,0,0,0,0,0];return e.forEach((function(e){t[e.value-1]+=1})),t}(t);switch(e){case n.one:return 1*t.filter((function(e){return 1===e.value})).length;case n.two:return 2*t.filter((function(e){return 2===e.value})).length;case n.three:return 3*t.filter((function(e){return 3===e.value})).length;case n.four:return 4*t.filter((function(e){return 4===e.value})).length;case n.five:return 5*t.filter((function(e){return 5===e.value})).length;case n.six:return 6*t.filter((function(e){return 6===e.value})).length;case h.threeOfAKind:return r.some((function(e){return e>=3}))?t.reduce((function(e,t){return e+t.value}),0):0;case h.fourOfAKind:return r.some((function(e){return e>=4}))?t.reduce((function(e,t){return e+t.value}),0):0;case h.fullHouse:return r.some((function(e){return 3===e}))&&r.some((function(e){return 2===e}))?25:0;case h.smallStraight:return[1,1,1,1,1,0].every((function(e,t){return r[t]===e}))?30:0;case h.largeStraight:return[0,1,1,1,1,1].every((function(e,t){return r[t]===e}))?40:0;case h.general:return r.some((function(e){return 5===e}))?50:0;case h.chance:return t.reduce((function(e,t){return e+t.value}),0);default:return 0}}function P(e,t){var r=Object.entries(e);return t&&(r=r.filter((function(e){return y(e,1)[0]in t}))),r.reduce((function(e,t){var r=y(t,2);r[0];return e+r[1]}),0)}function A(e){return e>=63?35:0}function N(e,t){if(e){var r;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}({},e,{rollDice:function(){var r=e.dice.length?e.dice.map((function(e){return e.locked?e:w()})):[w(),w(),w(),w(),w()];t(f()(e,{currentRoll:{$set:e.currentRoll+1},dice:{$set:r}}))},toggleDieLock:function(r){t(f()(e,{dice:d({},r,{locked:{$set:!e.dice[r].locked}})}))},choosePlayType:function(r){var o=f()(e.playersState[e.currentPlayer].plays,d({},r,{$set:S(r,e.dice)}));t(f()(e,{playersState:d({},e.currentPlayer,{plays:{$set:o},bonus:{$set:A(P(o,n))}}),currentPlayer:{$set:(e.currentPlayer+1)%e.playersState.length},currentRoll:{$set:0},dice:{$set:[]}}))},canRollDice:e.currentRoll<3,plays:(r={},d(r,n.one,S(n.one,e.dice)),d(r,n.two,S(n.two,e.dice)),d(r,n.three,S(n.three,e.dice)),d(r,n.four,S(n.four,e.dice)),d(r,n.five,S(n.five,e.dice)),d(r,n.six,S(n.six,e.dice)),d(r,h.threeOfAKind,S(h.threeOfAKind,e.dice)),d(r,h.fourOfAKind,S(h.fourOfAKind,e.dice)),d(r,h.fullHouse,S(h.fullHouse,e.dice)),d(r,h.smallStraight,S(h.smallStraight,e.dice)),d(r,h.largeStraight,S(h.largeStraight,e.dice)),d(r,h.general,S(h.general,e.dice)),d(r,h.chance,S(h.chance,e.dice)),r)})}}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function $(e){var t=e.className,r=e.type,n=void 0===r?"button":r,a=e.disabled,i=k(e,["className","type","disabled"]);return(0,o.jsx)("button",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){E(e,t,r[t])}))}return e}({className:u()(t,"rounded bg-gray-700 px-4 py-2 text-white font-bold",a&&"opacity-30"),type:n,disabled:a},i))}function T(e,t){var r=(0,l.useState)(null===t||void 0===t?void 0:t.value),n=r[0],o=r[1],a=(0,l.useRef)();return(0,l.useEffect)((function(){var e;null===(e=a.current)||void 0===e||e.call(a),t?t.locked||(a.current=function(e,t,r){var n=Date.now(),o=1/r,a=1,i=!1;return function r(){if(!i){var u=(Date.now()-n)/t,l=1-Math.pow(1-u,2);u>=1?e(1):(l/o>a&&(a=Math.ceil(l/o),e(l)),requestAnimationFrame(r))}}(),function(){i=!0}}((function(e){o(1===e?t.value:Math.floor(6*Math.random())+1)}),1e3*Math.random()+500,10)):o(void 0)}),[e]),n}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function M(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function R(e){var t=e.className,r=e.visibleFor,n=e.value,a=M(e,["className","visibleFor","value"]);return(0,o.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){I(e,t,r[t])}))}return e}({className:u()(t,"w-2/3 h-2/3 rounded-full",n&&(null===r||void 0===r?void 0:r.includes(n))&&"bg-gray-700")},a))}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function C(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function G(e){var t=e.className,r=e.currentRoll,n=e.die,a=C(e,["className","currentRoll","die"]),i=T(r,n);return(0,o.jsxs)("button",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){D(e,t,r[t])}))}return e}({className:u()(t,"relative flex-1 border rounded-lg p-2 grid grid-cols-3 grid-rows-3 items-center justify-items-center aspect-square",(null===n||void 0===n?void 0:n.locked)&&"bg-gray-300")},a,{children:[(0,o.jsx)(R,{value:i,visibleFor:[2,3,4,5,6]}),(0,o.jsx)(R,{}),(0,o.jsx)(R,{value:i,visibleFor:[4,5,6]}),(0,o.jsx)(R,{value:i,visibleFor:[6]}),(0,o.jsx)(R,{value:i,visibleFor:[1,3,5]}),(0,o.jsx)(R,{value:i,visibleFor:[6]}),(0,o.jsx)(R,{value:i,visibleFor:[4,5,6]}),(0,o.jsx)(R,{}),(0,o.jsx)(R,{value:i,visibleFor:[2,3,4,5,6]}),(null===n||void 0===n?void 0:n.locked)&&(0,o.jsx)("svg",{className:"absolute w-1/2 h-1/2 opacity-30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{d:"M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10 0v-4c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-8z"})})]}))}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function q(e){var t=e.className,r=e.label,n=e.score,a=e.selected,i=e.disabled,l=_(e,["className","label","score","selected","disabled"]);return(0,o.jsxs)("button",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){F(e,t,r[t])}))}return e}({type:"button",className:u()(t,"px-4 py-1 border rounded flex text-left",a&&"bg-blue-200",i&&"bg-gray-200"),disabled:i},l,{children:[(0,o.jsx)("div",{className:"flex-1",children:r}),(0,o.jsx)("div",{className:"font-bold",children:n})]}))}function K(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function z(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function L(e){var t=function(e){return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:O[e]}),i.map((function(t,r){return(0,o.jsx)("td",{className:"text-center",children:t.plays[e]},r)}))]},e)},r=function(e,t){return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{className:"font-bold",children:e}),t.map((function(e,t){return(0,o.jsx)("td",{className:"text-center font-bold",children:e},t)}))]})},a=e.className,i=e.playersState,l=z(e,["className","playersState"]);return(0,o.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){K(e,t,r[t])}))}return e}({className:u()(a,"border rounded px-2 overflow-y-auto")},l,{children:(0,o.jsxs)("table",{className:"w-full",children:[(0,o.jsx)("thead",{className:"border-b",children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{className:"text-center"}),i.map((function(e,t){return(0,o.jsx)("th",{className:"text-center",children:e.name},t)}))]})}),(0,o.jsxs)("tbody",{children:[v.map(t),r("Subtotal",i.map((function(e){return P(e.plays,n)}))),r("B\xf4nus",i.map((function(e){return e.bonus}))),j.map(t),r("Subtotal",i.map((function(e){return P(e.plays,h)}))),r("Total",i.map((function(e){return P(e.plays)+e.bonus})))]})]})}))}function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function B(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function U(e){var t=e.className,r=e.label,n=e.score,a=B(e,["className","label","score"]);return(0,o.jsxs)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){H(e,t,r[t])}))}return e}({className:u()(t,"px-4 py-1 flex text-left")},a,{children:[(0,o.jsx)("div",{className:"flex-1",children:r}),(0,o.jsx)("div",{className:"font-bold",children:n})]}))}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Q(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return J(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return J(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e){var t,r=function(e){var t;return(0,o.jsx)(q,{label:O[e],score:null!==(t=S.plays[e])&&void 0!==t?t:i.plays[e],onClick:function(){return b(e)},selected:e===y,disabled:void 0!==S.plays[e]},e)},a=e.className,i=e.gameState,s=e.endGame,f=e.restartGame,p=Q(e,["className","gameState","endGame","restartGame"]),d=(0,l.useState)(),y=d[0],b=d[1],m=X((0,c.Z)(!1),2),g=m[0],w=m[1],S=i.playersState[i.currentPlayer],N=P(S.plays,n),E=S.bonus;y&&y in n&&(E=A(N+=null!==(t=i.plays[y])&&void 0!==t?t:0));var k,T=P(S.plays,h);y&&y in h&&(T+=null!==(k=i.plays[y])&&void 0!==k?k:0);return(0,l.useEffect)((function(){i.playersState.every((function(e){return Object.keys(e.plays).length===x.length}))&&s(i.playersState)}),[i.playersState,s]),(0,o.jsxs)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Z(e,t,r[t])}))}return e}({className:u()(a,"relative min-h-0 grid grid-flow-row gap-4")},p,{children:[(0,o.jsxs)("h1",{className:"relative text-lg text-center font-bold",children:[S.name,(0,o.jsx)("button",{className:"absolute left-0 top-0 bottom-0",type:"button",onClick:f,children:(0,o.jsx)("svg",{className:"w-6 h-6",clipRule:"evenodd",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z",fillRule:"nonzero"})})}),(0,o.jsx)("button",{className:"absolute right-0 top-0 bottom-0",type:"button",onClick:w,children:(0,o.jsx)("svg",{className:"w-6 h-6",clipRule:"evenodd",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm12.5 10.75c0-.414-.336-.75-.75-.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75zm0-3.248c0-.414-.336-.75-.75-.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75zm0-3.252c0-.414-.336-.75-.75-.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75z",fillRule:"nonzero"})})})]}),(0,o.jsx)($,{disabled:!i.canRollDice,onClick:i.rollDice,children:"Rolar"}),(0,o.jsx)("div",{className:"grid grid-flow-col gap-2",children:(i.dice.length?i.dice:Array(5).fill(void 0)).map((function(e,t){return(0,o.jsx)(G,{currentRoll:i.currentRoll,die:e,onClick:e?function(){return i.toggleDieLock(t)}:void 0},t)}))}),(0,o.jsxs)("div",{className:"min-h-0 py-4 border-t border-b grid grid-flow-row gap-1 overflow-y-auto",children:[v.map(r),(0,o.jsx)(U,{label:"Subtotal",score:N}),(0,o.jsx)(U,{label:"B\xf4nus",score:E}),j.map(r),(0,o.jsx)(U,{label:"Subtotal",score:T}),(0,o.jsx)(U,{label:"Total",score:N+E+T})]}),(0,o.jsx)($,{disabled:0===i.dice.length||!y,onClick:function(){i.choosePlayType(y),b(void 0)},children:"Terminar jogada"}),g&&(0,o.jsx)("div",{className:"absolute inset-0 bg-white",children:(0,o.jsxs)("div",{className:"grid grid-flow-row gap-4",children:[(0,o.jsxs)("h1",{className:"relative text-lg text-center font-bold",children:["Placar",(0,o.jsx)("button",{className:"absolute right-0 top-0 bottom-0",type:"button",onClick:w,children:(0,o.jsx)("svg",{className:"w-6 h-6",clipRule:"evenodd",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"})})})]}),(0,o.jsx)(L,{playersState:i.playersState})]})})]}))}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function W(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ee(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function te(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function re(e){return function(e){if(Array.isArray(e))return e}(e)||ee(e)||oe(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e){return function(e){if(Array.isArray(e))return V(e)}(e)||ee(e)||oe(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,t){if(e){if("string"===typeof e)return V(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?V(e,t):void 0}}function ae(e){var t,r=e.className,n=e.playersState,a=e.restartGame,i=te(e,["className","playersState","restartGame"]),l=n.map((function(e){return Object.values(e.plays).reduce((function(e,t){return e+t}),0)+e.bonus})),c=(t=Math).max.apply(t,ne(l)),s=re(n.filter((function(e,t){return l[t]===c}))),f=s[0],p=s.slice(1);return(0,o.jsxs)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){W(e,t,r[t])}))}return e}({className:u()(r,"min-h-0 grid grid-flow-row gap-4"),style:{gridTemplateRows:"auto 1fr auto"}},i,{children:[(0,o.jsxs)("h1",{className:"text-lg text-center font-bold",children:["Fim de jogo, vencedor",p.length>0?"es":"",":"," ",p.map((function(e){return e.name})).join(", "),p.length>0?" e ":"",f.name," com ",c," pontos"]}),(0,o.jsx)(L,{playersState:n}),(0,o.jsx)($,{onClick:a,children:"Jogar novamente"})]}))}function ie(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ue(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function le(e){var t=e.className,r=e.type,n=void 0===r?"text":r,a=ue(e,["className","type"]);return(0,o.jsx)("input",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ie(e,t,r[t])}))}return e}({className:u()(t,"border rounded px-4 py-2"),type:n},a))}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function fe(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function pe(e){return function(e){if(Array.isArray(e))return ce(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return ce(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ce(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(e){var t=e.className,r=e.onStartGame,n=fe(e,["className","onStartGame"]),a=(0,l.useState)(""),i=a[0],c=a[1],s=(0,l.useState)([]),f=s[0],p=s[1];return(0,o.jsxs)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){se(e,t,r[t])}))}return e}({className:u()(t,"min-h-0 grid grid-flow-row gap-4")},n,{children:[(0,o.jsx)("h1",{className:"text-lg text-center font-bold",children:"General"}),(0,o.jsx)("div",{className:"flex-1",children:f.map((function(e,t){return(0,o.jsxs)("p",{className:"px-4 py-2 flex",children:[(0,o.jsx)("span",{className:"flex-1",children:e}),(0,o.jsx)("button",{className:"text-red-500",type:"button",onClick:function(){return function(e){p(f.filter((function(t,r){return r!==e})))}(t)},children:"Remover"})]},t)}))}),(0,o.jsx)("hr",{}),(0,o.jsxs)("form",{className:"grid gap-2",onSubmit:function(e){e.preventDefault(),i&&(p(pe(f).concat([i])),c(""))},children:[(0,o.jsx)(le,{placeholder:"Digite o nome do jogador",value:i,onChange:function(e){c(e.target.value)},autoFocus:!0}),(0,o.jsx)($,{type:"submit",disabled:!i,children:"Adicionar jogador"})]}),(0,o.jsx)("hr",{}),(0,o.jsx)($,{disabled:0===f.length,onClick:function(){r(f)},children:"Jogar"})]}))}var ye=r(1794);function be(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function me(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return be(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return be(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function he(){var e=function(e){a({rawGameState:e})},t=me(function(e,t){var r=(0,l.useState)(t),n=r[0],o=r[1];return(0,l.useEffect)((function(){var t=localStorage.getItem(e);t&&o(JSON.parse(t))}),[e]),(0,ye.Z)((function(){localStorage.setItem(e,JSON.stringify(n))}),[e,n]),[n,o]}("state",{}),2),r=t[0],n=r.rawGameState,o=r.playersState,a=t[1];return{startGame:function(t){e(function(e){return{playersState:e.map((function(e){return{name:e,plays:{},bonus:0}})),currentPlayer:0,currentRoll:0,dice:[]}}(t))},gameState:N(n,e),endGame:function(e){a({playersState:e})},playersState:o,restartGame:function(){a({})}}}var ve=function(){var e=he(),t=e.startGame,r=e.gameState,n=e.endGame,a=e.playersState,i=e.restartGame;return(0,o.jsx)("div",{className:"h-full sm:p-4 flex flex-col items-center justify-center",children:(0,o.jsx)("div",{className:"w-full max-h-full max-w-md sm:border rounded bg-white p-4 flex flex-col",children:a?(0,o.jsx)(ae,{playersState:a,restartGame:i}):r?(0,o.jsx)(Y,{gameState:r,endGame:n,restartGame:i}):(0,o.jsx)(de,{onStartGame:t})})})}},7663:function(e){!function(){var t={162:function(e){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,l=[],c=!1,s=-1;function f(){c&&u&&(c=!1,u.length?l=u.concat(l):s=-1,l.length&&p())}function p(){if(!c){var e=i(f);c=!0;for(var t=l.length;t;){for(u=l,l=[];++s<t;)u&&u[s].run();s=-1,t=l.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function y(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new d(e,t)),1!==l.length||c||i(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=y,n.addListener=y,n.once=y,n.off=y,n.removeListener=y,n.removeAllListeners=y,n.emit=y,n.prependListener=y,n.prependOnceListener=y,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}},i=!0;try{t[e](a,a.exports,n),i=!1}finally{i&&delete r[e]}return a.exports}n.ab="//";var o=n(162);e.exports=o}()},1784:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useFirstMountState=void 0;var n=r(7294);t.useFirstMountState=function(){var e=n.useRef(!0);return e.current?(e.current=!1,!0):e.current}},3809:function(e,t,r){"use strict";var n=r(7294),o=function(e,t){return"boolean"===typeof t?t:!e};t.Z=function(e){return n.useReducer(o,e)}},1794:function(e,t,r){"use strict";var n=r(7294),o=r(1784);t.Z=function(e,t){var r=o.useFirstMountState();n.useEffect((function(){if(!r)return e()}),t)}}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);