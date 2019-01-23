/* eslint-disable no-unused-vars */
var baseCSS = require('../css/base.css');
var aboutCSS = require('../css/about.css');
var aboutJSON = require('./about.json');

var template = require('./about.pug');

/**
 * Adds two numbers together.
 * @param {int} num The first number.
 * @returns {int} The sum of the two numbers.
 */
var DoubleFunc = function(num) {
  return num + num;
};

// Upgrade function scope.
window.DoubleFuncProc = DoubleFunc;
document.write(template(aboutJSON));
