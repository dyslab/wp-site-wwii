/* eslint-disable no-unused-vars */
var template = require('../views/index.pug');
var indexJSON = require('./index.json');

document.write(template(indexJSON));
