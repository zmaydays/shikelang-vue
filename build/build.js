
var path = require('path');
var rm = require('rimraf');
var webpack = require('webpack');
var webpackConf = require('./webpack.build.conf.js');

rm(path.join(__dirname, '..', 'dist'), function (err) {
    if (err) throw err;
    webpack(webpackConf, function (err, stats) {
        // console.log(err,stats);
    });
})

