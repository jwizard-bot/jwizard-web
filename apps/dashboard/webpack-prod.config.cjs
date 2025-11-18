const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const { sentryWebpackPlugin } = require('@sentry/webpack-plugin');
const webpackCommonConfig = require('./webpack.config.cjs');

module.exports = merge(webpackCommonConfig(true), {
  mode: 'production',
  devtool: 'hidden-source-map',
  optimization: {
    runtimeChunk: 'single',
    minimizer: [
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.js$/,
      }),
      new CssMinimizerWebpackPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        },
      }),
      new TerserPlugin({
        parallel: 4,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    sentryWebpackPlugin({
      org: 'jwizard',
      project: 'jwizard-dashboard',
      authToken: process.env.SENTRY_AUTH_TOKEN,
      telemetry: false,
      sourcemaps: {
        // delete all source maps before create final build
        filesToDeleteAfterUpload: '**/*.map',
      },
      release: {
        name: `jwizard-dashboard@${process.env.JWIZARD_BUILD_VERSION}`,
        create: true,
      },
    }),
  ],
});
