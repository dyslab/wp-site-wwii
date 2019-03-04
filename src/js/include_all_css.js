// All CSS files listed below.
const csspath = '../css/';
const cssfiles = [
  'about.css',
  'base.css',
  'category.css',
  'document.css',
  'index.css',
  'shortcut.css',
  'wwii.css'
];

const cssObjs = [];
const step = 1;

for (let no = 0; no < cssfiles.length; no += step) {
  // eslint-disable-next-line global-require
  cssObjs[no] = require(`${csspath}${cssfiles[no]}`);
}
