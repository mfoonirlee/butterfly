require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({9:[function(require,module,exports) {
module.exports="/butterfly/fb7899bbd06c4eb5eeb01415933cf312.gif";
},{}],10:[function(require,module,exports) {
module.exports="/butterfly/d426cfb94b190cfb1f06628b001b6749.gif";
},{}],11:[function(require,module,exports) {

},{}],7:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),e=require("./butterfly-1.gif"),r=a(e),i=require("./butterfly-2.gif"),n=a(i);function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}require("./butterfly.css");var u=[r.default,n.default];function s(t){return t[Math.floor(Math.random()*t.length)]}var l=document.createElement("div");l.id="j_butterfly",document.body.appendChild(l);var d=function(){function e(){o(this,e),this.imgSrc=s(u),this.dire=Math.random()>.5?"left":"right",this.size="size"+Math.ceil(4*Math.random()),this.speed="speed"+Math.ceil(2*Math.random()),this.topStr="top: "+Math.floor(100*Math.random())+"%",this.xStr=this.dire+": "+(-Math.floor(300*Math.random())-60)+"px",this.product()}return t(e,[{key:"product",value:function(){var t=document.createElement("div");t.className="butterfly "+this.dire+" "+this.size+" "+this.speed,t.style=this.topStr+";"+this.xStr+";",t.innerHTML='<div><p><span style="background-image: url('+this.imgSrc+')"></span></p></div>',l.appendChild(t)}}]),e}();exports.default=d;
},{"./butterfly-1.gif":9,"./butterfly-2.gif":10,"./butterfly.css":11}],3:[function(require,module,exports) {
"use strict";var e=require("./butterfly"),s=n(e);function n(e){return e&&e.__esModule?e:{default:e}}var t=0,a=setInterval(function(){if(t++<50){if(3==t){var e=document.createElement("div");e.innerHTML='<div class="text-words"><p class="fsn">Fate/stay night</p><p class="mid white">Heaven\'s Feel</p><p class="mid white">presage flower</p><p class="sm red slowAni">2019&nbsp.&nbsp1&nbsp.&nbsp11</p><p class="mid red slowAni">on view</p></div><p class="fadeIn">Made By @boltCat</p>',document.body.appendChild(e)}new s.default}else clearInterval(a)},1e3);
},{"./butterfly":7}]},{},[3])