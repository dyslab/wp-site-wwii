/* eslint-disable */
import BaseIO from './base.js';
import countrymenuJSON from './country_menu.json';
import footerJSON from './footer.json';
import template from '../views/shortcut.pug';

export default (countryid, bodyJSON, menuJSON) => {
  BaseIO.setCountrySwitchMenuItem(countrymenuJSON, countryid, 'shortcut')

  // Set header and footer
  BaseIO.setMenuActiveItem(menuJSON, `${countryid}_shortcut`);
  BaseIO.setCopyright(footerJSON);
  
  // Render pug file and output.
  document.write(template({
    body: {
      countries: countrymenuJSON,
      weapons: bodyJSON
    },
    footer: footerJSON,
    menu: menuJSON
  }));
}
