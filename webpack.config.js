/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// entry point, output and plugins definition
const ep = {
    // 'test_js': './src/test/test_document_write.js'
    // 'test_html': './src/test/test_html_output.html'
    'index': './src/views/index.js',
    'about': './src/views/about.js'
};
const op = {
  filename: '[name].bundle.js',
  publicPath: '',
  path: path.resolve(__dirname, 'dist/js')
};
const pins = [
  new HtmlWebpackPlugin({
    filename: '../index.html',
    template: './src/views/index.pug',
    chunks: 'index',
    minify: false,
    inject: false,
    favicon: ''
  }),
  new HtmlWebpackPlugin({
    filename: '../about.html',
    template: './src/views/about.pug',
    chunks: 'about',
    minify: false,
    inject: false,
    favicon: ''
  })
];

// webpack-dev-server config. It's not for "target: node" apps, just for "target: web" apps.
const dserver = {
  port: 8080,
  contentBase: path.join(__dirname, 'dist')
}

// loader definition
const es2015 = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: "babel-loader"
}
const pugloader = {
  test: /\.pug$/,
  // use: [ 'html-loader', 'pug-html-loader' ]
  use: [ 'pug-loader' ]
};
const cssloader = {
  test: /\.css$/,
  use: [
    'style-loader',
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

// module export definition
const config = {
  entry: ep,
  output: op,
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: dserver,
  target: "node", 
  module: { rules: [ es2015, pugloader, cssloader, imageloader, fontloader ] },
  plugins: pins
};

module.exports = config;
