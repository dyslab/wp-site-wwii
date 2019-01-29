/* eslint-disable no-unused-vars */
import BaseIO from './base.js';
import baseCSS from '../css/base.css';
import bodyCSS from '../css/category.css';
import footerJSON from './footer.json';
import menuJSON from './menu.json';
import template from '../views/category.pug';

const pageID = 'de_army';
var bodyJSON = require(`./${pageID}.json`);

// Set header and footer
BaseIO.setCopyright(footerJSON);
BaseIO.setMenuActiveItem(menuJSON, pageID);

// Render pug file and output.
document.write(template({
  body: bodyJSON,
  footer: footerJSON,
  menu: menuJSON
}));
