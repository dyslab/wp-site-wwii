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

let cssObjs = [];

for (let no = 0; no < cssfiles.length; no++ ) {
  cssObjs[no] = require(`${csspath}${cssfiles[no]}`);
}
