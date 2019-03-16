/* eslint-disable multiline-comment-style */
/* eslint-disable capitalized-comments */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devServer = require('./wp.config.js');
// const fileIDs = require('./wp.build.base.js');
// const fileIDs = require('./wp.build.weapon.de.js');
const fileIDs = require('./wp.build.weapon.ru.js');

/*
 * ***************************************************************************
 * Construct entrypoints and plugins
 */
let epString = '';
const step = 1;
const plugins = [
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

  // Output js/html files excluding 'include_all_css'.
  if (fileIDs[no].id !== 'include_all_css') {
    tempObj[no] = new HtmlWebpackPlugin({
      chunks: [
        `${fileIDs[no].id}`,
        'all.css'
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
        name: 'all.css',
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
