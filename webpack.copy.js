/*
 *
 * VERY IMPORTANT NOTES:
 * This file has been DEPRECATED since 12/5/2019.
 * All 'common' resources or 'imgs' material files were recommended to
 * directly copy/paste to the corresponding folder in folder '/dist'.
 *
 * File desctiption:
 * This sctipt used to copy all resources of the folder 'common' &'imgs'
 * from '/src' to '/dist'.
 *
 * Usage:
 * directly use it via the command line below.
 *  webpack --config webpack.copy.js
 * or you could...
 *  1. add the script below in the 'scripts' section in file 'package.json'.
 *    "copyfiles": "webpack --config webpack.copy.js"
 *  2. then run script by npm command: "npm run copyfiles".
 *
 */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const devServer = require('./wp.config.js');

/*
 * ***************************************************************************
 * Construct copy plugins
 */
const plugins = [
  new CopyWebpackPlugin([
    {
      from: './common/**/*',
      to: devServer.contentBase,
      toType: 'dir'
    },
    {
      from: './imgs/**/*',
      to: devServer.contentBase,
      toType: 'dir'
    }
  ], { context: devServer.sourceBase })
];

/*
 * ***************************************************************************
 * Module export configured data definition
 */
const config = {
  context: devServer.sourceBase,
  devServer,
  devtool: '',
  entry: {
    // eslint-disable-next-line camelcase
    no_sense_just_for_copy_files: './test/test_document_write.js'
  },
  mode: 'development',
  plugins,
  target: 'web'
};

module.exports = config;
