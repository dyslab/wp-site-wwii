/* eslint-disable */
const path = require('path');
const createError = require('http-errors');
const express = require('express');
// const webpack = require('webpack');
// const webpackDevMiddleware =  require('webpack-dev-middleware');
// const webpackConfig = require('./webpack.config');
const config = require('./wp.config.js');
const app = express();

// app.use(webpackDevMiddleware(webpack(webpackConfig)));
// app.use(express.static(DIST_DIR));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'server', 'views'));
app.use('/dist', express.static(config.contentBase));

app.get('/', (req, res) => {
  res.render('index', { title:'INDEX' });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'ERROR' });
})

console.log(`\n\x1b[31;47;3;1m wp-site-wwii \x1b[0m Web Server Started. Click Link: [\x1b[32mhttp://localhost:${config.port}/dist/\x1b[0m]\n`);
console.log(`\x1b[33mCtrl + C\x1b[0m to Exit...\n`);

app.listen(config.port);
