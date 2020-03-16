window.mcul=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e),n.d(e,"Molecule",(function(){return h})),n.d(e,"Atom",(function(){return c}));var r=[1.008,4.003,7,9.012,10.81,12.011,14.007,15.999,18.998,20.18,22.99,24.305,26.982,28.085,30.974,32.07,35.45,39.9,39.098,40.08,44.956,47.87,50.941,51.996,54.938,55.84,58.933,58.693,63.55,65.4,69.72,72.63,74.922,78.97,79.9,83.8,85.468,87.6,88.906,91.22,92.906,96,97.907,101.1,102.906,106.4,107.868,112.41,114.82,118.71,121.76,127.6,126.905,131.29,132.905,137.33,138.906,140.12,140.908,144.24,144.913,150.4,151.96,157.2,158.925,162.5,164.93,167.26,168.934,173.04,174.967,178.5,180.948,183.8,186.21,190.2,192.22,195.08,196.967,200.59,204.383,207,208.98,208.982,209.987,222.018,223.02,226.025,227.028,232.038,231.036,238.029,237.048,244.064,243.061,247.07,247.07,251.08,252.083,257.095,258.098,259.101,262.11,267.122,268.126,271.134,274.144,277.152,278.156,281.165,282.169,285.177,286.183,289.191,290.196,293.205,294.211,294.214],i=["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt"],o=["Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminum","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Cesium","Barium","Lanthanum","Cerium","Praseodymium","Neodymium","Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium","Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead","Bismuth","Polonium","Astatine","Radon","Francium","Radium","Actinium","Thorium","Protactinium","Uranium","Neptunium","Plutonium","Americium","Curium","Berkelium","Californium","Einsteinium","Fermium","Mendelevium","Nobelium","Lawrencium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium"];function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){function t(e,n,r){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"in",(function(t){if(!t||"molecule"!==t.type)throw new Error("Must pass in a Molecule instance");return o.s.p=t,o.s.id=t.s.i.toString(36),t.s.i+=1,t.s.a[o.s.id]=o.s.a,o})),s(this,"clone",(function(){var e=new t;return e.s.a=o.s.a,e})),this.s={a:{el:e?"string"==typeof e?i.indexOf(e)+1:e:0},p:n,id:r},this.type="atom"}var e,n,c;return e=t,(n=[{key:"symbol",set:function(t){this.atomic=i.indexOf(t)+1},get:function(){return i[this.s.a.el-1]||""}},{key:"atomic",set:function(t){this.s.a.el=t,this.s.p&&this.s.id&&(this.s.p.s.a[this.s.id]=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},this.s.p.s.a[this.s.id],{el:t}))},get:function(){return this.s.a.el}},{key:"name",get:function(){return o[this.s.a.el-1]||""}},{key:"mass",get:function(){return r[this.s.a.el-1]||0}}])&&a(e.prototype,n),c&&a(e,c),t}();function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,"createAtom",(function(t){var n=e.s.i.toString(36);e.s.i+=1;var r=new c(t,e,n);return e.s.a[n]=r.s.a,r})),y(this,"createAtoms",(function(t,n){var r=[];if("number"!=typeof n||n<1)throw new Error("Count must be a positive number");for(var i=0;i<n;i++){var o=e.s.i.toString(36);e.s.i+=1,r.push(new c(t,e,o)),e.s.a[o]=r[i].s.a}return r})),y(this,"contains",(function(t){if(t){if("molecule"===t.type){var n=e.s.i;for(var r in t.s.a){var i=(parseInt(r,36)+n).toString(36);e.s.i+=1,e.s.a[i]=t.s.a[r]}for(var o in t.s.b)if(t.s.b){var u=b(o.split("-"),2),a=u[0],s=u[1];a=(parseInt(a,36)+n).toString(36),s=(parseInt(s,36)+n).toString(36),e.s.b["".concat(a,"-").concat(s)]=t.s.b[o],e.s.b["".concat(s,"-").concat(a)]=null}return delete t.s,t.s=e.s,e}if("atom"===t.type)return t.in(e);throw new Error("Must pass an molecule or atom")}throw new Error("Must pass a component")})),y(this,"in",(function(t){if(!t||"molecule"!==t.type)throw new Error("Must pass in a Molecule instance");return t.contains(e)})),y(this,"getAtomById",(function(t){var n=new c(null,e,t);return n.s.a=e.s.a[t]||{},n})),y(this,"getAtomsByElement",(function(t){t=t?"string"==typeof t?i.indexOf(t)+1:t:0;var n=[];for(var r in e.s.a)if(e.s.a[r].el===t){var o=new c(null,e,r);o.s.a=e.s.a[r]||{},n.push(o)}return n})),y(this,"getBondedAtoms",(function(t){var n=t&&t.s&&t.s.id,r=[];for(var i in e.s.b)if(i.split("-")[0]===n){var o=new c(null,e,i.split("-")[1]);o.s.a=e.s.a[i.split("-")[1]]||{},r.push(o)}return r})),y(this,"getBranchPaths",(function(t,n,r){var i=t&&t.s&&t.s.id||t,o=n?"-".concat(i):i,u=[],a=!0;if(i!==r)for(var s in r||(r=i),e.s.b)s.split("-")[0]===i&&s.split("-")[1]!==n&&(a=!1,u=e.getBranchPaths(s.split("-")[1],i,r).concat(u));if(a)u.push(o);else for(var c in u)u[c]=o+u[c];return u})),y(this,"bond",(function(t,n,r){var i=t&&t.s&&t.s.id,o=n&&n.s&&n.s.id;return e.s.b["".concat(i,"-").concat(o)]=m({type:"c",count:1},r),e.s.b["".concat(o,"-").concat(i)]=null,e})),y(this,"modifyBond",(function(t,n,r){var i=t&&t.s&&t.s.id,o=n&&n.s&&n.s.id,u=e.s.b["".concat(i,"-").concat(o)];if("object"===l(u)&&u)e.s.b["".concat(i,"-").concat(o)]=m({},e.s.b["".concat(i,"-").concat(o)],{},r);else{if("object"!==l(u)||u)throw new Error("Unable to modify bond, does not exist");e.s.b["".concat(o,"-").concat(i)]=m({},e.s.b["".concat(o,"-").concat(i)],{},r)}})),y(this,"getBond",(function(t,n){var r=t&&t.s&&t.s.id,i=n&&n.s&&n.s.id,o=e.s.b["".concat(r,"-").concat(i)];return"object"===l(o)&&o?o:"object"!==l(o)||o?null:e.s.b["".concat(i,"-").concat(r)]})),y(this,"pack",(function(){return JSON.stringify({v:1,s:e.s})})),y(this,"unpack",(function(t){try{var n=JSON.parse(t);if(n.v>1)throw new Error("Upgrade mcul to use newer package schema");e.s=n.s}catch(t){throw new Error("Unable to parse packed data")}})),y(this,"clone",(function(){var n=new t;return n.s=JSON.parse(JSON.stringify(e.s)),n})),this.s={a:{},b:{},i:0},this.type="molecule"}var e,n,o;return e=t,(n=[{key:"mass",get:function(){var t=0;for(var e in this.s.a)t+=r[this.s.a[e].el-1]||0;return Math.round(1e3*t)/1e3}}])&&p(e.prototype,n),o&&p(e,o),t}()}]);
//# sourceMappingURL=mcul.js.map