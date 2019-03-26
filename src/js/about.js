/* eslint-disable no-unused-vars */
import BaseIO from './base.js';
import footerJSON from './footer.json';
import menuJSON from './menu.json';

const pageID = 'about';
var template = require(`../views/${pageID}.pug`);
var bodyJSON = require(`./${pageID}.json`);

// Set header and footer
BaseIO.setCopyright(footerJSON);
BaseIO.setMenuActiveItem(menuJSON, pageID);

// eslint-disable-next-line no-console
console.log(menuJSON);

// Render pug file and output.
document.write(template({
  body: bodyJSON,
  footer: footerJSON,
  menu: menuJSON
}));
