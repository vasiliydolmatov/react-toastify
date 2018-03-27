/* eslint-disable */
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: __dirname + "/dist",
    filename: 'ReactToastify.js',
    libraryTarget: 'umd',
    library: 'ReactToastify'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react-app'],
          sourceMap: true
        }
      }
    ]
  },
  externals: [
    'react',
    'react-dom',
    'prop-types',
    'react-transition-group',
    'glamor'
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
