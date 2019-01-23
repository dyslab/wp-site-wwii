/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// work base dir -> './src/'
const work_base_dir = path.resolve(__dirname, 'src');

// entry point, output and plugins definition
const ep = {
    // 'test_js': './test/test_document_write.js'
    // 'test_html': './test/test_html_output.html'
    index: './views/index.js',
    about: './views/about.js'
};
const op = {
  filename: './js/[name].bundle.js',
  publicPath: '',
  path: path.resolve(__dirname, 'dist')
};
const pins = [
  new HtmlWebpackPlugin({
    title: '首页',
    filename: './index.html',
    template: './views/template.pug',
    chunks: ['index'],
    minify: false,
    inject: 'body',
    favicon: './images/favicon.ico'
  }),
  new HtmlWebpackPlugin({
    title: '关于',
    filename: './about.html',
    template: './views/template.pug',
    chunks: ['about'],
    minify: false,
    inject: 'body',
    favicon: './images/favicon.ico'
  }),
  new CopyWebpackPlugin([{
    from: './common/**/*',
    to: path.resolve(__dirname, 'dist'),
    toType: 'dir'
  }], { context: work_base_dir }),
  new MiniCssExtractPlugin({
    filename: './css/[name].bundle.css'
  })
];

// webpack-dev-server config. It's not for 'target: node' apps, just for 'target: web' apps.
const dserver = {
  port: 8080,
  contentBase: path.join(__dirname, 'dist')
}

// loader definition
const es2015 = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
}
const pugloader = {
  test: /\.pug$/,
  // use: [ 'html-loader', 'pug-html-loader' ]
  use: [ 'pug-loader' ]
};
const cssloader = {
  test: /\.css$/,
//  use: [ 'style-loader', 'css-loader' ]
  use: [
    { loader: MiniCssExtractPlugin.loader },
    'css-loader'
  ]
};
const imageloader = {
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        outputPath: 'images',
        name: '[name].[ext]'
      },
    },
  ],
};
const fontloader = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: ['file-loader']
};
// const htmlloader = {
//   test: /\.html$/,
//   use: ['file-loader?name=[name].[ext]', 'extract-loader', 'html-loader']
//   use: ['html-loader']
// };

// module export configured definition
const config = {
  context: work_base_dir,  
  entry: ep,
  output: op,
  mode: 'development',
  devtool: '', // 'eval-source-map',
  devServer: dserver,
  target: 'web', 
  module: { rules: [ es2015, pugloader, cssloader, imageloader, fontloader ] },
  plugins: pins
};

module.exports = config;
