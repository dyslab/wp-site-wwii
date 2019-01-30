const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devServer = require('./wp.base.config.js');
const fileIDs = require('./wp.document.build.js');

/*
 * ***************************************************************************
 * Construct entrypoints and plugins
 */
let epString = '';
const step = 1;
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
  ], { context: devServer.sourceBase }),
  new MiniCssExtractPlugin({
    filename: './css/[name].bundle.css'
  })
];
const tempObj = [];

for (let no = 0; no < fileIDs.length; no += step) {
  epString += `"${fileIDs[no].id}":"./js/${fileIDs[no].id}.js"`;
  if (no < fileIDs.length - step) {
    epString += ',';
  }

  tempObj[no] = new HtmlWebpackPlugin({
    chunks: [
      `${fileIDs[no].id}`,
      'custom.styles'
    ],
    favicon: './favicon.ico',
    filename: `./${fileIDs[no].id}.html`,
    inject: 'body',
    minify: false,
    template: './views/template.pug',
    title: `${fileIDs[no].title}`
  });

  plugins.push(tempObj[no]);
}

const entry = JSON.parse(`{${epString}}`);

/*
 * ***************************************************************************
 * Output definition
 */

const output = {
  filename: './js/[name].bundle.js',
  path: devServer.contentBase,
  publicPath: ''
};

/*
 * ***************************************************************************
 * Loader definition
 */
const es2015 = {
  exclude: /node_modules/u,
  loader: 'babel-loader',
  test: /\.js$/u
};
const pugloader = {
  test: /\.pug$/u,
  use: ['pug-loader']
};
const cssloader = {
  test: /\.css$/u,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader'
  ]
};
const imageloader = {
  test: /\.(png|svg|jpg|gif)$/u,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'imgs'
      }
    }
  ]
};
const fontloader = {
  test: /\.(woff|woff2|eot|ttf|otf)$/u,
  use: ['file-loader']
};

/*
 * ***************************************************************************
 * Optimizer definition
 */
const optimization = {
  splitChunks: {
    cacheGroups: {
      styles: {
        chunks: 'all',
        enforce: true,
        name: 'custom.styles',
        test: /\.css$/u
      }
    }
  }
};

/*
 * ***************************************************************************
 * Module export configured data definition
 */
const config = {
  context: devServer.sourceBase,
  devServer,
  devtool: '',
  entry,
  mode: 'development',
  module: { rules: [
    es2015,
    pugloader,
    cssloader,
    imageloader,
    fontloader
  ] },
  optimization,
  output,
  plugins,
  target: 'web'
};

module.exports = config;
