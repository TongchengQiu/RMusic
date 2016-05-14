const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./conf.js');
const projectRoot = path.resolve(__dirname, './');

const entryFile = './src/index.js';

module.exports = {
  target: 'web',
  entry: entryFile,
  output: {
    path: config.build.assetsRoot,
    filename: path.join(config.build.assetsSubDirectory, '[name].[chunkhash].js'),
    chunkFilename: path.join(config.build.assetsSubDirectory, '[id].[chunkhash].js'),
    publicPath: config.assetsPublicPath
  },
  module: {
    preLoaders: [
      {
        test: /\.js[x]?$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=es2015&presets[]=react']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'autoprefixer', 'sass']
      },
      {
        test: /\.json$/,
        loaders: ['json'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loaders: [`url?limit=102&name=${path.join(config.build.assetsSubDirectory, '[name].[hash:7].[ext]')}`]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
