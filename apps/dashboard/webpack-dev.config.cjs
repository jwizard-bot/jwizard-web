const path = require('path');
const dotenv = require('dotenv');
const { SourceMapDevToolPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.config.cjs');

dotenv.config({ path: '.env.development' });

module.exports = merge(webpackCommonConfig(false), {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    port: 8764,
    historyApiFallback: true,
    hot: false,
    static: [path.resolve(__dirname), path.resolve(__dirname, '..', '..', 'packages')],
    proxy: [
      {
        context: ['/api'],
        target: process.env.JWIZARD_API_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    ],
    setupMiddlewares: (middlewares, devServer) => {
      devServer.app.get('/globals.js', (_, res) => {
        const configScript = `window.jw = {
          JWIZARD_CANONICAL_URL: '${process.env.JWIZARD_CANONICAL_URL}',
          JWIZARD_LANDING_PAGE_URL: '${process.env.JWIZARD_LANDING_PAGE_URL}',
          JWIZARD_ANALYTICS_UMAMI_URL: '${process.env.JWIZARD_ANALYTICS_UMAMI_URL}',
          JWIZARD_ANALYTICS_UMAMI_WEBSITE_ID: '${process.env.JWIZARD_ANALYTICS_UMAMI_WEBSITE_ID}',
        };`;
        res.setHeader('Content-Type', 'application/javascript');
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
        res.send(configScript);
      });
      return middlewares;
    },
  },
  plugins: [
    new SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
});
