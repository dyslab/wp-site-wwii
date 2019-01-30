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
/******/ 		"de_airforce": 0
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
/******/ 	deferredModules.push(["./js/de_airforce.js","custom.styles"]);
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

/***/ "../node_modules/webpack/buildin/module.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./js sync recursive ^\\.\\/.*\\.json$":
/*!********************************!*\
  !*** ./js sync ^\.\/.*\.json$ ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about.json": "./js/about.json",
	"./de_airforce.json": "./js/de_airforce.json",
	"./de_army.json": "./js/de_army.json",
	"./de_army_mp40.json": "./js/de_army_mp40.json",
	"./de_navy.json": "./js/de_navy.json",
	"./de_shortcut.json": "./js/de_shortcut.json",
	"./footer.json": "./js/footer.json",
	"./index.json": "./js/index.json",
	"./menu.json": "./js/menu.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./js sync recursive ^\\.\\/.*\\.json$";

/***/ }),

/***/ "./js/about.json":
/*!***********************!*\
  !*** ./js/about.json ***!
  \***********************/
/*! exports provided: part1title, part1content, part2title, part2content, part3title, part3content, default */
/***/ (function(module) {

module.exports = {"part1title":"内容及版权声明","part1content":"<p>本网站（<I>www.xxxxx.com</I>）包含有战争内容和战争、暴力等相关影像图片，部分读者可能会因此对此感到不适，敬请注意。同时，本网站致力于记录历史和教育用途，而非提倡暴力、战争及种族/性别歧视。网站所有资料内容由XXX先生历时五年进行搜集与整理，鉴于个人学识和理解所限，部分内容可能会存在偏颇差错，请各位读者予以谅解。同时，欢迎各位读者就其中错误予以指导和纠正，具体可通过本页下方所列之联系方式与我们联系。</p><p>此外，本网站上传及引用的资料内容归原作者及相关利益人所有，为了阅读效果同时保护版权人利益，本网站所有图片资料最大边长限制在1000像素以内。任何个人、单位或组织在任何网络、媒体上转载传播时，敬请注明出处。如需商业使用，请自行与版权人联系使用事宜。</p><span class=\"h5\">感谢您的理解与支持！</span>","part2title":"The Claim of Content and Copyrights","part2content":"<p>This website (<I>www.xxxxx.com</I>) covers war and armed conflicts. Partial pictures and contents contained war and graphic images. Please should be aware that it's not suitable for everyone. Leave now please if it's not that kind of website you are looking for. </p><p>All contents within this website are dedicated to the educational use, historical documentary and news report. It's not propagated about war, violence and race/gender discrimination. Any negative philosophy are not advocated by this website.</p><p>All pictures and materials within this website are collected and sorted by Mr.XXX. The content mainly came from Internet, published books and other public documents. The copyright of photo pictures or other materials is belong to the original author or its legal beneficiaries. Mention the source (<I>www.xxxxx.com</I>) please if you want to share. Please contact the copyright owner if you intent to use for commericial usage. At the mean while, In order to be proper for reading, all pictures in this website were limited to an appropriate size(The width or height of each picture is no larger than 1000 pixels). Additionally, in terms of the limitation of knowledge and experiences, some mistake and misunderstanding were unavoidable. Anyone who found any mistake or misunderstanding within this website, or if there's a copyright issue existed, feel free to send us a message via the mailbox listed below please.</p><span class=\"h5\">Thank you for your understanding and support.</span>","part3title":"网站维护人员","part3content":"<p>内容资料：XXX <a href=\"mailto:xxx@yyy.com\">xxx@yyy.com</a></p><p>技术维护：YYY <a href=\"mailto:yyy@yyy.com\">yyy@yyy.com</a></p>"};

/***/ }),

/***/ "./js/base.js":
/*!********************!*\
  !*** ./js/base.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */
exports.setMenuActiveItem = (menuJSON, currentName) => {
  const step = 1; // Set active menu item.

  for (let no = 0; no < menuJSON.length; no += step) {
    // This generated page name is 'about.html'
    if (menuJSON[no].link === currentName) {
      menuJSON[no].active = true;
    }
  }
};

exports.setCopyright = footerJSON => {
  // Set copyright duration year.
  const dateObj = new Date();
  const thisYear = dateObj.getFullYear();
  const startYear = 2018;
  let yearString = '';

  if (thisYear > startYear) {
    yearString = `2018-${thisYear}`;
  } else {
    yearString = thisYear;
  }

  footerJSON.copyright = footerJSON.copyright.replace(/#year#/iu, yearString);
};

module.exposts = exports;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./js/de_airforce.js":
/*!***************************!*\
  !*** ./js/de_airforce.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./js/base.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_base_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/base.css */ "./css/base.css");
/* harmony import */ var _css_base_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_base_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_category_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/category.css */ "./css/category.css");
/* harmony import */ var _css_category_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_category_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _footer_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.json */ "./js/footer.json");
var _footer_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./footer.json */ "./js/footer.json", 1);
/* harmony import */ var _menu_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.json */ "./js/menu.json");
var _menu_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./menu.json */ "./js/menu.json", 1);
/* harmony import */ var _views_category_pug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/category.pug */ "./views/category.pug");
/* harmony import */ var _views_category_pug__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_views_category_pug__WEBPACK_IMPORTED_MODULE_5__);
/* eslint-disable no-unused-vars */






const pageID = 'de_airforce';

var bodyJSON = __webpack_require__("./js sync recursive ^\\.\\/.*\\.json$")(`./${pageID}.json`); // Set header and footer


_base_js__WEBPACK_IMPORTED_MODULE_0___default.a.setCopyright(_footer_json__WEBPACK_IMPORTED_MODULE_3__);
_base_js__WEBPACK_IMPORTED_MODULE_0___default.a.setMenuActiveItem(_menu_json__WEBPACK_IMPORTED_MODULE_4__, pageID); // Render pug file and output.

document.write(_views_category_pug__WEBPACK_IMPORTED_MODULE_5___default()({
  body: bodyJSON,
  footer: _footer_json__WEBPACK_IMPORTED_MODULE_3__,
  menu: _menu_json__WEBPACK_IMPORTED_MODULE_4__
}));

/***/ }),

/***/ "./js/de_airforce.json":
/*!*****************************!*\
  !*** ./js/de_airforce.json ***!
  \*****************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = [{"model":"Me262","link":"de_army_me262","image":"imgs/de_army_mp40_01.jpg","intro":"MP40冲锋枪（Maschinenpistole 40），常被称为“施迈瑟冲锋枪”，是一种为方便大量生产而设计，与传统枪械制造观念不同的冲锋枪，广泛应用于第二次世界大战期间纳粹德国军队。"},{"model":"Me222","link":"de_army_me222","image":"imgs/de_army_mp44_01.jpg","intro":"MP44自动步枪被称为突击步枪之父,由德国于1941年-1942年间研制,并采用一种新型短弹。"}];

/***/ }),

/***/ "./js/de_army.json":
/*!*************************!*\
  !*** ./js/de_army.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"model":"MP40","link":"de_army_mp40","image":"imgs/de_army_mp40_01.jpg","intro":"MP40冲锋枪（Maschinenpistole 40），常被称为“施迈瑟冲锋枪”，是一种为方便大量生产而设计，与传统枪械制造观念不同的冲锋枪，广泛应用于第二次世界大战期间纳粹德国军队。"},{"model":"MP44","link":"de_army_mp44","image":"imgs/de_army_mp44_01.jpg","intro":"MP44自动步枪被称为突击步枪之父,由德国于1941年-1942年间研制,并采用一种新型短弹。"},{"model":"Tiger","link":"de_army_vi","image":"imgs/de_army_vi_01.jpg","intro":"虎式重型坦克（德文：Panzerkampfwagen Tiger Ausführung E ，德国代号：Sd.Kfz. 181，又称：虎式坦克/虎Ⅰ坦克/六号坦克）是第二次世界大战中德国军队所使用的一种重型坦克。"}];

/***/ }),

/***/ "./js/de_army_mp40.json":
/*!******************************!*\
  !*** ./js/de_army_mp40.json ***!
  \******************************/
/*! exports provided: model, category_name, category_link, description, content, default */
/***/ (function(module) {

module.exports = {"model":"MP40","category_name":"陆战武器","category_link":"de_army","description":"MP40冲锋枪（Maschinenpistole 40），常被称为“施迈瑟冲锋枪”，是一种为方便大量生产而设计，与传统枪械制造观念不同的冲锋枪，广泛应用于第二次世界大战期间纳粹德国军队。","content":[{"image":"imgs/de_army_mp40_01.jpg","caption":"MP40冲锋枪（Maschinenpistole 40），常被称为“施迈瑟冲锋枪”，是一种为方便大量生产而设计，与传统枪械制造观念不同的冲锋枪，广泛应用于第二次世界大战期间纳粹德国军队。"},{"image":"imgs/de_army_mp40_01.jpg","caption":"MP40冲锋枪（Maschinenpistole 40），常被称为“施迈瑟冲锋枪”，是一种为方便大量生产而设计，与传统枪械制造观念不同的冲锋枪，广泛应用于第二次世界大战期间纳粹德国军队。"},{"image":"imgs/de_army_mp40_01.jpg","caption":"MP40冲锋枪（Maschinenpistole 40），常被称为“施迈瑟冲锋枪”，是一种为方便大量生产而设计，与传统枪械制造观念不同的冲锋枪，广泛应用于第二次世界大战期间纳粹德国军队。"},{"image":"imgs/de_army_mp40_01.jpg","caption":"MP40冲锋枪（Maschinenpistole 40），常被称为“施迈瑟冲锋枪”，是一种为方便大量生产而设计，与传统枪械制造观念不同的冲锋枪，广泛应用于第二次世界大战期间纳粹德国军队。"},{"image":"imgs/de_army_mp40_01.jpg","caption":"MP40冲锋枪（Maschinenpistole 40），常被称为“施迈瑟冲锋枪”，是一种为方便大量生产而设计，与传统枪械制造观念不同的冲锋枪，广泛应用于第二次世界大战期间纳粹德国军队。"}]};

/***/ }),

/***/ "./js/de_navy.json":
/*!*************************!*\
  !*** ./js/de_navy.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"model":"U-48","link":"de_navy_u48","image":"imgs/de_army_mp44_01.jpg","intro":"MP44自动步枪被称为突击步枪之父,由德国于1941年-1942年间研制,并采用一种新型短弹。"},{"model":"U-47","link":"de_navy_u47","image":"imgs/de_army_mp40_01.jpg","intro":"MP40冲锋枪（Maschinenpistole 40），常被称为“施迈瑟冲锋枪”，是一种为方便大量生产而设计，与传统枪械制造观念不同的冲锋枪，广泛应用于第二次世界大战期间纳粹德国军队。"},{"model":"U-49","link":"de_army_u49","image":"imgs/de_army_vi_01.jpg","intro":"虎式重型坦克（德文：Panzerkampfwagen Tiger Ausführung E ，德国代号：Sd.Kfz. 181，又称：虎式坦克/虎Ⅰ坦克/六号坦克）是第二次世界大战中德国军队所使用的一种重型坦克。"}];

/***/ }),

/***/ "./js/de_shortcut.json":
/*!*****************************!*\
  !*** ./js/de_shortcut.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"title":"陆战武器","link":"de_army"},{"title":"空战武器","link":"de_airforce"},{"title":"海战武器","link":"de_navy"}];

/***/ }),

/***/ "./js/footer.json":
/*!************************!*\
  !*** ./js/footer.json ***!
  \************************/
/*! exports provided: footersitelogo, footersitename, copyright, getintouchinfo, default */
/***/ (function(module) {

module.exports = {"footersitelogo":"imgs/favicon.png","footersitename":"军事测试网站","copyright":"Copyright © #year# 版权所有，转载分享请注明出处。","getintouchinfo":{"headline":"联系我们","data":[{"faicon":"fab fa-facebook-f","href":"#","ref":"Facebook"},{"faicon":"fab fa-qq","href":"#","ref":"QQ"},{"faicon":"fab fa-weixin","href":"about.html","ref":"微信"},{"faicon":"fas fa-envelope","href":"mailto:xxx@yyy.com","ref":"电子邮件"}]}};

/***/ }),

/***/ "./js/index.json":
/*!***********************!*\
  !*** ./js/index.json ***!
  \***********************/
/*! exports provided: background, title, linktext, link, default */
/***/ (function(module) {

module.exports = {"background":"imgs/index-bg.jpg","title":"欢迎来到战争天地","linktext":"二战德军武器系列","link":"about.html"};

/***/ }),

/***/ "./js/menu.json":
/*!**********************!*\
  !*** ./js/menu.json ***!
  \**********************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = [{"title":"首页","link":"index","active":false},{"title":"陆战篇","link":"de_army","active":false},{"title":"空战篇","link":"de_airforce","active":false},{"title":"海战篇","link":"de_navy","active":false},{"title":"快捷目录","link":"de_shortcut","active":false},{"title":"关于我们","link":"about","active":false}];

/***/ }),

/***/ "./views/category.pug":
/*!****************************!*\
  !*** ./views/category.pug ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "../node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (body, menu) {pug_mixins["setNavItems"] = pug_interp = function(){
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
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fnav\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E\u003C!-- Sticky Nav Bar End --\u003E\u003Csection class=\"custom-category-style pt-3 pb-3\" id=\"about\"\u003E\u003Cdiv class=\"container\"\u003E";
// iterate body
;(function(){
  var $$obj = body;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var item = $$obj[pug_index1];
pug_html = pug_html + "\u003Ca" + (pug.attr("href", item.link + '.html', true, true)) + "\u003E\u003Cdiv class=\"row pt-3 pb-3\"\u003E\u003Cdiv class=\"col-12 col-md-4 col-lg-5 pt-3\"\u003E\u003Cimg" + (" class=\"img-fluid rounded\""+pug.attr("src", item.image, true, true)+pug.attr("alt", item.model, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-12 col-md-8 col-lg-7 pt-3\"\u003E\u003Ch5 class=\"font-weight-bold custom-text-shadow-1px\"\u003E" + (pug.escape(null == (pug_interp = item.model) ? "" : pug_interp)) + "\u003C\u002Fh5\u003E\u003Cspan\u003E" + (null == (pug_interp = item.intro) ? "" : pug_interp) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var item = $$obj[pug_index1];
pug_html = pug_html + "\u003Ca" + (pug.attr("href", item.link + '.html', true, true)) + "\u003E\u003Cdiv class=\"row pt-3 pb-3\"\u003E\u003Cdiv class=\"col-12 col-md-4 col-lg-5 pt-3\"\u003E\u003Cimg" + (" class=\"img-fluid rounded\""+pug.attr("src", item.image, true, true)+pug.attr("alt", item.model, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-12 col-md-8 col-lg-7 pt-3\"\u003E\u003Ch5 class=\"font-weight-bold custom-text-shadow-1px\"\u003E" + (pug.escape(null == (pug_interp = item.model) ? "" : pug_interp)) + "\u003C\u002Fh5\u003E\u003Cspan\u003E" + (null == (pug_interp = item.intro) ? "" : pug_interp) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E" + (null == (pug_interp = __webpack_require__(/*! ./footer.pug */ "./views/footer.pug").call(this, locals)) ? "" : pug_interp) + "\u003C!-- Javascript common libs. JQuery, Bootstrap, FontAwesome Script Begin --\u003E\u003Cscript src=\".\u002Fcommon\u002Fjs\u002Fjquery-3.3.1.min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript src=\".\u002Fcommon\u002Fjs\u002Fbootstrap.bundle.min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript src=\".\u002Fcommon\u002Fjs\u002Fall.min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript src=\".\u002Fcommon\u002Fjs\u002Fhs.core.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript src=\".\u002Fcommon\u002Fjs\u002Fhs.go-to.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript\u003E$(document).ready(function() {\n  \u002F\u002F- Go To Top Script\n  $.HSCore.components.HSGoTo.init('.js-go-to')\n})\n\u003C\u002Fscript\u003E\u003Cscript\u003E$(document).ready(function() {\n}\u003C\u002Fscript\u003E";}.call(this,"body" in locals_for_with?locals_for_with.body:typeof body!=="undefined"?body:undefined,"menu" in locals_for_with?locals_for_with.menu:typeof menu!=="undefined"?menu:undefined));;return pug_html;};
module.exports = template;

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

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-md-8 col-12 custom-footer-color order-md-1\"\u003E\u003Cspan\u003E\u003Ca" + (" class=\"custom-footer-brand\""+" href=\"\u002F\""+pug.attr("alt", footer.footersitename, true, true)) + "\u003E\u003Cimg" + (" class=\"d-inline-block align-top\""+pug.attr("src", footer.footersitelogo, true, true)+" height=\"20\""+pug.attr("alt", footer.footersitename, true, true)) + "\u003E \u003Cspan class=\"custom-text-shadow-1px\"\u003E" + (pug.escape(null == (pug_interp = footer.footersitename) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fa\u003E \u003C\u002Fspan\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = footer.copyright) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E\u003C!-- Page Footer End --\u003E\n\u003C!-- Go to Top --\u003E\u003Ca class=\"js-go-to u-go-to\" href=\"javascript:;\" data-position=\"{&quot;bottom&quot;: 15, &quot;right&quot;: 15 }\" data-type=\"fixed\" data-offset-top=\"300\" data-compensation=\"#header\" data-show-effect=\"slideInUp\" data-hide-effect=\"slideOutDown\"\u003E\u003Cspan class=\"fa fa-arrow-up u-go-to__inner\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C!-- Note: Need to add script part below the body --\u003E\n\u003C!-- End Go to Top --\u003E";}.call(this,"footer" in locals_for_with?locals_for_with.footer:typeof footer!=="undefined"?footer:undefined));;return pug_html;};
module.exports = template;

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