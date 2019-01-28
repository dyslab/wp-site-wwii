/* eslint-disable no-unused-vars */
import BaseIO from './base.js';
import baseCSS from '../css/base.css';
import footerJSON from './footer.json';
import menuJSON from './menu.json';

const pageID = 'de_army';
var bodyCSS = require(`../css/${pageID}.css`);
var template = require(`./${pageID}.pug`);
var bodyJSON = require(`./${pageID}.json`);

BaseIO.setCopyright(footerJSON);
BaseIO.setMenuActiveItem(menuJSON, pageID);

// Render pug file and output.
document.write(template({
  body: bodyJSON,
  footer: footerJSON,
  menu: menuJSON
}));
