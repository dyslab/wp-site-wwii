/* eslint-disable */
import BaseIO from './base.js';
import countrymenuJSON from './country_menu.json';
import footerJSON from './footer.json';
import template from '../views/category.pug';

export default (countryid, categoryid, bodyJSON, menuJSON) => {
  // Load country switch menu from json file.
  BaseIO.setCountrySwitchMenuItem(countrymenuJSON, countryid, categoryid);
  bodyJSON.countries = countrymenuJSON;

  // Set header and footer
  BaseIO.setCopyright(footerJSON);
  BaseIO.setMenuActiveItem(menuJSON, `${countryid}_${categoryid}`);
  
  // Render pug file and output.
  document.write(template({
    body: bodyJSON,
    footer: footerJSON,
    menu: menuJSON
  }));
}
