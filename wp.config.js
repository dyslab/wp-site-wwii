/* eslint-disable no-undef */
const path = require('path');

const config = {
  contentBase: path.resolve(__dirname, 'dist'),
  port: 8080,
  sourceBase: path.resolve(__dirname, 'src')
};

module.exports = config;
