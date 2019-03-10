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
