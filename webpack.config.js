'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let plugins = [
  new ExtractTextPlugin({ filename: 'bundle.css'}),
  new HTMLPlugin({
    template: `${__dirname}/app/index.html`,
  }),
];

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  devtool: 'eval',
  plugins,
  output: {
    filename: 'bundle.js',
    path: require('path').resolve('build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(woff|ttf|eot).*/,
        use: 'url-loader?limit=10000&name=font/[name].[ext]',
      },
      {
        test: /\.(jpg|jpeg|bmp|svg|tiff|gif|png)$/,
        use: 'url-loader?limit=10000&name=image/[hash].[ext]',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader', options: { sourceMap: true },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader', options: {
              sourceMap: true,
              includePaths: [`${__dirname}/app/scss/lib`],
            },
          }],
        }),
      },
    ],
  },
};
