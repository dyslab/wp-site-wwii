/* eslint-disable */
import BaseIO from './base.js';
import countrymenuJSON from './country_menu.json';
import footerJSON from './footer.json';
import template from '../views/shortcut.pug';

export default (countryid) => {
  const listJSON = require(`../js_${countryid}/${countryid}_shortcut.json`);

  // Read list
  const step = 1;
  const bodyJSON = [];
  var fdata = null;
  
  for (let no = 0; no < listJSON.files.length; no += step) {
    bodyJSON.push({
      intro: '***',
      link: listJSON.files[no].link,
      title: listJSON.files[no].title
    });
  
    // eslint-disable-next-line global-require
    fdata = require(`../js_${countryid}/${listJSON.files[no].link}.json`);
  
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
 
  const menuJSON = require(`../js_${countryid}/${countryid}_menu.json`);
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
