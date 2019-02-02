/* eslint-disable no-unused-vars */
import BaseIO from './base.js';
import baseCSS from '../css/base.css';
import bodyCSS from '../css/category.css';
import footerJSON from './footer.json';
import menuJSON from './menu.json';
import template from '../views/category.pug';

const pageID = 'de_airforce';
var bodyJSON = require(`./${pageID}.json`);

// Set countries link.
var currect_countryid = pageID.slice(0,2)
for(let no = 0; no < bodyJSON.countries.length; no++) {
  if (bodyJSON.countries[no].code === currect_countryid) {
    bodyJSON.countries[no].href = '###'
  } else {
    bodyJSON.countries[no].href = bodyJSON.countries[no].code + pageID.replace(currect_countryid, '') + '.html'
  }
}

// Set header and footer
BaseIO.setCopyright(footerJSON);
BaseIO.setMenuActiveItem(menuJSON, pageID);

// Render pug file and output.
document.write(template({
  body: bodyJSON,
  footer: footerJSON,
  menu: menuJSON
}));
