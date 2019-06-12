/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const devServer = require('./wp.config.js');
const path = require('path')

exports.config = (countryid) => {
  const fileIDs = require(`./wp.build.${countryid}.js`);

  /*
  * ***************************************************************************
  * Construct entrypoints and plugins
  */
  let testJsFiles = [];
  let epString = '';
  const step = 1;
  const plugins = [
    new MiniCssExtractPlugin({
      filename: './css/[name].css'
    }),
    new MinifyPlugin()
  ];
  const tempObj = [];

  for (let no = 0; no < fileIDs.length; no += step) {
    testJsFiles.push(path.resolve(`./${fileIDs[no].folder}/${fileIDs[no].id}.js`));
    epString += `"${fileIDs[no].id}":"./${fileIDs[no].folder}/${fileIDs[no].id}.js"`;
    if (no < fileIDs.length - step) {
      epString += ',';
    }

    // Output js/html files excluding 'include_all_css'.
    if (fileIDs[no].id !== 'include_all_css') {
      tempObj[no] = new HtmlWebpackPlugin({
        chunks: [
          `${fileIDs[no].id}`,
          `common_bundle_${countryid}`,
          'include_all_css'
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
  // console.log(testJsFiles);
  
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
    // test: /\.js$/,
    include: testJsFiles,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-transform-runtime']
      }
    }
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
      chunks: 'all',
      minChunks: 3,
      minSize: 30000,
      name: `common_bundle_${countryid}`,
      cacheGroups: {
        vendors: {
          test: /[\/]node_modules[\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  };

  /*
  * ***************************************************************************
  * Module export configured data definition
  */
  return {
    context: devServer.sourceBase,
    devServer,
    devtool: '',
    entry,
    mode: 'production',
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
};

module.exports = exports;
