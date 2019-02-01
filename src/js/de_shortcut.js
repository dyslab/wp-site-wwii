/* eslint-disable no-unused-vars */
import BaseIO from './base.js';
import baseCSS from '../css/base.css';
import bodyCSS from '../css/shortcut.css';
import footerJSON from './footer.json';
import menuJSON from './menu.json';
import template from '../views/shortcut.pug';

const pageID = 'de_shortcut';
const listJSON = require(`./${pageID}.json`);

// Read list
const step = 1;
const bodyJSON = [];
var fdata = null;

for (let no = 0; no < listJSON.length; no += step) {
  bodyJSON.push({
    intro: '***',
    link: listJSON[no].link,
    title: listJSON[no].title
  });

  // eslint-disable-next-line global-require
  fdata = require(`./${listJSON[no].link}.json`);

  if (fdata && fdata !== null) {
    for (let jno = 0; jno < fdata.length; jno += step) {
      bodyJSON.push({
        intro: fdata[jno].intro,
        link: fdata[jno].link,
        title: fdata[jno].model
      });
    }
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
