/* eslint-disable no-unused-vars */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
import BaseIO from './base.js';
import footerJSON from './footer.json';
import menuJSON from './menu.json';
import template from '../views/shortcut.pug';

const pageID = 'de_shortcut';
const listJSON = require(`./${pageID}.json`);

// Read list
const step = 1;
const bodyJSON = [];
var fdata = null;
var currectcountryid = '';

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
// eslint-disable-next-line no-magic-numbers
currectcountryid = pageID.slice(0, 2);

for (let no = 0; no < listJSON.countries.length; no++) {
  if (listJSON.countries[no].code === currectcountryid) {
    listJSON.countries[no].href = '###';
  } else {
    listJSON.countries[no].href = `${listJSON.countries[no].code +
      pageID.replace(currectcountryid, '')}.html`;
  }
}

// Set header and footer
BaseIO.setCopyright(footerJSON);
BaseIO.setMenuActiveItem(menuJSON, pageID);

// Render pug file and output.
document.write(template({
  body: { countries: listJSON.countries,
weapons: bodyJSON },
  footer: footerJSON,
  menu: menuJSON
}));
