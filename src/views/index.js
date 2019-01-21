var template = require('./index_part_users.pug');

var userObj = {
  title: 'INDEX PAGE TITLE',
  users: [
    'Vincent To',
    'Huang',
    'Lin',
    'Zhao'
  ]
};

document.write('JS TEST: index.js<br><div></div>');
document.querySelector('div#users').innerHTML = template(userObj);
