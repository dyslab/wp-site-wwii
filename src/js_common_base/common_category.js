/* eslint-disable */
import BaseIO from './base.js';
import countrymenuJSON from './country_menu.json';
import footerJSON from './footer.json';
import template from '../views/category.pug';

export default (countryid, categoryid) => {
  var bodyJSON = require(`../js_${countryid}/${countryid}_${categoryid}.json`);
  
  // Load country switch menu from json file.
  BaseIO.setCountrySwitchMenuItem(countrymenuJSON, countryid, categoryid);
  bodyJSON.countries = countrymenuJSON
  
  const menuJSON = require(`../js_${countryid}/${countryid}_menu.json`);
    
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
