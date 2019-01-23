/* eslint-disable no-unused-vars */
var baseCSS = require('../css/base.css');
var indexCSS = require('../css/index.css');
var template = require('./index.pug');

var userObj = {
  title: 'INDEX TITLE: ',
  users: [
    'Vincent To',
    'Huang',
    'Lin',
    'Zhao'
  ]
};

document.write(template(userObj));
