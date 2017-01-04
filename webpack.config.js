var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'app/public');
var APP_DIR = path.resolve(__dirname, 'app/src');
var REACT_DIR = path.resolve(__dirname, 'app/containers')
var ASSETS_DIR = path.resolve(__dirname, 'app/assets')
var STYLE_DIR = path.resolve(__dirname, 'app/styles')

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : [APP_DIR,REACT_DIR],
        loader : 'babel'
      },
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
