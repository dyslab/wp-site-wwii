/* eslint-disable no-unused-vars */
var baseCSS = require('../css/base.css');
var aboutCSS = require('../css/about.css');
var aboutJSON = require('./about.json');

var template = require('./about.pug');

document.write(template(aboutJSON));
