/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-magic-numbers */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import BaseIO from './base.js';
import countrymenuJSON from './country_menu.json';
import footerJSON from './footer.json';
import menuJSON from './uk_menu.json';
import template from '../views/category.pug';

const pageID = 'uk_army';
var bodyJSON = require(`./${pageID}.json`);

// Set countries link.
var current_countryid = pageID.slice(0, 2);

// Load country menu from json file.
for (let no = 0; no < countrymenuJSON.countries.length; no++) {
  countrymenuJSON.countries[no].image = `imgs/${countrymenuJSON.countries[no].code}_nationalflag.jpg`;
  if (countrymenuJSON.countries[no].code === current_countryid) {
    countrymenuJSON.countries[no].href = '###';
  } else {
    countrymenuJSON.countries[no].href = `${countrymenuJSON.countries[no].code +
      pageID.replace(current_countryid, '')}.html`;
  }
}
bodyJSON.countries = countrymenuJSON.countries;

// Set header and footer
BaseIO.setCopyright(footerJSON);
BaseIO.setMenuActiveItem(menuJSON, pageID);

// Render pug file and output.
document.write(template({
  body: bodyJSON,
  footer: footerJSON,
  menu: menuJSON
}));
