/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const dotenv = require('dotenv');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { DefinePlugin } = require('webpack');

const loadFileContent = filePath => {
  const envFilePath = path.resolve(__dirname, filePath);
  if (fs.existsSync(envFilePath)) {
    return dotenv.parse(fs.readFileSync(envFilePath));
  }
  return {};
};

const loadEnvVariables = isProd => {
  const mergedConfig = {
    ...loadFileContent('.env'),
    ...loadFileContent(`.env.${isProd ? 'production' : 'development'}`),
  };
  const envVariables = {};
  for (const k in mergedConfig) {
    const envSource = k in process.env ? process.env : mergedConfig;
    envVariables[`process.env.${k}`] = JSON.stringify(envSource[k]);
  }
  return envVariables;
};

const parseHash = isProd => (isProd ? 'contenthash:10' : 'name');

module.exports = isProd => ({
  entry: {
    app: [path.resolve(__dirname, 'src', 'index.tsx')],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `js/jw-[${parseHash(isProd)}]-bundle.js`,
    chunkFilename: `js/jw-[${parseHash(isProd)}]-chunk.js`,
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, '..', '..', 'node_modules'),
    ],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]s$/,
        exclude: /\/node_modules\//,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-syntax-dynamic-import'],
              compact: isProd,
            },
          },
        ],
      },
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules|\.d\.ts$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.ttf$/,
        type: 'asset/resource',
        generator: {
          filename: `fonts/jw-[${parseHash(isProd)}][ext]`,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: `assets/jw-[${parseHash(isProd)}][ext]`,
        },
      },
    ],
  },
  optimization: {
    minimize: isProd,
    splitChunks: {
      minSize: 17000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '_',
      enforceSizeThreshold: 30000,
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]/,
          priority: -5,
          reuseExistingChunk: true,
          chunks: 'initial',
          name: 'common_app',
          minSize: 0,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        defaultVendors: false,
        reactPackage: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
          name: 'vendor_react',
          chunks: 'all',
          priority: 10,
        },
      },
    },
  },
  plugins: [
    new DefinePlugin({
      ...loadEnvVariables(isProd),
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: true,
      minify: {
        removeComments: isProd,
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: `css/jw-[${parseHash(isProd)}]-bundle.css`,
      chunkFilename: `css/jw-[${parseHash(isProd)}]-chunk.css`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: path.resolve(__dirname, '..', '..', 'i18n-translations', 'common'),
          to: path.resolve(__dirname, 'dist', 'locales', 'common'),
        },
        {
          from: path.resolve(__dirname, '..', '..', 'i18n-translations', 'dashboard'),
          to: path.resolve(__dirname, 'dist', 'locales', 'dashboard'),
        },
      ],
    }),
  ],
});
