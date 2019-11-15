/* eslint-disable no-unused-vars */
import BaseIO from '../js_common_base/base.js';
import footerJSON from '../js_common_base/footer.json';
import menuJSON from '../js_common_base/menu.json';

var template = require(`../views/about.pug`);
var bodyJSON = require(`./about.json`);

// Set header and footer
BaseIO.setCopyright(footerJSON);
BaseIO.setMenuActiveItem(menuJSON, 'about');

// eslint-disable-next-line no-console
console.log(menuJSON);

// Render pug file and output.
document.write(template({
  body: bodyJSON,
  footer: footerJSON,
  menu: menuJSON
}));
