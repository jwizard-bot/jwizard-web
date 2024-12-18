/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const path = require('path');
const { SourceMapDevToolPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.config.cjs');

module.exports = merge(webpackCommonConfig(false), {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    port: 8764,
    historyApiFallback: true,
    hot: false,
    static: [path.resolve(__dirname), path.resolve(__dirname, '..', '..', 'packages')],
  },
  plugins: [
    new SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
});
