/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"about": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./views/about.js","custom.styles"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/pug-runtime/index.js":
/*!********************************************!*\
  !*** ../node_modules/pug-runtime/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  if (typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./views/about.js":
/*!************************!*\
  !*** ./views/about.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */
var baseCSS = __webpack_require__(/*! ../css/base.css */ "./css/base.css");

var aboutCSS = __webpack_require__(/*! ../css/about.css */ "./css/about.css");

var template = __webpack_require__(/*! ./about.pug */ "./views/about.pug");

var menuJSON = __webpack_require__(/*! ./menu.json */ "./views/menu.json");

var footerJSON = __webpack_require__(/*! ./footer.json */ "./views/footer.json");

var aboutJSON = __webpack_require__(/*! ./about.json */ "./views/about.json");

const step = 1; // Set active menu item.

for (let no = 0; no < menuJSON.length; no += step) {
  // This generated page name is 'about.html'
  if (menuJSON[no].link === 'about') {
    menuJSON[no].active = true;
  }
} // Set copyright duration year.


const dateObj = new Date();
const thisYear = dateObj.getFullYear();
const startYear = 2018;
let yearString = '';

if (thisYear > startYear) {
  yearString = `2018-${thisYear}`;
} else {
  yearString = thisYear;
}

footerJSON.copyright = footerJSON.copyright.replace(/#year#/iu, yearString); // Render pug file and output.

document.write(template({
  about: aboutJSON,
  footer: footerJSON,
  menu: menuJSON
}));

/***/ }),

/***/ "./views/about.json":
/*!**************************!*\
  !*** ./views/about.json ***!
  \**************************/
/*! exports provided: part1title, default */
/***/ (function(module) {

module.exports = {"part1title":"你好，我是part1呀. 来自about.json文件"};

/***/ }),

/***/ "./views/about.pug":
/*!*************************!*\
  !*** ./views/about.pug ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "../node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (about, menu) {pug_mixins["setNavItems"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
// iterate menu
;(function(){
  var $$obj = menu;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var menuitem = $$obj[index];
if (menuitem.active) {
pug_html = pug_html + "\u003Cli class=\"nav-item active\"\u003E\u003Ca" + (" class=\"nav-link\""+pug.attr("href", menuitem.link + '.html', true, true)) + "\u003E" + (pug.escape(null == (pug_interp = menuitem.title) ? "" : pug_interp)) + "\u003Cspan class=\"sr-only\"\u003E(current)\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E\u003Ca" + (" class=\"nav-link\""+pug.attr("href", menuitem.link + '.html', true, true)) + "\u003E" + (pug.escape(null == (pug_interp = menuitem.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var menuitem = $$obj[index];
if (menuitem.active) {
pug_html = pug_html + "\u003Cli class=\"nav-item active\"\u003E\u003Ca" + (" class=\"nav-link\""+pug.attr("href", menuitem.link + '.html', true, true)) + "\u003E" + (pug.escape(null == (pug_interp = menuitem.title) ? "" : pug_interp)) + "\u003Cspan class=\"sr-only\"\u003E(current)\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E\u003Ca" + (" class=\"nav-link\""+pug.attr("href", menuitem.link + '.html', true, true)) + "\u003E" + (pug.escape(null == (pug_interp = menuitem.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

};
pug_html = pug_html + "\u003C!-- Sticky Nav Bar Begin --\u003E\u003Cheader class=\"p-0\"\u003E\u003Cdiv class=\"container-fluid custom-header-bgcolor p-0\"\u003E\u003Cnav class=\"navbar navbar-expand-lg navbar-light custom-transparency-95 p-2\"\u003E\u003Cdiv class=\"container-fluid d-flex justify-content-end\"\u003E\u003Cbutton class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#bs-navbarNav\" aria-controls=\"bs-navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\u003E\u003Cspan class=\"navbar-toggler-icon\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"flex-row collapse justify-content-center navbar-collapse\" id=\"bs-navbarNav\"\u003E\u003Cul class=\"navbar-nav\"\u003E";
pug_mixins["setNavItems"]();
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fnav\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E\u003C!-- Sticky Nav Bar End --\u003E\u003Cdiv class=\"container\" style=\"height: 80vh;\"\u003E\u003Cp class=\"custom-text-shadow-1px\"\u003E" + (pug.escape(null == (pug_interp = about.part1title) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E" + (null == (pug_interp = __webpack_require__(/*! ./footer.pug */ "./views/footer.pug").call(this, locals)) ? "" : pug_interp) + "\u003C!-- Javascript common libs. JQuery, Bootstrap, FontAwesome Script Begin --\u003E\u003Cscript src=\".\u002Fcommon\u002Fjs\u002Fjquery-3.3.1.min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript src=\".\u002Fcommon\u002Fjs\u002Fbootstrap.bundle.min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript src=\".\u002Fcommon\u002Fjs\u002Fall.min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript\u003E$(document).ready(function() {\n}\u003C\u002Fscript\u003E";}.call(this,"about" in locals_for_with?locals_for_with.about:typeof about!=="undefined"?about:undefined,"menu" in locals_for_with?locals_for_with.menu:typeof menu!=="undefined"?menu:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./views/footer.json":
/*!***************************!*\
  !*** ./views/footer.json ***!
  \***************************/
/*! exports provided: footersitelogo, footersitename, copyright, getintouchinfo, default */
/***/ (function(module) {

module.exports = {"footersitelogo":"imgs/favicon.png","footersitename":"测试网站","copyright":"© #year# 版权所有. 网站基于node.js/JQuery/Bootstrap/Webpack设计.","getintouchinfo":{"headline":"联系我们","data":[{"faicon":"fab fa-facebook-f","href":"#","ref":"Facebook"},{"faicon":"fab fa-qq","href":"#","ref":"QQ"},{"faicon":"fab fa-weixin","href":"about.html","ref":"微信"},{"faicon":"fas fa-envelope","href":"mailto:email@unknown.company","ref":"电子邮件"}]}};

/***/ }),

/***/ "./views/footer.pug":
/*!**************************!*\
  !*** ./views/footer.pug ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "../node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (footer) {pug_html = pug_html + "\u003C!-- Page Footer Begin --\u003E\u003Cfooter class=\"p-0\"\u003E\u003Cdiv class=\"container-fluid custom-footer-bgcolor p-0 p-md-3\"\u003E\u003Cdiv class=\"container pt-5 pb-5\"\u003E\u003Cdiv class=\"d-flex justify-content-between row\"\u003E\u003Cdiv class=\"col-lg-4 col-12 order-md-12\"\u003E\u003Cdiv class=\"d-flex justify-content-start justify-content-md-end\"\u003E\u003Cspan class=\"list-social-links custom-footer-color custom-text-shadow-1px\"\u003E" + (pug.escape(null == (pug_interp = footer.getintouchinfo.headline) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cul class=\"list-social-links justify-content-start justify-content-md-end\"\u003E";
// iterate footer.getintouchinfo.data
;(function(){
  var $$obj = footer.getintouchinfo.data;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var gitem = $$obj[pug_index0];
pug_html = pug_html + "\u003Cli class=\"text-white\"\u003E\u003Ca" + (pug.attr("href", gitem.href, true, true)+" target=\"_blank\""+pug.attr("rel", gitem.ref, true, true)) + "\u003E\u003Ci" + (pug.attr("class", pug.classes([gitem.faicon], [true]), false, true)) + "\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var gitem = $$obj[pug_index0];
pug_html = pug_html + "\u003Cli class=\"text-white\"\u003E\u003Ca" + (pug.attr("href", gitem.href, true, true)+" target=\"_blank\""+pug.attr("rel", gitem.ref, true, true)) + "\u003E\u003Ci" + (pug.attr("class", pug.classes([gitem.faicon], [true]), false, true)) + "\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-md-8 col-12 custom-footer-color order-md-1\"\u003E\u003Cspan\u003E\u003Ca" + (" class=\"custom-footer-brand\""+" href=\"\u002F\""+pug.attr("alt", footer.footersitename, true, true)) + "\u003E\u003Cimg" + (" class=\"d-inline-block align-top\""+pug.attr("src", footer.footersitelogo, true, true)+" height=\"20\""+pug.attr("alt", footer.footersitename, true, true)) + "\u003E \u003Cspan class=\"custom-text-shadow-1px\"\u003E" + (pug.escape(null == (pug_interp = footer.footersitename) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fa\u003E \u003C\u002Fspan\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = footer.copyright) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E\u003C!-- Page Footer End --\u003E";}.call(this,"footer" in locals_for_with?locals_for_with.footer:typeof footer!=="undefined"?footer:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./views/menu.json":
/*!*************************!*\
  !*** ./views/menu.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = [{"title":"首页","link":"index","active":false},{"title":"德军武器","link":"deweapon","active":false},{"title":"快捷列表","link":"glossary","active":false},{"title":"关于我们","link":"about","active":false}];

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });