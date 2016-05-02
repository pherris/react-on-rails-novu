// Run like this:
// cd client && npm run build:dev:client
// Note that Foreman (Procfile.dev) has also been configured to take care of this.

// NOTE: All style sheets handled by the asset pipeline in rails

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./webpack.client.base.config');
const devBuild = process.env.NODE_ENV !== 'production';

config.output = {
  filename: '[name]-bundle.js',
  path: '../app/assets/webpack',
};

// You can add entry points specific to rails here
// The es5-shim/sham is for capybara testing
config.entry.vendor.unshift(
  'es5-shim/es5-shim',
  'es5-shim/es5-sham',
  'jquery-ujs',
  'bootstrap-loader/extractStyles'
);

// See webpack.common.config for adding modules common to both the webpack dev server and rails
config.module.loaders.push(
  {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
  },
  {
    test: require.resolve('react'),
    loader: 'imports?shim=es5-shim/es5-shim&sham=es5-shim/es5-sham',
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(
      'style',
      'css?minimize&modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]' +
      '!postcss'
    ),
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(
      'style',
      'css?minimize&modules&importLoaders=3&localIdentName=[name]__[local]__[hash:base64:5]' +
      '!postcss' +
      '!sass' +
      '!sass-resources'
    ),
  },
  {
    test: /\.json$/,
    loader: "json-loader"
  }
);

module.exports = config;

config.plugins.push(
  new ExtractTextPlugin('[name]-bundle.css', { allChunks: true }),
  new webpack.optimize.DedupePlugin()
);

if (devBuild) {
  console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
  config.devtool = 'eval-source-map';
} else {
  console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}
