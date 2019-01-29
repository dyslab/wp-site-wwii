/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

exports.setMenuActiveItem = (menuJSON, currentName) => {
  const step = 1;

  // Set active menu item.
  for (let no = 0; no < menuJSON.length; no += step) {
    // This generated page name is 'about.html'
    if (menuJSON[no].link === currentName) {
      menuJSON[no].active = true;
    }
  }
};

exports.setCopyright = (footerJSON) => {
  // Set copyright duration year.
  const dateObj = new Date();
  const thisYear = dateObj.getFullYear();
  const startYear = 2018;
  let yearString = '';

  if (thisYear > startYear) {
    yearString = `2018-${thisYear}`;
  } else {
    yearString = thisYear;
  }
  footerJSON.copyright = footerJSON.copyright.replace(/#year#/iu, yearString);
};

module.exposts = exports;
