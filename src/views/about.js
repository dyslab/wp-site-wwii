/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
var baseCSS = require('../css/base.css');
var aboutCSS = require('../css/about.css');

var template = require('./about.pug');
var menuJSON = require('./menu.json');
var footerJSON = require('./footer.json');
var aboutJSON = require('./about.json');

const step = 1;

// Set active menu item.
for (let no = 0; no < menuJSON.length; no += step) {
  // This generated page name is 'about.html'
  if (menuJSON[no].link === 'about') {
    menuJSON[no].active = true;
  }
}

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

// Render pug file and output.
document.write(template({
  about: aboutJSON,
  footer: footerJSON,
  menu: menuJSON
}));
