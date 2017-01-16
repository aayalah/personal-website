var webpack = require('webpack');
var path = require('path');

/*var BUILD_DIR = path.resolve(__dirname, 'app/public');
var APP_DIR = path.resolve(__dirname, 'app');
var REACT_DIR = path.resolve(__dirname, 'app/containers')
var ASSETS_DIR = path.resolve(__dirname, 'app/assets')
var STYLE_DIR = path.resolve(__dirname, 'app/styles')*/

var config = {
  entry: './index.js',
  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
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
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : []
};

module.exports = config;
