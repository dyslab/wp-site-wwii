/* eslint-disable max-len */
/* eslint-disable global-require */
import BaseIO from './base.js';
import footerJSON from './footer.json';
import template from '../views/document.pug';

export default (countryid, categoryid, bodyJSON, menuJSON) => {
  // Set header and footer
  BaseIO.setCopyright(footerJSON);
  BaseIO.setMenuActiveItem(menuJSON, `${countryid}_${categoryid}`);

  // Render pug file and output.
  document.write(template({
    body: bodyJSON,
    footer: footerJSON,
    menu: menuJSON
  }));
};
