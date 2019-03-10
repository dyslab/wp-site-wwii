/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/de_shortcut.js");
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
	"./de_army_tanki.json": "./js/de_army_tanki.json",
	"./de_army_tankii.json": "./js/de_army_tankii.json",
	"./de_army_tankiii.json": "./js/de_army_tankiii.json",
	"./de_army_tankiv.json": "./js/de_army_tankiv.json",
	"./de_army_tankv.json": "./js/de_army_tankv.json",
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
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
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

module.exports = {"part1title":"内容及版权声明","part1content":"<p>本网站（<I>www.xxxxx.com</I>）包含有战争内容和战争、暴力等相关影像图片，部分读者可能会因此对此感到不适，敬请注意。同时，本网站致力于记录历史和教育用途，而非提倡暴力、战争及种族/性别歧视。网站所有资料内容由XXX先生历时五年进行搜集与整理，鉴于个人学识和理解所限，部分内容可能会存在偏颇差错，请各位读者予以谅解。同时，欢迎各位读者就其中错误予以指导和纠正，具体可通过本页下方所列之联系方式与我们联系。</p><p>此外，本网站上传及引用的资料内容归原作者及相关利益人所有，为了阅读效果同时保护版权人利益，本网站所有图片资料最大边长限制在3000像素以内。任何个人、单位或组织在任何网络、媒体上转载传播时，敬请注明出处。如需商业使用，请自行与版权人联系使用事宜。</p><span class=\"h5\">感谢您的理解与支持！</span>","part2title":"The Claim of Content and Copyrights","part2content":"<p>This website (<I>www.xxxxx.com</I>) covers war and armed conflicts. Partial pictures and contents contained war and graphic images. Please should be aware that it's not suitable for everyone. Leave now please if it's not that kind of website you are looking for. </p><p>All contents within this website are dedicated to the educational use, historical documentary and news report. It's not propagated about war, violence and race/gender discrimination. Any negative philosophy are not advocated by this website.</p><p>All pictures and materials within this website are collected and sorted by Mr.XXX. The content mainly came from Internet, published books and other public documents. The copyright of photo pictures or other materials is belong to the original author or its legal beneficiaries. Mention the source (<I>www.xxxxx.com</I>) please while sharing, and contact the copyright owner for permission please if you intend to publish it for commercial use. At the mean while, In order to be proper for reading, all pictures in this website were limited to an appropriate size(The width or height of each picture is no larger than 3000 pixels). Additionally, in terms of the limitation of knowledge and experiences, some mistake and misunderstanding were unavoidable. Anyone who found any mistake or misunderstanding within this website, or if there's a copyright issue existed, feel free to send us a message via the mailbox listed below please.</p><span class=\"h5\">Thank you for your understanding and support.</span>","part3title":"网站维护人员","part3content":"<p>内容资料：XXX <a href=\"mailto:xxx@yyy.com\">xxx@yyy.com</a></p><p>技术维护：YYY <a href=\"mailto:yyy@yyy.com\">yyy@yyy.com</a></p>"};

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
    if (currentName.search(menuJSON[no].link) >= 0) {
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

/***/ "./js/de_airforce.json":
/*!*****************************!*\
  !*** ./js/de_airforce.json ***!
  \*****************************/
/*! exports provided: countries, weapons, default */
/***/ (function(module) {

module.exports = {"countries":[{"name":"德国","code":"de"},{"name":"美国","code":"us"},{"name":"英国","code":"uk"},{"name":"苏联","code":"ru"},{"name":"日本","code":"jp"}],"weapons":[{"model":"战斗机","link":"de_airforce_fighter","image":"","intro":"###"},{"model":"Me262","link":"de_airforce_me262","image":"imgs/de/army/de_army_tankiv_01.jpg","intro":"MP40冲锋枪（Maschinenpistole 40），常被称为“施迈瑟冲锋枪”，是一种为方便大量生产而设计，与传统枪械制造观念不同的冲锋枪，广泛应用于第二次世界大战期间纳粹德国军队。"},{"model":"Me222","link":"de_airforce_me222","image":"imgs/de/army/de_army_tankiv_01.jpg","intro":"MP44自动步枪被称为突击步枪之父,由德国于1941年-1942年间研制,并采用一种新型短弹。"},{"model":"轰炸机","link":"de_airforce_bomber","image":"","intro":"###"},{"model":"其他机种","link":"de_airforce_others","image":"","intro":"###"}]};

/***/ }),

/***/ "./js/de_army.json":
/*!*************************!*\
  !*** ./js/de_army.json ***!
  \*************************/
/*! exports provided: countries, weapons, default */
/***/ (function(module) {

module.exports = {"countries":[{"name":"德国","code":"de"},{"name":"美国","code":"us"},{"name":"英国","code":"uk"},{"name":"苏联","code":"ru"},{"name":"日本","code":"jp"}],"weapons":[{"model":"单兵装备","link":"de_army_personnelequipment","image":"","intro":"###"},{"model":"火炮","link":"de_army_artillery","image":"","intro":"###"},{"model":"坦克","link":"de_army_tank","image":"","intro":"###"},{"model":"Ⅰ号坦克","link":"de_army_tanki","image":"imgs/de/army/de_army_tanki_01.jpg","intro":"Ⅰ号坦克是德国在1934-1937期间生产的轻型坦克，战前作训练坦克用，二战爆发后改作作战坦克，第一次实战是1937年的西班牙内战，有约100辆A型坦克提供给弗朗哥的军队用，在战争中暴露了不少问题，装甲弱，整车防护能力低，发动机动力不足，机动能力差，驾驶舒适度差，由于舱盖合上后视野很差，所以作战时车长要探出炮塔观察导致伤亡。二战爆发后，尽管问题存在，但Ⅰ号坦克（包括Ⅱ号坦克)在闪击波兰和法国战役、入侵挪威和丹麦的战争、入侵苏联战争和北非战争中，不断成功地突破对方防线并进行快速的深纵迂回，显示了坦克作战的价值，发挥了很大作用。"},{"model":"Ⅱ号坦克","link":"de_army_tankii","image":"imgs/de/army/de_army_tankii_01.jpg","intro":"Ⅱ号坦克于1934年开始研制，样车（Pz.Kpfw Ⅱ Ausf a1) 完成于1935年10月，后经长达二年的不断改进，经过多个型号（a1. a2. a3.b.c)的测试,对传动轴、发动机布局、及装甲厚度等作了大量改动后，定型生产了A、B、C型，极大地提高了坦克的可靠性和稳定性。Ⅱ号A、B、C型坦克的基本参数区别不大，这3个型号的坦克一共生产了近1200辆，在二战初期，这些坦克是德军装甲部队的主力。随着后续的开发改良，后又生产了D/E型（快速攻击坦克）、F型、G型（轻型侦察坦克)、J型（VK.1601）（重装甲步兵坦克）、H型（VK.03）（轻型侦察坦克）、M型（VK.01）（轻型侦察坦克）和L型。"},{"model":"Ⅲ号坦克","link":"de_army_tankiii","image":"imgs/de/army/de_army_tankiii_01.jpg","intro":"Ⅲ号坦克从1936年开始定型量产，1939年已进入大产量期，由于最终量产的Ⅲ号坦克的悬挂系统改用了扭杆弹簧悬挂，使坦克的行进质量变得更好，在大大提高坦克行进机构的寿命同时，也大大提高了坦克炮射击的稳定性和准确性；在后期坦克换装50mm和75mm坦克炮后，火力更是大大增强，使该坦克成为了支援步兵作战的主力；Ⅲ号坦克乘员5人，炮塔3人，车身2人。Ⅲ号坦克一共生产了5600多辆，直到豹式坦克的投产才停止生产。由于Ⅲ号坦克的底盘的扭杆弹簧悬挂系统（世界第一次使用）的优越，其后在此底盘上产生了很多变形车（如在战场上战绩突出的Ⅲ号突击炮车）。"},{"model":"Ⅳ号坦克","link":"de_army_tankiv","image":"imgs/de/army/de_army_tankiv_01.jpg","intro":"Ⅳ号坦克是二战中、后期德军装甲部队的一种中型主战坦克，从1938年年初Ⅳ号A型坦克交付开始（Ⅳ号坦克的研制始于1934年），该型坦克的武器、装甲和动力系统不断改进，从A、B、C、D、E、F、G、H到J型，到1945年，德国一共生产了Ⅳ号系列坦克8500多辆，是二战期间德国生产数量最多的一种坦克。足足占德国二战时间坦克总产量的三分之一有多。Ⅳ号坦克一直在战斗中保持极高的战斗力，与苏军的T-34坦克对抗也不落下风。"},{"model":"Ⅴ号坦克","link":"de_army_tankv","image":"imgs/de/army/de_army_tankv_01.jpg","intro":"Ⅴ号（黑豹）坦克属重型坦克，它从1942年11月开始生产，首批生产的型号是D型，随后继续有改进后的A、G型（1944年并已着手研制豹式和豹式Ⅱ型，但因当时战争已进入德本土，生产已呈混乱状态，因此尽管样车已研制出来，但最终也未能量产）。Ⅴ号（黑豹）坦克一共生产了近6000辆，由于其有坚固的前装甲和火力强大的坦克炮，其优越的防护和作战性能受到德军的赞扬（苏军在库尔斯克战役后用缴获的一些豹式坦克进行测试，用一门7.62mm的T-34坦克炮在100m距离外对准豹式坦克的前装甲射击，射出的30发穿甲弹仅有一发能击穿其正面装甲；而豹式坦克的火炮却可以在1200-1500mm距离从正面击毁T-34坦克）。但该车由于太重所产生的机械故障和车侧装甲太薄等问题，故也一度影响了它作战能力的发挥。"},{"model":"装甲车辆","link":"de_army_armedvehicle","image":"","intro":"###"}]};

/***/ }),

/***/ "./js/de_army_tanki.json":
/*!*******************************!*\
  !*** ./js/de_army_tanki.json ***!
  \*******************************/
/*! exports provided: category, model, description, part1title, part1description, part1content, part2title, part2description, part2content, default */
/***/ (function(module) {

module.exports = {"category":[{"name":"德国","link":"de_shortcut"},{"name":"陆战武器","link":"de_army"},{"name":"坦克","link":"de_army#de_army_tank"}],"model":"Ⅰ号坦克","description":"<h6>综述：</h6><p>Ⅰ号坦克是德国在1934-1937期间生产的轻型坦克，战前作训练坦克用，二战爆发后改作作战坦克，第一次实战是1937年的西班牙内战，有约100辆A型坦克提供给弗朗哥的军队用，在战争中暴露了不少问题，装甲弱，整车防护能力低，发动机动力不足，机动能力差，驾驶舒适度差，由于舱盖合上后视野很差，所以作战时车长要探出炮塔观察导致伤亡。二战爆发后，尽管问题存在，但Ⅰ号坦克（包括Ⅱ号坦克）在闪击波兰和法国战役、入侵挪威和丹麦的战争、入侵苏联战争和北非战争中，不断成功地突破对方防线并进行快速的深纵迂回，显示了坦克作战的价值，发挥了很大作用。</p><p>Ⅰ号坦克是德国第一批大规模生产的坦克，是二战德国装甲史上一个重要起点，德军在Ⅰ号坦克上应用了焊接技术和无线电收发机进行通，这在当时还是铆接技术和旗语联络为主时代，显示了德国工程师突出的创造力和工艺水平。</p><p>Ⅰ号坦克有A.B.C.和F型，共生产了1400多辆，少部分A型与B型坦克改装为指挥坦克、喷火坦克、弹药运输车等。</p>","part1title":"系列型号","part1description":"","part1content":[{"image":"imgs/de/army/de_army_tanki_11.jpg","description":"<h6>Ⅰ号A型坦克（Sd.Kfz.101 Pz.Kpfw Ⅰ Aust.A）</h6><p>车重5.4t，长4.02m，宽2.06m，高1.72m，乘员2人，发动机为57马力，装甲厚度为6-13mm，负重轮4个，车速37km/h，行程145km；武器装备为二挺7.92mm的MG13机枪，携带弹药2250发，炮塔可通过手动作全方位转动。</p>","caption":"外形特点：1.履带中有4个负重轮2.负重轮后的诱导轮与其平排3.车后两侧挡泥板上各有1条排气管。"},{"image":"imgs/de/army/de_army_tanki_12.jpg","description":"<h6>Ⅰ号B型坦克（Sd.Kfz.101 Pz.Kpfw Ⅰ Aust.B）</h6><p>车重5.8t，长4.42m，宽2.06m，高1.72m，发动机为100马力，为6-13mm，负重轮5个，车速40km/h，行程约为170km；其余乘员、装甲厚度、武器装备与炮塔动作与A型相同。</p><p>Ⅰ号B型坦克从1935年8月投产到1937年6月停产，一共生产了675辆。</p>","caption":"外形特点：1.履带中有5个负重轮2.车后只有1条排气管固定在右后侧，管口向右伸出。"},{"image":"imgs/de/army/de_army_tanki_13.jpg","description":"<h6>Ⅰ号B型指挥坦克（克雷勒装甲指挥坦克）（Sd.Kfz.265 Pz.BfwgⅠ Aust.B）</h6><p>此坦克主要由B型坦克改装而来，改装部分有：拆除原有炮塔，换上一个固定的上部结构，从而可多容纳一台无线电台（超短波FUG 6），一位接线员和一张小的地图桌，另外配备一挺MG34机枪。从1935年开始，所生产的轻型指挥坦克（约200辆）全部分配给了装甲部队的连、营、团及旅的各级指挥部，至1940年入侵法国，德军装车师仍保有90多辆此类指挥坦克，但由于Ⅰ号坦克的缺点太多，在东线战场的苏联坦克面前，根本无法生存，由此慢慢被淘汰，不过在1941年北非战场上还有少量此类坦克在服役，直到1942年损失殆尽。</p>","caption":"外形特点：1.炮塔上有一个固定的结构。2.炮塔前方只配备一挺MG34机枪。3.炮塔侧面有一供乘员进出的舱口。"},{"image":"imgs/de/army/de_army_tanki_14.jpg","description":"<h6>Ⅰ号C型坦克（Sd.Kfz.101 Pz.Kpfw Ⅰ Aust.C）（VK.601）</h6><p>C型坦克的车重8t，长4.19m，宽1.92m，高1.94m，乘员2人，加大了装甲厚度（炮塔80mm、前车体与上层结构30mm），发动机增至150马力，最高车速约80km/h，最大行程约为300km，用20mm坦克炮（EW41火炮）替代了一挺MG机枪，武器火力大大增强。</p><p>该车主要作快速侦察坦克用，1942年生产了40辆。此车有2辆于43年交给了第一装甲师第1团，主要作战斗评估用；其余交给了第58装甲军的预备队驻扎在法国，后在1944年诺曼底战役和后来的战斗中全部被盟军摧毁或缴获。</p></p>VK.601是其测试车的命名。</p>","caption":"外形特点：1.此车改用平衡式交错负重轮（三个在内二个在外重叠交错）。2.炮塔伸出的管子是一长（炮）一短（机枪）。3.车体上前部的斜面有15mm高的管子（是坦克涉水时的通风口）。"},{"image":"imgs/de/army/de_army_tanki_15.jpg","description":"<h6>Ⅰ号F型坦克（VK.1801）</h6><p>型坦克由于加大了装甲厚度（炮塔、车前、上层结构均为80mm），使车的重量达到21t，由于车重原因，最高车速只有25km/h，最大行程也只有150km。此车长4.38m，宽2.64m，高2.05m，乘员2人，发动机增至150马力，装有两挺MG34机枪。</p><p>F型坦克的测试车在1940年6月完成，德军第一批购了30辆，42年5月，有5辆F型坦克交给了第66特别装甲营，在东线列宁格勒战场受第12装甲师第29团指挥，43年3月，有8辆F型坦克交给了第1装甲师第1装甲团在东线战斗，此外还有5辆在43年5月交给了驻扎在维也纳的第2宪兵装甲连，后随这支部队去东线战场作战。至44年8月，所有坦克全部损失。</p>","caption":"外形特点：1.车体两侧有圆形进出舱门（舱盖处常绘有“+”字图案）。2.车前有一个较大的驾驶员观察窗（与“虎式”坦克相同）。注：此坦克应属于重型步兵坦克"}],"part2title":"战场上的Ⅰ号坦克","part2description":"","part2content":[{"image":"imgs/de/army/de_army_tanki_21.jpg","description":"1939年9月波兰战役时正在公路行进中的二辆Ⅰ号A型坦克，在战争初期，这种坦克是德军装甲部队的重要装备。","caption":""},{"image":"imgs/de/army/de_army_tanki_22.jpg","description":"1940年5月进击比利时战斗中，第10装甲师第7团的一辆Ⅰ号A型坦克时正在比利时和卢森堡边界乡村中行走，炮塔上有第10装甲师的“野牛”师徽。","caption":""},{"image":"imgs/de/army/de_army_tanki_23.jpg","description":"1941年6月“巴巴罗萨”行动中，在苏联领土上推进的Ⅰ号A型坦克。","caption":""},{"image":"imgs/de/army/de_army_tanki_24.jpg","description":"一辆用Ⅰ号A型坦克改装的弹药运输坦克。这是将Ⅰ号A型坦克的炮塔拆掉，装上顶棚作弹药运输用，共改装了51辆，分配在各个装甲团的后勤维护连中，主要用在早期的战场上。42年有一批配备给了党卫军第1“阿道夫·希特勒党卫队警卫旗队”师。","caption":""},{"image":"imgs/de/army/de_army_tanki_25.jpg","description":"一辆Ⅰ号A型坦克改装的喷火坦克。它将右侧机枪拆卸，换装了一部40型火焰喷射器，并在炮塔内安装了火焰器用的燃料箱（内装7.5公升的易燃液体，可以喷射10-12次（每次1秒），最大射程为25m。","caption":""},{"image":"imgs/de/army/de_army_tanki_26.jpg","description":"1辆Ⅰ号B型坦克掩护德军步兵进攻。","caption":""},{"image":"imgs/de/army/de_army_tanki_27.jpg","description":"德军步兵与1辆Ⅰ号B型坦克在战斗中前进。","caption":""},{"image":"imgs/de/army/de_army_tanki_28.jpg","description":"波兰战役中，德国党卫军“帝国”师第7装甲团团部一辆Ⅰ号指挥坦克正在驶下尘土飞扬的乡村公路。","caption":""},{"image":"imgs/de/army/de_army_tanki_29.jpg","description":"东线战场上的一辆Ⅰ号指挥坦克（265）在先头部队撘好的简易桥梁上通过。","caption":""},{"image":"imgs/de/army/de_army_tanki_30.jpg","description":"德军第2宪兵装甲连装备的Ⅰ号F型坦克（炮塔旁有一个宪兵鹰徽），图中可以看到车体侧面的圆形舱的舱门上有一个铁十字标志。","caption":""}]};

/***/ }),

/***/ "./js/de_army_tankii.json":
/*!********************************!*\
  !*** ./js/de_army_tankii.json ***!
  \********************************/
/*! exports provided: category, model, description, part1title, part1description, part1content, part2title, part2description, part2content, default */
/***/ (function(module) {

module.exports = {"category":[{"name":"德国","link":"de_shortcut"},{"name":"陆战武器","link":"de_army"},{"name":"坦克","link":"de_army#de_army_tank"}],"model":"Ⅱ号坦克","description":"<h6>综述：</h6><p>Ⅱ号坦克于1934年开始研制，样车（Pz.Kpfw Ⅱ Ausf a1） 完成于1935年10月，后经长达二年的不断改进，经过多个型号（a1. a2. a3.b.c）的测试,对传动轴、发动机布局、及装甲厚度等作了大量改动后，定型生产了A、B、C型，极大地提高了坦克的可靠性和稳定性。Ⅱ号A、B、C型坦克的基本参数区别不大，这3个型号的坦克一共生产了近1200辆，在二战初期，这些坦克是德军装甲部队的主力。随着后续的开发改良，后又生产了D/E型（快速攻击坦克）、F型、G型（轻型侦察坦克）、J型（VK.1601）（重装甲步兵坦克）、H型（VK.03）（轻型侦察坦克）、M型（VK.01）（轻型侦察坦克）和L型（VK.1301）。</p><p>Ⅱ号坦克有三名乘员，驾驶员在车体，车长和装填手在炮塔，他们和驾驶员用通信管沟通；坦克内装有FUG型无线电。</p>","part1title":"系列型号","part1description":"","part1content":[{"image":"imgs/de/army/de_army_tankii_11.jpg","description":"<h6>Ⅱ号b型坦克（Sd.Kfz.121 Pz.Kpfw Ⅱ Ausf.B）</h6><p>Ⅱ号B型坦克属轻型坦克</p><p>车重8.9t，长4.8m，宽2.21m，高1.98m，装甲厚度为5-14.5mm，发动机为135马力，车速40km/h，行程200km；武器装备为1门20mm口径的Kwk30坦克炮，1挺MG34机枪。</p><p>Ⅱ号B型坦克从1937年12月开始生产，一共生产了约100辆。</p>","caption":"外形特点：悬挂系统内6个小负重轮轮用一条钢梁组合。另外，炮塔后部车体上有一凹位。"},{"image":"imgs/de/army/de_army_tankii_12.jpg","description":"<h6>Ⅱ号C型坦克（Sd.Kfz.121 Pz.Kpfw Ⅱ Ausf.C）</h6><p>Ⅱ号C型坦克属轻型坦克</p><p>该型坦克车重增至9.5t，悬挂系统改为由5个中型独立的负重轮组成，其它结构、参数与Ⅱ号B型坦克基本相同。Ⅱ号C型坦克从1938年6月开始大规模生产，至1940年4月一共生产了约1000辆。</p><p>这是德军在二战初期投入战斗最多的坦克。</p>","caption":"外形特点：悬挂系统内由5个中型独立的负重轮组成。另炮塔后部车体上也有一凹位。"},{"image":"imgs/de/army/de_army_tankii_13.jpg","description":"<h6>Ⅱ号D/E型坦克（Sd.Kfz.121 Pz.Kpfw Ⅱ Ausf.D/E）</h6><p>Ⅱ号D/E型坦克属快速轻型攻击坦克</p><p>车重10t，长4.6m，宽2.22m，高2m，装甲厚度为5-30mm，发动机为140马力，车速56m/h，行程200km；武器装备为1门20mm口径的Kwk L/35坦克炮，1挺MG34机枪。</p><p>它的悬挂系统内是4个双轮缘的大直径负重轮。原本用来装备轻装甲部队，但最后只生产了不到50辆。</p><p>Ⅱ号D/E型坦克主要装备于德军第2轻装师第66装甲营和第4轻装师第33装甲营。1940年3月起全部改装为喷火坦克。</p>","caption":"外形特点：悬挂系统内有4个大口径、独立的负重轮。"},{"image":"imgs/de/army/de_army_tankii_14.jpg","description":"<h6>Ⅱ号F型坦克（Sd.Kfz.121 Pz.Kpfw Ⅱ Aust.F）</h6><p>Ⅱ号F型坦克属轻型坦克</p><p>车重9.5t，长4.8m，宽2.21m，高2.18m，装甲厚度提高为15-35mm，发动机为135马力，车速40m/h，行程200km；武器装备为1门20mm口径的Kwk L/35坦克炮和1挺MG34机枪。</p><p>Ⅱ号F型坦克重新设计了指挥塔，从1941年3月开始生产，至1942年12月共生产了524辆，尽管此坦克在东线战场上面对苏军坦克已显落后，但由于当时德军美甲师正地快速扩张，所以也只得继续生产这种坦克以满足装备的需求。</p>","caption":"外形特点：1. 悬挂系统内有5个负重轮。2. 炮塔后部车体上有一凹位。"},{"image":"imgs/de/army/de_army_tankii_15.jpg","description":"<h6>Ⅱ号J型坦克（Sd.Kfz.121 Pz.Kpfw Ⅱ Aust.J）（VK.1601）</h6><p>J型坦克属重装甲步兵坦克</p><p>该车是在不改变轻型坦克的基本特征下所作的最大更新，其前装甲厚度增至80mm，两侧和尾部装甲增至50mm，顶部也增至25mm，由此车全重剧增为近18t，尽管改动机马力增至150马力，得车速也只有32km左右。</p><p>由于该车车速过慢，完全满足不了实战的需要，因此在1941年至1942年间只生产了20多辆即停产。</p><p>该型坦克曾参加了德军第116装甲师在法国境内的军事行动。</p>","caption":"外形特点：1. 悬挂系统内采用大型交迭式的负重轮。2. 炮塔侧面有一个供乘员进出的紧急舱口。"},{"image":"imgs/de/army/de_army_tankii_16.jpg","description":"<h6>Ⅱ号L型坦克（Sd.Kfz.123 Pz.Kpfw Ⅱ Aust.L）（VK.1301）</h6><p>L型坦克车重11.8t，长4.63m，宽2.48m，高2.21m，正面装甲厚度30mm，侧面装甲厚20mm，发动机180马力，最大车速60m/h；武器装备为1门20mm口径的Kwk38机关炮和1挺MG34机枪，后期提升为只配备一门50mm口径火炮；该坦克可搭载乘员4人。</p><p>L型坦克主要用作执行侦察任务用，该坦克从1943年9月至1944年1月共产生了100辆（原计划要生产800辆）。</p>","caption":"外形特点：1. 悬挂系统内采用交错式的负重轮（注意轮子的结构与J型不同）。2. 炮塔上方有二个供乘员进出的舱口。3.炮塔前只有1门火炮（后期型）。"},{"image":"imgs/de/army/de_army_tankii_17.jpg","description":"<h6>Ⅱ号喷火坦克</h6><p>该车是在D/E型坦克的底盘上加装一个六边形的小炮塔，炮塔只安装一挺MG34机枪，而喷火器安装在车体前方挡泥板两侧的可转动的小型喷火塔内，喷火塔后方是储有300多升专用燃料，可供喷射80次（每次2-3秒），车体后部装有烟雾弹发射器。</p><p>车重11t，最大装甲厚度为30mm。</p><p>Ⅱ号喷火坦克从1940年5月至10月共生产了约90辆，参加了“巴巴罗萨”行动，但战斗表现交不理想。</p>","caption":""},{"image":"imgs/de/army/de_army_tankii_18.jpg","description":"<h6>Ⅱ号架桥坦克</h6><p>该车是1939年2月在Ⅱ号A型坦克底盘上改装生产，并进行各种测试，但此车未见德军在战争中使用。</p>","caption":""},{"image":"imgs/de/army/de_army_tankii_19.jpg","description":"<h6>Ⅱ号工兵坦克</h6><p>该车是在Ⅱ号C型坦克底盘上改装而成，它拆除了炮塔（拆除后的炮塔被用在防御工事作炮台用），改用了一个大的木制货柜箱替代，上面复盖一层防水油布，该车可用来运载装备和士兵。</p>","caption":""},{"image":"imgs/de/army/de_army_tankii_20.jpg","description":"<h6>Ⅱ号两栖坦克</h6><p>该车是用Ⅱ号C型坦克改装而成，它在坦克车体两侧加装了浮架。图中两种不同浮架的两栖坦克分别由二个公司生产，上面一辆无安装外置螺旋浆，过水时需外力拖动；下面一辆安装了外置螺旋浆（由坦克改动机提供动力），过水时速有10km/h。</p><p>德军共改装了52辆两栖坦克，编入了为准备入侵英国而组建的两个特殊装甲营，后来由于入侵英国的“海狮计划”没有执行，1941年这二个营被编入第18装甲师第18装甲团参加了东线的战斗。</p>","caption":""},{"image":"imgs/de/army/de_army_tankii_21.jpg","description":"<h6>Ⅱ号爆破坦克</h6><p>该车是在Ⅱ号C型坦克的车体后部加装了一个伸展出来的特殊装置，装置后部挂着一个用来放置炸药的装甲箱子，作战时，该坦克会驶近目标，将炸药放出后驶离，然后用无线电或电线引爆炸药。</p><p>1940年5月，有二辆Ⅱ号爆炸坦克（隶属第58摩托化工兵营）加入了隆美尔的第7装甲师参加战斗。</p>","caption":""},{"image":"imgs/de/army/de_army_tankii_22.jpg","description":"<h6>Ⅱ号炮兵观察坦克</h6><p>炮兵部队由于缺乏战场目标观察与通讯车辆，在车体后部的发动机机舱上加装了一个FuG8型电台（外罩长方形金属容器），将其改装为炮兵观察坦克。</p>","caption":""}],"part2title":"战场上的Ⅱ号坦克","part2description":"<p>二战初期，Ⅱ号坦克是德军实施闪电战的主力，波兰战役爆发时，德军一线部队7个装甲师和2个轻装师共有1000多辆各型Ⅱ号坦克，在闪击波兰中，凭德军的战略战术的优势，Ⅱ号坦克取得不少战绩，但由于该坦克装甲薄弱，在波军的火炮和反坦克枪反击下，竟然损失了80多辆。</p><p>西线战役开始时，行军装甲部队仍有Ⅱ号坦克近1000辆，在进攻丹麦和挪威中Ⅱ号坦克的20mm火炮在支援步兵作战中发挥了很大作用，登陆后的战斗中只损失了2辆。在向西欧挺进中，尽管面对有装甲与火力优势的英、法坦克，但凭着灵活的战术和强有力的空中支持，取得了压倒性的胜利，不过面对对方厚装甲的重型坦克，Ⅱ号坦克是毫无办法，且由于装甲薄弱，Ⅱ号坦克损失了近200辆（1940年5月底统计）。</p><p>在巴尔干战役中，德军6个装甲师共有约260辆Ⅱ号坦克参加了战斗，一共只损失了13辆，但却有37辆在1941年5月运回德国的途中，因为撘载的船只被英军布置的水雷炸沉而沉没。1941年2月，近百辆Ⅱ号坦克跟随德军非洲兵团来到北非沙漠，但面对英军装甲部队，德军的Ⅱ号坦克质量与数量都显劣势，战斗中共损失了近60辆。</p><p>在东线战场上，面对苏军的T26和BT类轻型坦克，Ⅱ号坦克都占有优势，但对T34和KV系列就无能为力了，在侵苏战争初期（1941年6月至9月），德军共损失了152辆Ⅱ号坦克；Ⅱ号坦克后又继续参加了哈尔科夫和斯太林格勒战役，1942年5月在哈尔科夫战斗中，德军Ⅱ号坦克（属第23装甲师201装甲团第1营）有摧毁了1辆T34坦克的战例，直到库尔斯克战役，仍有近100辆Ⅱ号坦克在战场上，但基本上已退出第一线的战斗。</p>","part2content":[{"image":"imgs/de/army/de_army_tankii_31.jpg","description":"1939年9月在进攻波兰战斗中，掩护步兵前进的的Ⅱ号A型坦克。","caption":""},{"image":"imgs/de/army/de_army_tankii_32.jpg","description":"一辆Ⅱ号B型坦克，在战斗中带领士兵前进。","caption":""},{"image":"imgs/de/army/de_army_tankii_33.jpg","description":"由于大桥被炸断，这辆Ⅱ号C型坦克只能在河面择路行进。","caption":""},{"image":"imgs/de/army/de_army_tankii_34.jpg","description":"东线战场上，隶属德军第7装甲师第25装甲团的一辆Ⅱ号C型坦克正在大草原行进。","caption":""},{"image":"imgs/de/army/de_army_tankii_35.jpg","description":"一列行进在村庄路上的Ⅱ号C型坦克编队。","caption":""},{"image":"imgs/de/army/de_army_tankii_36.jpg","description":"一辆隶属德军第2装甲师的Ⅱ号C型坦克在阿登地区穿过河谷。","caption":""},{"image":"imgs/de/army/de_army_tankii_38.jpg","description":"1944年春天，第13宪兵装甲连的Ⅱ号J型坦克，该型坦克参与了在巴尔干地区的德军反游击作战。","caption":""},{"image":"imgs/de/army/de_army_tankii_39.jpg","description":"1941年到达班加西的Ⅱ号F型坦克，隶属于德军第15装甲师第8装甲团第8连，是支援隆美尔非洲军团的装甲部队。","caption":""},{"image":"imgs/de/army/de_army_tankii_37.jpg","description":"一群德军士兵在训练空隙和一辆Ⅱ号J型坦克的合照。","caption":""}]};

/***/ }),

/***/ "./js/de_army_tankiii.json":
/*!*********************************!*\
  !*** ./js/de_army_tankiii.json ***!
  \*********************************/
/*! exports provided: category, model, description, part1title, part1description, part1content, part2title, part2description, part2content, default */
/***/ (function(module) {

module.exports = {"category":[{"name":"德国","link":"de_shortcut"},{"name":"陆战武器","link":"de_army"},{"name":"坦克","link":"de_army#de_army_tank"}],"model":"Ⅲ号坦克","description":"<h6>综述：</h6><p>Ⅲ号坦克从1936年开始定型量产，1939年已进入大产量期，由于最终量产的Ⅲ号坦克的悬挂系统改用了扭杆弹簧悬挂，使坦克的行进质量变得更好，在大大提高坦克行进机构的寿命同时，也大大提高了坦克炮射击的稳定性和准确性；在后期坦克换装50mm和75mm坦克炮后，火力更是大大增强，使该坦克成为了支援步兵作战的主力；Ⅲ号坦克乘员5人，炮塔3人，车身2人。Ⅲ号坦克一共生产了5600多辆，直到豹式坦克的投产才停止生产。由于Ⅲ号坦克的底盘的扭杆弹簧悬挂系统（世界第一次使用）的优越，其后在此底盘上产生了很多变形车（如在战场上战绩突出的Ⅲ号突击炮车）。</p>","part1title":"系列型号","part1description":"","part1content":[{"image":"imgs/de/army/de_army_tankiii_11.jpg","description":"<h6>Ⅲ号A型坦克（Sd.Kfz.141 Pz.Kpfw Ⅲ Ausf.A）</h6><p>该型车由戴姆勒-奔驰公司设计，从1936年至1937年生产了10辆。它的车重为15.4t, 装甲厚度为5-14.5mm; 发动机为250匹马力, 车速约为32km；炮塔安装了1门37mm的坦克炮和同轴的MG机枪2挺，此外车身上还配备了1挺MG34机枪供无线电话务员使用。</p>","caption":"外形特点：1.悬挂系统有5个大直径的负重轮。2.炮塔有一门37mm坦克炮，炮塔下方车体有1挺MG34机枪。"},{"image":"imgs/de/army/de_army_tankiii_12.jpg","description":"<h6>Ⅲ号B型坦克（Sd.Kfz.141 Pz.Kpfw Ⅲ Ausf.B）</h6><p>该型车在1937年生产了15辆。相对A型车，它的驾驶舱作了一些修改，而悬挂系统的负重轮改用8个组成，故车在高速行进时，乘员会相对感到更舒适，B型车的发动机参数、武器配备与A型车基本相同。</p><p>但它由于存在与A型车相同的问题，也于1940年停止服役。</p>","caption":"外形特点：悬挂系统有8个小直径的负重轮。"},{"image":"imgs/de/army/de_army_tankiii_13.jpg","description":"<h6>Ⅲ号C型坦克（Sd.Kfz.141 Pz.Kpfw Ⅲ Ausf.C）</h6><p>该型车在1937年至1938年间生产，它对悬挂系统作了一些修改，其它参数与A型车基本相同。</p><p>该车服役时间也不长，1940年波兰战役后即退出战场。</p>","caption":"外形特点：与B型车一样，悬挂系统有8个小直径的负重轮。"},{"image":"imgs/de/army/de_army_tankiii_14.jpg","description":"<h6>Ⅲ号D型坦克（Sd.Kfz.141 Pz.Kpfw Ⅲ Ausf.D）</h6><p>该型车是Ⅲ号坦克最后一种预生产型，在1938年生产了30辆，它对悬挂系统作了一些小修改，车载燃油增加了一倍，前装甲也增加为30mm，武器配备与A型车基相同。</p><p>该车服役时间也不长，也是在1940年波兰战役后退出了战场。</p>","caption":"外形特点：1.与B型车一样，悬挂系统有8个小直径的负重轮。2.车体侧的附件与A/B/C型不同。"},{"image":"imgs/de/army/de_army_tankiii_15.jpg","description":"<h6>Ⅲ号D1型指挥坦克（Pz.Bfwg Ⅲ Ausf.D1）</h6><p>该型车是Ⅲ号指挥坦克在1938年与Ⅲ号D型坦克同时生产了30辆，所有参数与武器配备与Ⅲ号D型坦克完全相同，但在车体后部配置了增强通讯的天线。</p><p>该车也是在1940年波兰战役后退出了战场。</p>","caption":"外形特点：1.结构与D型车完全相同，但在车体侧部附件略有不同。2.车体后部配置了通讯天线。"},{"image":"imgs/de/army/de_army_tankiii_16.jpg","description":"<h6>Ⅲ号E型坦克（Sd.Kfz.141 Pz.Kpfw Ⅲ Ausf.E）</h6><p>该型坦克是Ⅲ号坦克第一种正式量产型号，其最大的改造是悬挂系统改用了扭杆弹簧悬挂，前、后端车轮装有减震装置，从而大大提高了坦克的质量，以后这一悬挂方式也成为该型坦克的标配。</p><p>该坦克车重19.5t, 长5m, 宽3m，高2m，属中型坦克；该车前装甲为30mm，发动机为320匹马力。</p>","caption":"外形特点：悬挂系统有6个独立的扭杆控制的负重轮。"},{"image":"imgs/de/army/de_army_tankiii_17.jpg","description":"<h6>Ⅲ号F型坦克（Sd.Kfz.141 Pz.Kpfw Ⅲ Ausf.F）</h6><p>该型坦克从1939年10月开始生产，前期产品参数与E型基本相同，后期产品则采纳了古德里安（德军闪电战的杰出将领）的意见，将37mm的坦克炮换装为50mm坦克炮，发射的炮弹重量是原来的3倍，使用穿甲弹可击穿500m距离的56mm厚的装甲钢板，穿透力提高近一倍，受到德军的极大好评。</p><p>此型坦克一共生产了近440辆，至1940年7月为止，大部份都参加了法国战役。</p>","caption":"外形特点：1.悬挂系统有6个独立的扭杆控制的负重轮。2.炮塔后部凸出（安装了一个工具箱）。"},{"image":"imgs/de/army/de_army_tankiii_18.jpg","description":"<h6>Ⅲ号G型坦克（Sd.Kfz.141 Pz.Kpfw Ⅲ Ausf.G）</h6><p>该型坦克在1940年5月投入生产，和F型基本相同；其中大部分已安装了50mm坦克炮。</p><p>G型坦克一共生产了450台，1941年德军非洲军团的Ⅲ号G型坦克换装了更大的散热器，以适应当地炎热的作战环境。</p>","caption":"外形特点：和F型坦克相比基本无差异，但车体后部的散热器加大了。"},{"image":"imgs/de/army/de_army_tankiii_19.jpg","description":"<h6>Ⅲ号H型坦克（Sd.Kfz.141 Pz.Kpfw Ⅲ Ausf.H）</h6><p>该型坦克在1940年底开始批量生产，相对以前的型号，它作了较大的改装，履带宽度从360mm增加到400mm，并采用了新的变速器，故障率大幅下降，且乘坐的舒适度也变得更好。另外该坦克的前方增加了一块30mm厚的装甲钢板，使当时盟军的坦克在交战距离范围内也无法将其击穿；不过改装后的该型坦克车重也增至近22t。</p><p>H型坦克生产数量不祥。</p>","caption":"外形特点：和F型坦克相比基本无差异，但履带宽度比以前型号宽了。"},{"image":"imgs/de/army/de_army_tankiii_20.jpg","description":"<h6>Ⅲ号J型坦克（Sd.Kfz.141 Pz.Kpfw Ⅲ Ausf.J）</h6><p>J型是Ⅲ号系列坦克中产量最多的一种坦克，从1941年3月到1942年7月一共生产了2616辆，1940年4月希特勒视察了该型坦克后，对其装备的42倍口径火炮不满意（50mm），同年8月颁布命令生产60倍口径的50mm火炮，此后在后期生产近千辆该型坦克上都改装了长身管的60倍口径的50mm坦克炮，换装后的火炮的炮弹出膛速度更快，穿甲能力更强，因而大大提高了坦克战斗力。此外，该型坦克装备了50mm厚的标准装甲，侧面装甲也达到了32mm。</p>","caption":"外形特点：和H型坦克相比基本无差异，但在车体后部安装了一块装甲钢板。"},{"image":"imgs/de/army/de_army_tankiii_21.jpg","description":"<h6>Ⅲ号K型坦克（Pz.Bfwg Ⅲ Ausf.K）</h6><p>该型坦克与J型基本相同，只是在装甲上有所加强，图中坦克加装了天线，多作指挥坦克用。</p>","caption":"外形特点：1.炮塔上安装了长身管的反坦克炮。2.车身后部安装有通讯天线。"},{"image":"imgs/de/army/de_army_tankiii_22.jpg","description":"<h6>Ⅲ号L型坦克（Sd.Kfz.141/1 Pz.Kpfw Ⅲ Ausf.L）</h6><p>该型坦克车身前的附加装甲为20mm厚，是Ⅲ号坦克标配装备；在后期生产的坦克上，改装了75mm短身坦克炮，使该型坦克的攻击力大大增强。</p><p>1942年到1943年，德军北非军团配备有此型坦克，但为了适应炎热的天气，坦克换装了更大的燃油过滤装置，并改装了发动机盖和散热风扇的检修孔，而为了避免行走沙漠时扬起的沙尘，在尾部排气孔下还安装了金属板。</p>","caption":"外形特点：车体后部的散热器移装在发动机后挡板上方的中央。"},{"image":"imgs/de/army/de_army_tankiii_23.jpg","description":"<h6>Ⅲ号M型坦克（Sd.Kfz.141/1 Pz.Kpfw Ⅲ Ausf.M）</h6><p>该型坦克是L型坦克的改装型，在1942年底开始量产，当时，德军的装甲师不断增加，对坦克的需求越来越大，为了尽快提高坦克的产量，原来坦克的观察孔、手枪孔取消了，坦克车体侧面只留下一个逃生舱门外，其它都取消了，引改造虽然对乘员有些不便，但却使坦克的防护性能得到了提高。后为了加强对巴祖卡反坦克武器的防御，车身侧面也加装了侧翼防护甲。此外，该型坦克对全车进行了水密设计改装，从而使坦克具备了一定的涉水能力，能安全渡过13mm深的河流和沼泽。</p>","caption":"外形特点：1.车体侧面加装了防护装甲钢板。2.车体尾部改装了不同结构的排气管。"},{"image":"imgs/de/army/de_army_tankiii_24.jpg","description":"<h6>Ⅲ号N型坦克（Sd.Kfz.141/21 Pz.Kpfw Ⅲ Ausf.N）</h6><p>这是Ⅲ号坦克最后的一个生产型号，1943年1月成品下线，除了安装了24倍口径的短身管75mm的坦克炮外，其它结构与装备和M型坦克基本上无差别。</p><p>该型号坦克又称Ⅲ号突击坦克，弹药携带量有了大幅增加（75mm坦克炮炮弹64发，机枪子弹3450发）。</p><p>该型坦克在其最后生产年份（1943年）共生产了不足100辆，但此时从战场上的反馈，德军发现Ⅲ号坦克的性能已不能满足战斗的需求，逐渐转作后援坦克。</p>","caption":"外形特点：1.炮塔安装的是短身管反坦克炮。2.车体侧面加装了防护装甲钢板。"}],"part2title":"战场上的Ⅲ号坦克","part2description":"<p>Ⅲ号坦克是德军装甲师在战争早期配备的主力坦克之一，参加了二战初、中期各战场的战斗。二战爆发，已有部分B、C、D型坦克随德军第1、2、3装甲师参加了波兰战役，在1940年4、5月间，又有少量D型坦克配备给德军第40特种坦克营参加入侵丹麦和挪威的战斗；在法国战役中，Ⅲ号坦克表现出色，但也暴露了火力不足等问题，尽管后来改装了更大口径的坦克炮，但在苏联战场上仍难敌苏军的T-34坦克，而后在北非战场上也输于美军的M4坦克，最终德军将其装上短管75mm火炮，不再直接与对方的坦克交战，而作为火力支援坦克用。</p><p>Ⅲ号坦克改型有潜水坦克、喷火坦克、工兵坦克、运输坦克、指挥坦克和炮兵观察坦克等。</p>","part2content":[{"image":"imgs/de/army/de_army_tankiii_31.jpg","description":"一辆行进中的Ⅲ号D型坦克。该坦克可搭载乘员5人，图中3人为驾驶员、炮手和指挥员，这辆坦克的序号最后一位数字是“1”，表示这辆坦克是连长的座驾。","caption":""},{"image":"imgs/de/army/de_army_tankiii_32.jpg","description":"法国战役中，德军第3装甲师的一辆正在过桥的Ⅲ号E型坦克。","caption":""},{"image":"imgs/de/army/de_army_tankiii_33.jpg","description":"法国战役中，德军一辆正在行进的Ⅲ号E型坦克。远处可见一辆法军遗弃的军官用的高级小轿车。","caption":""},{"image":"imgs/de/army/de_army_tankiii_34.jpg","description":"“巴巴罗萨”行动中，德军一辆Ⅲ号E型坦克正在一条由工兵临时搭建的便桥上急速通过。侵苏战争开始时，德军三大集团军共有1400多辆Ⅲ号坦克。","caption":""},{"image":"imgs/de/army/de_army_tankiii_35.jpg","description":"“巴巴罗萨”行动中，德军一辆Ⅲ号E型坦克正在一条由工兵临时搭建的便桥上急速通过，侵苏战争开始时，德军三大集团军共有1400多辆Ⅲ号坦克。","caption":""},{"image":"imgs/de/army/de_army_tankiii_36.jpg","description":"1941年11月，在苏联南部作战的德军Ⅲ号G型坦克。","caption":""},{"image":"imgs/de/army/de_army_tankiii_37.jpg","description":"1941年，苏联领土上正在集结的德军Ⅲ号J型坦克。<br>J型坦克是各型号Ⅲ号坦克中产量最多的，也是德军装甲部队的主力。","caption":""},{"image":"imgs/de/army/de_army_tankiii_38.jpg","description":"1942年夏天，德军第1和第4集团群向俄罗斯南部平原突进的一支部队。图中是一辆Ⅲ号J型坦克，装备了50mm的 Kw.K L/60火炮；在车身前还安装了额外的履带防护。","caption":""},{"image":"imgs/de/army/de_army_tankiii_39.jpg","description":"1941年10月，一辆德军Ⅲ号J型坦克在正渡过苏联杰斯纳河的浅滩。","caption":""},{"image":"imgs/de/army/de_army_tankiii_40.jpg","description":"一队德军Ⅲ号J型坦克正赶往前线参加库尔斯克坦克大战。","caption":""},{"image":"imgs/de/army/de_army_tankiii_41.jpg","description":"一辆德军Ⅲ号K型改装的指挥坦克。坦克上已经完成“星”形天线的安装。","caption":""},{"image":"imgs/de/army/de_army_tankiii_42.jpg","description":"1942至1943年，德军非洲军团装备的一辆德军Ⅲ号N型（热带）坦克，坦克已对散热器进行了改良，并加装挡板防沙尘。","caption":""},{"image":"imgs/de/army/de_army_tankiii_43.jpg","description":"N型坦是德军Ⅲ号坦克的最后一种型号，坦克已采用了Ⅳ号坦克的炮塔，主炮为短身管的75mm坦克炮。","caption":""}]};

/***/ }),

/***/ "./js/de_army_tankiv.json":
/*!********************************!*\
  !*** ./js/de_army_tankiv.json ***!
  \********************************/
/*! exports provided: category, model, description, part1title, part1description, part1content, part2title, part2description, part2content, default */
/***/ (function(module) {

module.exports = {"category":[{"name":"德国","link":"de_shortcut"},{"name":"陆战武器","link":"de_army"},{"name":"坦克","link":"de_army#de_army_tank"}],"model":"Ⅳ号坦克","description":"<h6>综述：</h6><p>Ⅳ号坦克是二战中、后期德军装甲部队的一种中型主战坦克，从1938年年初Ⅳ号A型坦克交付开始（Ⅳ号坦克的研制始于1934年），该型坦克的武器、装甲和动力系统不断改进，从A、B、C、D、E、F、G、H到J型，到1945年，德国一共生产了Ⅳ号系列坦克8500多辆，是二战期间德国生产数量最多的一种坦克。足足占德国二战时间坦克总产量的三分之一有多。Ⅳ号坦克一直在战斗中保持极高的战斗力，与苏军的T-34坦克对抗也不落下风。</p>","part1title":"系列型号","part1description":"","part1content":[{"image":"imgs/de/army/de_army_tankiv_11.jpg","description":"<h6>Ⅳ号A型坦克（Sd.Kfz.161 Pz.Kpfw Ⅳ Ausf.A）</h6><p>Ⅳ号A型坦克在1938年3月完成了35辆样车并交付德军作训练用。该车发动机为250匹马力，车速为30km/h; 乘员5人。配备武器为一门75mm的KwK L/24短身管坦克炮和二挺MG机枪。</p>","caption":"外形特点：1.悬挂系统中有8个负重轮，每2个为一组，每组中有1个橡胶轮，通过板簧结构连在一起，前端是主动轮，后端是诱导轮，上方有4个的托带轮。2.炮长指挥塔呈鼓形（带8个观察口）。3.车体前左边部分比右边凸起（使驾驶员位置比无线通讯员靠前）。"},{"image":"imgs/de/army/de_army_tankiv_12.jpg","description":"<h6>Ⅳ号B型坦克（Sd.Kfz.161 Pz.Kpfw Ⅳ Ausf.B）</h6><p>Ⅳ号B型坦克一共生产了42辆，并交付给德军装甲师参加了波兰战役。该车安装了320匹马力的发动机，变速箱也作了改进，相对A型车动力大大提高；该车装甲厚度从14.5mm增加至30mm。武器、悬挂系统等与A型车相同。</p>","caption":"外形特点：车体前总改为一直线，2.炮塔的枪孔从A型的方形改为圆形。"},{"image":"imgs/de/army/de_army_tankiv_13.jpg","description":"<h6>Ⅳ号C型坦克（Sd.Kfz.161 Pz.Kpfw Ⅳ Ausf.C）</h6><p>Ⅳ号C型坦克在1938至1939年间一共生产了134辆，大部分参加了波兰战役。该车炮塔加装了装甲护套，后期生产的坦克（约100辆）改用了300马力的发动机，进一步提高了防护与动力。其它结构与装备与B型车基本相同。</p>","caption":"外形特点：从外观上与B型车完全相同。"},{"image":"imgs/de/army/de_army_tankiv_14.jpg","description":"<h6>Ⅳ号D型坦克（Sd.Kfz.161 Pz.Kpfw Ⅳ Ausf.D）</h6><p>Ⅳ号D型坦克在1939年9月完成设计，车重20t, 车身长5.92m, 车宽2.84m, 车高2.68m；车体外形上相对C型车作了一些变化（车体前部与A型相似，驾驶员位置靠前），该型车战前计划生220辆，但直到战争爆发也未能完成。此车在入侵波兰的实战中暴露了装甲薄弱的问题，从而使下一型号坦克加大了装甲防护。</p>","caption":"外形特点：1.车体前部与A型车相似。2.车体尾部改装了另一种拖拉装置。"},{"image":"imgs/de/army/de_army_tankiv_15.jpg","description":"<h6>Ⅳ号E型坦克（Sd.Kfz.161 Pz.Kpfw Ⅳ Ausf.E）</h6><p>1940年底，Ⅳ号E型坦克投产，到1941年4月，共生产了223辆。该型坦克的重点是加强装甲防护，车体前端装甲换装成50mm厚（加装了30mm附加装甲），炮塔与侧装甲则加装20mm钢板，排气口也加装了装甲保护，从而大大加强了坦克整体的抗弹能力。为了承受国策的增加，坦克履带也加宽到400册。</p><p>该型坦克配备给德军装甲部队后，参加了巴尔干战役以后的全部战斗，1941年进入北非战场，在与英军坦克作战中表现突出。</p><p>该型坦克在1944年退役。</p>","caption":"外形特点：1.车体前部与A型车相似。2.没有了原D型坦克炮塔顶部右面的信号口和中央的换气口，改在右前部安装了一个内置吸气风扇的圆形防护罩。"},{"image":"imgs/de/army/de_army_tankiv_16.jpg","description":"<h6>Ⅳ号F1型坦克（Sd.Kfz.161 Pz.Kpfw Ⅳ Ausf.F1）</h6><p>由于苏联战场上急需大量能够与苏式坦克对抗的Ⅳ号坦克，在多间德国坦克生产厂的努力下，在194年4月至1942年3月不到一年的时间内，就生产了462辆Ⅳ号F1型坦克（原定名为F）交付给德军装甲部队（后有25辆改装为F2型）。这批坦克安装的仍是75mm短身管坦克炮，但车体与炮塔的装甲已实现直接用单块钢板制作，防护能力比过去用螺栓固定的附加装甲得到提高。该坦克为了应对苏联的冬季，对履带作了防滑处理，以方便在冰上行驶。</p><p>该型坦克有200多辆参加了1942年东线战场的夏季攻势，由于不断战损，到了库尔斯克坦克大会战时，只剩下60辆左右。</p><p>F1型坦克长5.92m, 宽2.84m, 高2.68m, 车重22.3t。最大车速为42km/h，最大行程为200km。</p>","caption":"外形特点：1.车体前部又改为直线形。2.炮塔侧面的舱门从1扇门改为对开的2扇门，并设置了观察孔和枪眼。"},{"image":"imgs/de/army/de_army_tankiv_17.jpg","description":"<h6>Ⅳ号F2型坦克（Sd.Kfz.161/1 Pz.Kpfw Ⅳ Ausf.F2）</h6><p>为了对付东线战场上苏军T-34坦克的威胁，在希特勒的命令下，Ⅳ号F2型坦克全部换装了长身管的75mm K.wK L/43坦克炮，其炮口并装了制退器，并换装了新瞄具，弹药装载量也从80发增至87发。由于长身管坦克炮的炮弹出膛速度从短身管炮的385m/s上升至740m/s，大大提高了穿甲能力（使用同样的穿甲榴弹，1000m内穿甲厚度从41mm提高至72mm）。为了增加防护，坦克车体正面下方与正面用履带板，车体侧部用负重轮作附加装甲。</p><p>从东线战场上的实战情况来看，德军装甲部队自装备F2型坦克后，才有了真正与苏T-34坦克对抗的能力。</p><p>Ⅳ号F2型坦克 1942年3月至7月共生产了175辆。</p>","caption":"外形特点：1.坦克换装了长身管火炮，炮口并装了制退器。2.车体增加了履带板和负重轮等附加防护。"},{"image":"imgs/de/army/de_army_tankiv_18.jpg","description":"<h6>Ⅳ号G型坦克（Sd.Kfz.161 Pz.Kpfw Ⅳ Ausf.G）</h6><p>针对实战中发现的问题， 并总结Ⅳ号系列多个车型的生产经验， Ⅳ号G型坦克的内外结构都作了不少改进，炮塔顶盖从10mm 增至15mm，车体前方加装30mm厚的附加装甲，炮塔和车体两侧加装了防护钢板（装甲侧裙板），使坦克面对盟军的“巴祖卡”反坦克火箭筒的攻击时也有了抵挡能力。在 1942年后生产的412辆Ⅳ号G型坦克还换装了威力更大、穿甲能力更强的75mm KwK L/48长身管坦克炮。</p><p>Ⅳ号G坦克一共生产了1687辆。是德军装甲部队在二战中后期的主力战车之一。</p><p>F1型坦克长6.62m, 宽2.88m, 高2.68m, 车重23.5t。最大车速为40km/h，最大行程为210km。</p>","caption":"外形特点：1.与F2坦克一样配备了带炮口制退器的长身管火炮。2.车体增加了履带板、负重轮或侧裙钢板等附加防护。"},{"image":"imgs/de/army/de_army_tankiv_19.jpg","description":"<h6>Ⅳ号H型坦克（Sd.Kfz.161/2 Pz.Kpfw Ⅳ Ausf.H）</h6><p>Ⅳ号H型坦克车重26t。长7.02m, 宽2.88m, 高2.68m, 最大车速为38km/h，最大行程为210km。乘员5人，越壕宽度2.2m，涉水深度1.2m，可爬30度坡。</p><p>H型在G型车基础上作了进一步的改进，车体前部装甲直接采用80mm厚钢板成型，对车长指挥塔的装甲也作了加强，炮塔和车体两侧全部加装了防护钢板（装甲侧裙板），从而大大提高了坦克的防护能力。该型坦克还准备了冬季专用履带和近战反步兵的高爆榴弹，增强了实战能力。</p><p>Ⅳ号H型坦克产量很大，从1943年4月开始投产后到1944年7月，一共生产了3774辆，作为主力坦克，一直跟随德军装甲部队战斗到二战结束。</p><p>图中是1943年7月在东线库尔斯克地区作战的三辆Ⅳ号H型坦克，分别属于SS第1党卫装甲师（上）；第2装甲师第3坦克团（中）；第20装甲师（下）。</p>","caption":"外形特点：1.与F2坦克一样配备了带炮口制退器的长身管火炮。2.车体两侧全部加装侧裙钢板作附加装甲。"},{"image":"imgs/de/army/de_army_tankiv_20.jpg","description":"<h6>Ⅳ号J型坦克（Sd.Kfz.161/2 Pz.Kpfw Ⅳ Ausf.J）</h6><p>这是Ⅳ号系列坦克的最后一个生产型号，在战争后期，为了加快坦克生产，该型坦克将炮塔上的观察孔全部取消，并去除了炮塔的电动旋转装置，从而使炮塔的生产简单化，同时也减轻了坦克的车重。在加装了一个燃油箱后，该型车的最大行程增加至322km。</p><p>J型坦克的结构与装备与H型基本相同。直到二战结束，一共生产了1700辆。</p>","caption":"外形特点：除了炮塔取消观察孔外，其它外形结构与H型相同。"},{"image":"imgs/de/army/de_army_tankiv_21.jpg","description":"<h6>Ⅳ号扫雷坦克</h6><p>基于Ⅳ号系列改装的部分变形坦克之一。</p>","caption":""},{"image":"imgs/de/army/de_army_tankiv_22.jpg","description":"<h6>Ⅳ号弹药运输坦克</h6><p>基于Ⅳ号系列改装的部分变形坦克之一。</p>","caption":""},{"image":"imgs/de/army/de_army_tankiv_23.jpg","description":"<h6>Ⅳ号架桥坦克</h6><p>基于Ⅳ号系列改装的部分变形坦克之一。</p>","caption":""},{"image":"imgs/de/army/de_army_tankiv_24.jpg","description":"<h6>Ⅳ号潜水坦克</h6><p>基于Ⅳ号系列改装的部分变形坦克之一。</p><p>这是1940年改造的42辆Ⅳ号潜水坦克中的一辆，这种坦克全车都作了水密和防水措施。这辆坦克后面的油桶是临时安装的。</p>","caption":""}],"part2title":"战场上的Ⅳ号坦克","part2description":"<p>Ⅳ号系列坦克最早参加的战斗是在入侵波兰的战场上，其中有B、C、D型等早期型坦克，但当时产量较少，故参加战斗的数量不多，但战斗表现不错，受到德军将领的好评。西线战役开始，德军投入的坦克2500多辆，其中Ⅳ号坦克只有270多辆，但已起到主力坦克的作用。此后Ⅳ号坦克参加了东线战场上的各场重大战役，并参加了北非战场、西线反击盟军的各场战斗；Ⅳ号系列坦克通过不断的改造，特别是后期生产数量庞大的各型坦克（F、G、H、J型）加装了更厚的防护装甲，并换装了75mm长身管坦克炮后，在与苏军T-34坦克和盟军M3中型坦克的对抗中已不落下风。直至二战结束，Ⅳ号坦克一直都担当着德军装甲部队的主力。</p>","part2content":[{"image":"imgs/de/army/de_army_tankiv_31.jpg","description":"一队行进中的Ⅳ号C型坦克。","caption":""},{"image":"imgs/de/army/de_army_tankiv_32.jpg","description":"一辆与Ⅲ号坦克（后）进行协同作战的Ⅳ号D型坦克（前）。","caption":""},{"image":"imgs/de/army/de_army_tankiv_33.jpg","description":"一辆在东线作战的Ⅳ号E型坦克，它正停在苏联一条公路边，坦克舱门已全部打开。","caption":""},{"image":"imgs/de/army/de_army_tankiv_34.jpg","description":"战斗在北非战场上的Ⅳ号E型坦克。","caption":""},{"image":"imgs/de/army/de_army_tankiv_35.jpg","description":"一辆隶属第德军第20装甲师的Ⅳ号F1型坦克。注意:这是一辆早期生产的F1型，仍旧配备的是短管炮坦克炮。","caption":""},{"image":"imgs/de/army/de_army_tankiv_38.jpg","description":"1942年7月，两辆Ⅳ号G型坦克带领着一支坦克部队（后面跟随的是Ⅲ号坦克）在俄罗斯南部平原上穿行；Ⅳ号G型坦克装备的75mm Kw.K40 L/43长身管坦克炮给予了该坦克在远距离击毁苏军T-34坦克的能力。","caption":""},{"image":"imgs/de/army/de_army_tankiv_37.jpg","description":"非洲军团的一辆Ⅳ号G型坦克，坦克车体前部堆了不少沙包加强防护。","caption":""},{"image":"imgs/de/army/de_army_tankiv_36.jpg","description":"拍摄于1943年初夏的一辆Ⅳ号F2型坦克，坦克已换装炮口带有制退器的75mm长身管坦克炮。","caption":""},{"image":"imgs/de/army/de_army_tankiv_39.jpg","description":"1943年冬天，一队正在赶赴苏联哈尔科夫前线中的Ⅳ号H型坦克。","caption":""},{"image":"imgs/de/army/de_army_tankiv_40.jpg","description":"一辆与503重装装甲营的虎式坦克（后）协同作战的德军第七装甲师的Ⅳ号H型坦克（前）。注意:这辆Ⅳ号H型坦克车体两侧已装上了侧裙式装甲保护。","caption":""},{"image":"imgs/de/army/de_army_tankiv_41.jpg","description":"在苏联库尔斯克坦克大战中，隶属德军第二装甲师的一辆Ⅳ号H型坦克。注意：这辆坦克车体前方装上了履带板作附加装甲防护。","caption":""},{"image":"imgs/de/army/de_army_tankiv_42.jpg","description":"“D日”（诺曼底登陆）当天，在法国乡村公路上正向前线支援的SS第2装甲团第2营的一辆Ⅳ号H型坦克。注意：坦克车体前放置的一面德军标志旗是用作对空识别用。","caption":""},{"image":"imgs/de/army/de_army_tankiv_43.jpg","description":"1945年在东线反攻的战场上，被苏军击毁的一辆Ⅳ号J型坦克。","caption":""},{"image":"imgs/de/army/de_army_tankiv_44.jpg","description":"一辆在西线战场上被美军击毁的Ⅳ号J型坦克。注意：一辆美军的推土机正在后面作业，准备将坏坦克推开以清除前进的障碍。","caption":""}]};

/***/ }),

/***/ "./js/de_army_tankv.json":
/*!*******************************!*\
  !*** ./js/de_army_tankv.json ***!
  \*******************************/
/*! exports provided: category, model, description, part1title, part1description, part1content, part2title, part2description, part2content, default */
/***/ (function(module) {

module.exports = {"category":[{"name":"德国","link":"de_shortcut"},{"name":"陆战武器","link":"de_army"},{"name":"坦克","link":"de_army#de_army_tank"}],"model":"Ⅴ号坦克","description":"<h6>综述：</h6><p>Ⅴ号（黑豹）坦克属重型坦克，它从1942年11月开始生产，首批生产的型号是D型，随后继续有改进后的A、G型（1944年并已着手研制豹式和豹式Ⅱ型，但因当时战争已进入德本土，生产已呈混乱状态，因此尽管样车已研制出来，但最终也未能量产）。Ⅴ号（黑豹）坦克一共生产了近6000辆，由于其有坚固的前装甲和火力强大的坦克炮，其优越的防护和作战性能受到德军的赞扬（苏军在库尔斯克战役后用缴获的一些豹式坦克进行测试，用一门7.62mm的T-34坦克炮在100m距离外对准豹式坦克的前装甲射击，射出的30发穿甲弹仅有一发能击穿其正面装甲；而豹式坦克的火炮却可以在1200-1500mm距离从正面击毁T-34坦克）。但该车由于太重所产生的机械故障和车侧装甲太薄等问题，故也一度影响了它作战能力的发挥。</p>","part1title":"系列型号","part1description":"","part1content":[{"image":"imgs/de/army/de_army_tankv_11.jpg","description":"<h6>Ⅴ号（黑豹）D型坦克（Sd.Kfz.171 Pz.Kpfw.V Ausf.D Panther）</h6><p>该型车在1942年11月开始生产，至1943年9月 一共生产了860多辆。</p><p>D型车身长8.86m, 车宽3.4m, 车高2.95m, 车重43t；装甲厚度16-100mm；发动机230马力，最大车速46km/h, 最大行程200km; 主要武器为一门75mm KW.K L/70坦克炮，2挺7.92mm MG34机枪，乘员5人。</p><p>初期生产的D型车由于履带、悬挂系统和动力系统都存在一定问题，因此在初期战争中，抛锚率十分高。</p>","caption":"外形特点：1.悬挂系统内使用重迭式负重轮。2.车体两侧安装了整块的装甲钢板。3.烟雾发生器安装在炮塔顶部两侧。"},{"image":"imgs/de/army/de_army_tankv_12.jpg","description":"<h6>Ⅴ号（黑豹）A型坦克（Sd.Kfz.171 Pz.Kpfw.V Ausf.A Panther）</h6><p>该型车于1943年8月开始生产，总生产量接近1800辆。</p><p>A型车除车重（44.8t)和正面装甲厚度（110mm)略有增加外，其余都与D型车基本相同。开始的A型坦克都涂有防磁的水泥涂层，以防磁性地雷或磁性手雷的攻击（不过在1944年后期取消了），它针对D型车在战斗中发现的弱点对动力系统进行了改进，提高了它的可靠性；它还加强了武器装备，增加了一挺高射机枪，当受到空中威胁时，可操纵对空机枪实施空中防卫。中后期生产的坦克还将机枪孔改装为新式的球形机枪座。</p>","caption":"外形特点：1.取消了炮塔顶部两侧的烟雾发生器，改在炮塔顶部安装一个短管的榴弹发射器，可发射榴弹和烟雾弹。2.车体正面还保留观察窗，但有些坦克的机枪孔已换成球形机枪座。"},{"image":"imgs/de/army/de_army_tankv_13.jpg","description":"<h6>Ⅴ号（黑豹）G型坦克（Sd.Kfz.171 Pz.Kpfw.V Ausf.G Panther）</h6><p>该型车生产于1944年3月至1945年4月，一共生产了3740辆。是二战末期产量最大的坦克。</p><p>G型坦克主要在装甲上进行了加强，它的正面装甲的倾斜度更大，车体两侧的装甲钢板厚度从40mm增加至50mm。炮弹的数量也从79发增加至82发。该型坦克已全部安装了球形机枪座和更先进的瞄准器。</p>","caption":"外形特点：1. 车体前部的观察孔已取消，用驾驶舱顶部的可旋转潜望镜替代。2. 车体前部的机枪座为球形机枪座。"},{"image":"imgs/de/army/de_army_tankv_14.jpg","description":"<h6>Ⅴ号（黑豹）F型坦克（Sd.Kfz.171 Pz.Kpfw.V Ausf. F Panther）</h6><p>这是黑豹系列坦克的最终型号，特点是炮塔更窄，装甲更厚，1945年1月该车正式定型，但在准备量产时，德国已战败投降。</p>","caption":""},{"image":"imgs/de/army/de_army_tankv_15.jpg","description":"<h6>Ⅴ号（黑豹）Ⅱ型坦克（ Pz.Kpfw. Panther Ⅱ）</h6><p>设计思想是要将黑豹坦克升级，在豹Ⅰ动力系统基础上，让部分配件与虎Ⅱ部件通用，并加强装甲与武器火力，但到1945年德国战败时，只完成了2辆原型车，二战结束后此车被运到美国的坦克博物馆里（见图：刚抵达时，此车还可开动，但由于专用的窄型炮塔已损坏，只能用黑豹G型坦克的炮塔替代）。</p>","caption":""},{"image":"imgs/de/army/de_army_tankv_16.jpg","description":"<h6>Ⅴ号豹式指挥坦克（Sd.Kfz.267和268 Bef.Pzwg.Panther）</h6><p>这是在D、A或G型坦克上安装上无线收发器和天线后，作为指挥车使用的坦克。267和268只是所安装的无线收发器有型号不同。</p>","caption":""},{"image":"imgs/de/army/de_army_tankv_17.jpg","description":"<h6>Ⅴ号豹式维修坦克（Sd.Kfz.179  Bergepanzer.Panther）</h6><p>这是为了解决战损的重型坦克的维修和回收问题所生产，它拆除了豹式坦克的炮塔，在车体上安装 了40t的绞盘和1.5t的起重机，并在车后加装了一个大铲；车上有支撑架安放一挺机枪。此型维修坦克从1943年6月开始生产，至1945年3月共生产了350多辆，其中在D型基础上改装12辆，A型基础上改装了232辆，G型基础上改装了107辆。这种维修车在战损坦克的维修和回收中发挥了极大作用，在每个黑豹坦克营中都会配备2辆（但也难以满足战场要求）。</p>","caption":""}],"part2title":"战场上的Ⅴ号（黑豹）坦克","part2description":"<p>1943年7月，在苏联的库尔斯克Ⅴ号（黑豹）坦克首次参加了战斗，但由于初期生产的D型坦克的机械问题，参加战斗测试的200辆黑豹坦克（隶属第10装甲旅）第一天就有100多辆因抛锚退出了战场，9天后只剩下40多辆仍能参加战斗；但后来随着坦克的不断改进，黑豹坦克在东线、意大利、西欧和北欧的战斗中，因其前装甲的坚固和火炮的强大威力，战绩突出，受到德军的赞扬，一直到二战结束，它与虎式坦克一起，成为德军对抗对方重型坦克的主力装备。</p><p>在诺曼第战役中，参战的黑豹A型坦克在反击中对盟军造成很大威胁，美军甚至认为：要有效对抗一辆黑豹坦克，美军必须要投入5辆M坦克进行攻击。在与Ⅳ号坦克协同作战时，黑豹坦克会作装甲编队的侧翼保护用；到了1945年，在意大利防线和柏林战役中，德军还利用黑豹坦克的炮塔修建防御炮台（混凝土工事），用威力强大的坦克炮抗击对方装甲部队的进攻。</p>","part2content":[{"image":"imgs/de/army/de_army_tankv_31.jpg","description":"1943年，在苏联库尔斯克战役中首次亮相的Ⅴ号（黑豹）D型坦克，一位指挥官正在指挥坦克前进。","caption":""},{"image":"imgs/de/army/de_army_tankv_32.jpg","description":"1944年，一辆在东线执行战斗任务的Ⅴ号（黑豹）D型坦克，炮塔侧面装上了履带板附加装甲防护，车体上涂上了防磁层，由于长期在野外执行任务，车身上沾满了泥土，但整车基本保持完好状态。","caption":""},{"image":"imgs/de/army/de_army_tankv_33.jpg","description":"1944年，隶属德国党卫军第五“维京”装甲师第五装甲团第11 营的一辆Ⅴ号（黑豹）A型坦克与步兵一起行进。","caption":""},{"image":"imgs/de/army/de_army_tankv_34.jpg","description":"1944年5月，隶属德国党卫军第一“阿道夫·希特勒警卫旗队”装甲师的一辆Ⅴ号（黑豹）A型坦克，正在比利时城镇街道上行进。","caption":""},{"image":"imgs/de/army/de_army_tankv_35.jpg","description":"1943年在意大利战场上被盟军缴获的一辆Ⅴ号（黑豹）A型坦克，从图上看车体并无大的损伤。","caption":""},{"image":"imgs/de/army/de_army_tankv_36.jpg","description":"德军第4装甲师Ⅴ号（黑豹）G型坦克正在集结。坦克车体很新净，应该是不久前才接收的装备。","caption":""},{"image":"imgs/de/army/de_army_tankv_37.jpg","description":"正在开赴前线的德军“骷髅”师装甲团所属的Ⅴ号（黑豹）G型坦克。旁边还有一辆Sd.Kfz233型装甲车同行。","caption":""},{"image":"imgs/de/army/de_army_tankv_38.jpg","description":"1945年春，在西线战场上一队被盟军击毁的德军Ⅴ号（黑豹）G型坦克，图中右后方还停着一辆美军的坦克，看图上的情况，应该此战场发生过激烈的坦克交战。","caption":""},{"image":"imgs/de/army/de_army_tankv_39.jpg","description":"在意大利防线的一个小山坡上，德军将Ⅴ号（黑豹）A型坦克的炮塔造成一个火炮防御工事，以期发挥其火炮威力强大的优势，抗击盟军的进攻。","caption":""}]};

/***/ }),

/***/ "./js/de_navy.json":
/*!*************************!*\
  !*** ./js/de_navy.json ***!
  \*************************/
/*! exports provided: countries, weapons, default */
/***/ (function(module) {

module.exports = {"countries":[{"name":"德国","code":"de"},{"name":"美国","code":"us"},{"name":"英国","code":"uk"},{"name":"苏联","code":"ru"},{"name":"日本","code":"jp"}],"weapons":[{"model":"潜艇","link":"de_navy_submarine","image":"","intro":"###"},{"model":"U-48","link":"de_navy_u48","image":"imgs/de/army/de_army_tankiv_01.jpg","intro":"MP44自动步枪被称为突击步枪之父,由德国于1941年-1942年间研制,并采用一种新型短弹。"},{"model":"U-47","link":"de_navy_u47","image":"imgs/de/army/de_army_tankiv_01.jpg","intro":"MP40冲锋枪（Maschinenpistole 40），常被称为“施迈瑟冲锋枪”，是一种为方便大量生产而设计，与传统枪械制造观念不同的冲锋枪，广泛应用于第二次世界大战期间纳粹德国军队。"},{"model":"U-49","link":"de_army_u49","image":"imgs/de/army/de_army_tankiv_01.jpg","intro":"虎式重型坦克（德文：Panzerkampfwagen Tiger Ausführung E ，德国代号：Sd.Kfz. 181，又称：虎式坦克/虎Ⅰ坦克/六号坦克）是第二次世界大战中德国军队所使用的一种重型坦克。"},{"model":"航空母舰","link":"de_navy_carrier","image":"","intro":"###"},{"model":"水面舰艇","link":"de_navy_warship","image":"","intro":"###"}]};

/***/ }),

/***/ "./js/de_shortcut.js":
/*!***************************!*\
  !*** ./js/de_shortcut.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./js/base.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_base_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.json */ "./js/footer.json");
var _footer_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./footer.json */ "./js/footer.json", 1);
/* harmony import */ var _menu_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.json */ "./js/menu.json");
var _menu_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./menu.json */ "./js/menu.json", 1);
/* harmony import */ var _views_shortcut_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/shortcut.pug */ "./views/shortcut.pug");
/* harmony import */ var _views_shortcut_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_shortcut_pug__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable no-unused-vars */

/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */




const pageID = 'de_shortcut';

const listJSON = __webpack_require__("./js sync recursive ^\\.\\/.*\\.json$")(`./${pageID}.json`); // Read list


const step = 1;
const bodyJSON = [];
var fdata = null;
var currectcountryid = '';

for (let no = 0; no < listJSON.files.length; no += step) {
  bodyJSON.push({
    intro: '***',
    link: listJSON.files[no].link,
    title: listJSON.files[no].title
  }); // eslint-disable-next-line global-require

  fdata = __webpack_require__("./js sync recursive ^\\.\\/.*\\.json$")(`./${listJSON.files[no].link}.json`);

  if (fdata && fdata !== null) {
    for (let jno = 0; jno < fdata.weapons.length; jno += step) {
      bodyJSON.push({
        intro: fdata.weapons[jno].intro,
        link: fdata.weapons[jno].link,
        title: fdata.weapons[jno].model
      });
    }
  }
} // Set countries link.
// eslint-disable-next-line no-magic-numbers


currectcountryid = pageID.slice(0, 2);

for (let no = 0; no < listJSON.countries.length; no++) {
  if (listJSON.countries[no].code === currectcountryid) {
    listJSON.countries[no].href = '###';
  } else {
    listJSON.countries[no].href = `${listJSON.countries[no].code + pageID.replace(currectcountryid, '')}.html`;
  }
} // Set header and footer


_base_js__WEBPACK_IMPORTED_MODULE_0___default.a.setCopyright(_footer_json__WEBPACK_IMPORTED_MODULE_1__);
_base_js__WEBPACK_IMPORTED_MODULE_0___default.a.setMenuActiveItem(_menu_json__WEBPACK_IMPORTED_MODULE_2__, pageID); // Render pug file and output.

document.write(_views_shortcut_pug__WEBPACK_IMPORTED_MODULE_3___default()({
  body: {
    countries: listJSON.countries,
    weapons: bodyJSON
  },
  footer: _footer_json__WEBPACK_IMPORTED_MODULE_1__,
  menu: _menu_json__WEBPACK_IMPORTED_MODULE_2__
}));

/***/ }),

/***/ "./js/de_shortcut.json":
/*!*****************************!*\
  !*** ./js/de_shortcut.json ***!
  \*****************************/
/*! exports provided: countries, files, default */
/***/ (function(module) {

module.exports = {"countries":[{"name":"德国","code":"de"},{"name":"美国","code":"us"},{"name":"英国","code":"uk"},{"name":"苏联","code":"ru"},{"name":"日本","code":"jp"}],"files":[{"title":"陆战武器","link":"de_army"},{"title":"空战武器","link":"de_airforce"},{"title":"海战武器","link":"de_navy"}]};

/***/ }),

/***/ "./js/footer.json":
/*!************************!*\
  !*** ./js/footer.json ***!
  \************************/
/*! exports provided: footersitelogo, footersitename, copyright, links, getintouchinfo, default */
/***/ (function(module) {

module.exports = {"footersitelogo":"imgs/favicon.png","footersitename":"军事测试网站","copyright":"Copyright © #year# 版权所有。<a href=\"about.html\" class=\"custom-footer-brand\">内容及版权申明</a>，转载分享请注明出处。Deployed by <a href=\"https://surge.sh/\" target=\"_blank\">Surge</a>.","links":[{"title":"资源链接","href":""},{"title":"武器篇","href":"wwii_weapon.html"},{"title":"战场篇","href":"wwii_warfield.html"},{"title":"人事篇","href":"wwii_people.html"},{"title":"物事篇","href":"wwii_misc.html"}],"getintouchinfo":{"headline":"联系我们","data":[{"faicon":"fab fa-facebook-f","href":"#","ref":"Facebook"},{"faicon":"fab fa-qq","href":"#","ref":"QQ"},{"faicon":"fab fa-weixin","href":"about.html","ref":"微信"},{"faicon":"fas fa-envelope","href":"mailto:xxx@yyy.com","ref":"电子邮件"}]}};

/***/ }),

/***/ "./js/index.json":
/*!***********************!*\
  !*** ./js/index.json ***!
  \***********************/
/*! exports provided: background, title, subtitle, links, default */
/***/ (function(module) {

module.exports = {"background":"imgs/index-bg.jpg","title":"第二次世界大战 WWII","subtitle":"图史与纪实","links":[{"title":"武器篇","href":"wwii_weapon"},{"title":"战场篇","href":"wwii_warfield"},{"title":"人事篇","href":"wwii_people"},{"title":"物事篇","href":"wwii_misc"}]};

/***/ }),

/***/ "./js/menu.json":
/*!**********************!*\
  !*** ./js/menu.json ***!
  \**********************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = [{"title":"首页","link":"index","active":false},{"title":"陆战武器","link":"de_army","active":false},{"title":"空战武器","link":"de_airforce","active":false},{"title":"海战武器","link":"de_navy","active":false},{"title":"快捷目录","link":"de_shortcut","active":false}];

/***/ }),

/***/ "./views/footer.pug":
/*!**************************!*\
  !*** ./views/footer.pug ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "../node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (footer) {pug_html = pug_html + "\u003C!-- Page Footer Begin --\u003E\u003Cfooter class=\"p-0\"\u003E\u003Cdiv class=\"container-fluid custom-footer-bgcolor p-0 p-md-3\"\u003E\u003Cdiv class=\"container pt-5 pb-5\"\u003E\u003Cdiv class=\"d-flex justify-content-between row\"\u003E\u003Cdiv class=\"col-lg-4 col-12 order-12\"\u003E\u003Cdiv class=\"d-flex justify-content-end pr-3\"\u003E\u003Cspan class=\"list-social-links custom-footer-color custom-text-shadow-1px\"\u003E" + (pug.escape(null == (pug_interp = footer.getintouchinfo.headline) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cul class=\"list-social-links justify-content-end pr-3\"\u003E";
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

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-md-8 col-12 custom-footer-color order-1\"\u003E\u003Cnav class=\"nav\"\u003E";
// iterate footer.links
;(function(){
  var $$obj = footer.links;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var linkitem = $$obj[pug_index1];
if (linkitem.href == '' || linkitem.href == '###') {
pug_html = pug_html + "\u003Ca class=\"nav-link custom-footer-link-style disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\"\u003E" + (pug.escape(null == (pug_interp = linkitem.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + "\u003Ca" + (" class=\"nav-link custom-footer-link-style\""+pug.attr("href", linkitem.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = linkitem.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var linkitem = $$obj[pug_index1];
if (linkitem.href == '' || linkitem.href == '###') {
pug_html = pug_html + "\u003Ca class=\"nav-link custom-footer-link-style disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\"\u003E" + (pug.escape(null == (pug_interp = linkitem.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + "\u003Ca" + (" class=\"nav-link custom-footer-link-style\""+pug.attr("href", linkitem.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = linkitem.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fnav\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex justify-content-center pt-3\"\u003E\u003Cdiv class=\"col-12 text-center custom-footer-color\"\u003E\u003Chr class=\"bg-secondary\"\u003E\u003Cspan\u003E\u003Ca" + (" class=\"custom-footer-brand\""+" href=\"\u002F\""+pug.attr("alt", footer.footersitename, true, true)) + "\u003E\u003Cimg" + (" class=\"d-inline-block align-top\""+pug.attr("src", footer.footersitelogo, true, true)+" height=\"20\""+pug.attr("alt", footer.footersitename, true, true)) + "\u003E \u003Cspan class=\"custom-text-shadow-1px\"\u003E" + (pug.escape(null == (pug_interp = footer.footersitename) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fa\u003E \u003C\u002Fspan\u003E\u003Cspan\u003E" + (null == (pug_interp = footer.copyright) ? "" : pug_interp) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E\u003C!-- Page Footer End --\u003E\n\u003C!-- Go to Top --\u003E\u003Ca class=\"js-go-to u-go-to\" href=\"javascript:;\" data-position=\"{&quot;bottom&quot;: 15, &quot;right&quot;: 15 }\" data-type=\"fixed\" data-offset-top=\"300\" data-compensation=\"#header\" data-show-effect=\"slideInUp\" data-hide-effect=\"slideOutDown\"\u003E\u003Cspan class=\"fa fa-arrow-up u-go-to__inner\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C!-- Note: Need to add script part below the body --\u003E\n\u003C!-- End Go to Top --\u003E";}.call(this,"footer" in locals_for_with?locals_for_with.footer:typeof footer!=="undefined"?footer:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./views/shortcut.pug":
/*!****************************!*\
  !*** ./views/shortcut.pug ***!
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
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fnav\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E\u003C!-- Sticky Nav Bar End --\u003E\u003Csection class=\"custom-shortcut-style pt-3 pb-3\" id=\"shortcut\"\u003E\u003Cdiv class=\"container\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-12 pt-3 pb-3\"\u003E\u003Cnav class=\"nav justify-content-center\"\u003E";
// iterate body.countries
;(function(){
  var $$obj = body.countries;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var linkitem = $$obj[pug_index1];
if (linkitem.href == '' || linkitem.href == '###') {
pug_html = pug_html + "\u003Ca class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\"\u003E" + (pug.escape(null == (pug_interp = linkitem.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + "\u003Ca" + (" class=\"nav-link\""+pug.attr("href", linkitem.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = linkitem.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var linkitem = $$obj[pug_index1];
if (linkitem.href == '' || linkitem.href == '###') {
pug_html = pug_html + "\u003Ca class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\"\u003E" + (pug.escape(null == (pug_interp = linkitem.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + "\u003Ca" + (" class=\"nav-link\""+pug.attr("href", linkitem.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = linkitem.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fnav\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-12 col-lg-10 pt-3 pb-3\"\u003E\u003Ctable class=\"table table-responsive\"\u003E";
// iterate body.weapons
;(function(){
  var $$obj = body.weapons;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var item = $$obj[pug_index2];
if (item.intro == '***') {
pug_html = pug_html + "\u003Ctr\u003E\u003Cth class=\"thead-light custom-shortcut-category-color-1\" scope=\"col\" colspan=\"2\"\u003E\u003Ci class=\"fas fa-th-list fa-lg\"\u003E\u003C\u002Fi\u003E \u003Cspan" + (" class=\"h5 font-weight-bold custom-text-shadow-1px\""+pug.attr("id", item.link, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E";
}
else
if (item.intro == '###') {
pug_html = pug_html + "\u003Ctr\u003E\u003Cth class=\"thead-light custom-shortcut-category-color-2\" scope=\"col\" colspan=\"2\"\u003E\u003Ci class=\"fas fa-ellipsis-h fa-lg\"\u003E\u003C\u002Fi\u003E \u003Cspan" + (" class=\"h5 font-weight-bold custom-text-shadow-1px\""+pug.attr("id", item.link, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E";
}
else {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd class=\"custom-nowrap\"\u003E\u003Ca" + (pug.attr("href", item.link + '.html', true, true)) + "\u003E\u003Cspan class=\"font-weight-bold\"\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Cspan\u003E" + (null == (pug_interp = item.intro) ? "" : pug_interp) + "\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var item = $$obj[pug_index2];
if (item.intro == '***') {
pug_html = pug_html + "\u003Ctr\u003E\u003Cth class=\"thead-light custom-shortcut-category-color-1\" scope=\"col\" colspan=\"2\"\u003E\u003Ci class=\"fas fa-th-list fa-lg\"\u003E\u003C\u002Fi\u003E \u003Cspan" + (" class=\"h5 font-weight-bold custom-text-shadow-1px\""+pug.attr("id", item.link, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E";
}
else
if (item.intro == '###') {
pug_html = pug_html + "\u003Ctr\u003E\u003Cth class=\"thead-light custom-shortcut-category-color-2\" scope=\"col\" colspan=\"2\"\u003E\u003Ci class=\"fas fa-ellipsis-h fa-lg\"\u003E\u003C\u002Fi\u003E \u003Cspan" + (" class=\"h5 font-weight-bold custom-text-shadow-1px\""+pug.attr("id", item.link, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E";
}
else {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd class=\"custom-nowrap\"\u003E\u003Ca" + (pug.attr("href", item.link + '.html', true, true)) + "\u003E\u003Cspan class=\"font-weight-bold\"\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Cspan\u003E" + (null == (pug_interp = item.intro) ? "" : pug_interp) + "\u003C\u002Fspan\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftable\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-none d-lg-block col-lg-2\"\u003E\u003Cdiv class=\"sticky-top pt-3 pb-3\"\u003E\u003Cdiv class=\"list-group\"\u003E";
// iterate body.weapons
;(function(){
  var $$obj = body.weapons;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var item = $$obj[pug_index3];
if (item.intro == '***') {
pug_html = pug_html + "\u003Ca" + (" class=\"list-group-item list-group-item-action custom-shortcut-menu-color-1 pl-2 pt-1 pb-1 pr-1\""+pug.attr("href", "#" + item.link, true, true)) + "\u003E" + (null == (pug_interp = item.title) ? "" : pug_interp) + "\u003C\u002Fa\u003E";
}
else {
if (item.intro == '###') {
pug_html = pug_html + "\u003Ca" + (" class=\"list-group-item list-group-item-action custom-shortcut-menu-color-2 pl-3 pt-0 pb-0 pr-2\""+pug.attr("href", "#" + item.link, true, true)) + "\u003E" + (null == (pug_interp = item.title) ? "" : pug_interp) + "\u003C\u002Fa\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var item = $$obj[pug_index3];
if (item.intro == '***') {
pug_html = pug_html + "\u003Ca" + (" class=\"list-group-item list-group-item-action custom-shortcut-menu-color-1 pl-2 pt-1 pb-1 pr-1\""+pug.attr("href", "#" + item.link, true, true)) + "\u003E" + (null == (pug_interp = item.title) ? "" : pug_interp) + "\u003C\u002Fa\u003E";
}
else {
if (item.intro == '###') {
pug_html = pug_html + "\u003Ca" + (" class=\"list-group-item list-group-item-action custom-shortcut-menu-color-2 pl-3 pt-0 pb-0 pr-2\""+pug.attr("href", "#" + item.link, true, true)) + "\u003E" + (null == (pug_interp = item.title) ? "" : pug_interp) + "\u003C\u002Fa\u003E";
}
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E" + (null == (pug_interp = __webpack_require__(/*! ./footer.pug */ "./views/footer.pug").call(this, locals)) ? "" : pug_interp) + "\u003C!-- Javascript common libs. JQuery, Bootstrap, FontAwesome Script Begin --\u003E\u003Cscript src=\".\u002Fcommon\u002Fjs\u002Fjquery-3.3.1.min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript src=\".\u002Fcommon\u002Fjs\u002Fbootstrap.bundle.min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript src=\".\u002Fcommon\u002Fjs\u002Fall.min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript src=\".\u002Fcommon\u002Fjs\u002Fhs.core.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript src=\".\u002Fcommon\u002Fjs\u002Fhs.go-to.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript\u003E$(document).ready(function() {\n  \u002F\u002F- Go To Top Script\n  $.HSCore.components.HSGoTo.init('.js-go-to');\n});\n\u003C\u002Fscript\u003E\u003Cscript\u003E$(document).ready(function() {\n});\u003C\u002Fscript\u003E";}.call(this,"body" in locals_for_with?locals_for_with.body:typeof body!=="undefined"?body:undefined,"menu" in locals_for_with?locals_for_with.menu:typeof menu!=="undefined"?menu:undefined));;return pug_html;};
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