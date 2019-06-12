/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const step = 1;
const zero = 0;

exports.setCountrySwitchMenuItem = (countrymenuJSON, countryid, categoryid) => {
  // Load country switch menu from json file.
  for (let no = 0; no < countrymenuJSON.length; no += step) {
    countrymenuJSON[no].image = `imgs/${countrymenuJSON[no].code}_nationalflag.jpg`;
    if (countrymenuJSON[no].code === countryid) {
      countrymenuJSON[no].href = '###';
    } else {
      countrymenuJSON[no].href = `${countrymenuJSON[no].code}_${categoryid}.html`;
    }
  }

  return countrymenuJSON;
};

exports.setMenuActiveItem = (menuJSON, currentName) => {
  // Set active menu item.
  for (let no = 0; no < menuJSON.length; no += step) {
    if (currentName.search(menuJSON[no].link) >= zero) {
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

module.exports = exports;
