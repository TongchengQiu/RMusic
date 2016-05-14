const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const devConf = require('./conf.js').dev;

const projectRoot = path.resolve(__dirname, './');

const entry = './src/index.js';

module.exports = {
  target: 'web',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './',
    port: devConf.port
  },
  entry: [
    entry
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: '/static/',
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
        loaders: ['url?limit=10240&name=[name].[hash:7].[ext]']
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
      inject: true
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${devConf.port}`
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: '#eval-source-map',
};
