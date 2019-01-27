/* eslint-disable no-unused-vars */
var baseCSS = require('../css/base.css');
var indexCSS = require('../css/index.css');
var template = require('./index.pug');
var indexJSON = require('./index.json');

document.write(template(indexJSON));
