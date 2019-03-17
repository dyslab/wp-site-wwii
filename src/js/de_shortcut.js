/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
import BaseIO from './base.js';
import countrymenuJSON from './country_menu.json';
import footerJSON from './footer.json';
import menuJSON from './de_menu.json';
import template from '../views/shortcut.pug';

const pageID = 'de_shortcut';
const listJSON = require(`./${pageID}.json`);

// Read list
const step = 1;
const bodyJSON = [];
var fdata = null;
var current_countryid = '';

for (let no = 0; no < listJSON.files.length; no += step) {
  bodyJSON.push({
    intro: '***',
    link: listJSON.files[no].link,
    title: listJSON.files[no].title
  });

  // eslint-disable-next-line global-require
  fdata = require(`./${listJSON.files[no].link}.json`);

  if (fdata && fdata !== null) {
    for (let jno = 0; jno < fdata.weapons.length; jno += step) {
      bodyJSON.push({
        intro: fdata.weapons[jno].intro,
        link: fdata.weapons[jno].link,
        title: fdata.weapons[jno].model
      });
    }
  }
}

// Set countries link.
current_countryid = pageID.slice(0, 2);

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

// Set header and footer
BaseIO.setCopyright(footerJSON);
BaseIO.setMenuActiveItem(menuJSON, pageID);

// Render pug file and output.
document.write(template({
  body: {
    countries: countrymenuJSON.countries,
    weapons: bodyJSON
  },
  footer: footerJSON,
  menu: menuJSON
}));
