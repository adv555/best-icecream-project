parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"l9pR":[function(require,module,exports) {
$(document).ready(function(){var o=!0;$(window).on("scroll load resize",function(){if(!o)return!1;var t=$(window).scrollTop(),i=$(".bg-group-2__list").offset().top,r=$(window).height(),n=$(document).height(),e=$(".bg-group-2__list").outerHeight();(t+500>=i||r+t==n||e+i<r)&&($(".bg-group-2__quantity").css("opacity","1"),$(".bg-group-2__weight").css("opacity","1"),$(".bg-group-2__quantity").spincrement({thousandSeparator:"",duration:1200}),o=!1)})});
},{}]},{},["l9pR"], null)
//# sourceMappingURL=/best-icecream/hero.5e047f3c.js.map