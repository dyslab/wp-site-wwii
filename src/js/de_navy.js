/* eslint-disable no-plusplus */
/* eslint-disable no-magic-numbers */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import BaseIO from './base.js';
import footerJSON from './footer.json';
import menuJSON from './menu.json';
import template from '../views/category.pug';

const pageID = 'de_navy';
var bodyJSON = require(`./${pageID}.json`);

// Set countries link.
var currect_countryid = pageID.slice(0, 2);

for (let no = 0; no < bodyJSON.countries.length; no++) {
  if (bodyJSON.countries[no].code === currect_countryid) {
    bodyJSON.countries[no].href = '###';
  } else {
    bodyJSON.countries[no].href = `${bodyJSON.countries[no].code + pageID.replace(currect_countryid, '')}.html`;
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
