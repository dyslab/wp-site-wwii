/* eslint-disable max-len */
/* eslint-disable global-require */
import BaseIO from './base.js';
import footerJSON from './footer.json';
import template from '../views/document.pug';

export default (countryid, categoryid, weaponid) => {
  const bodyJSON = require(`../js_${countryid}/${countryid}_${categoryid}_${weaponid}.json`);
  const menuJSON = require(`../js_${countryid}/${countryid}_menu.json`);

  // Set header and footer
  BaseIO.setCopyright(footerJSON);
  BaseIO.setMenuActiveItem(menuJSON, `${countryid}_${categoryid}_${weaponid}`);

  // Render pug file and output.
  document.write(template({
    body: bodyJSON,
    footer: footerJSON,
    menu: menuJSON
  }));
};
