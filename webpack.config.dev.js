var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var devConf = require('./conf.js').dev;

var projectRoot = path.resolve(__dirname, './')

var outputDir = './dist';
var entry = './src/index.js';

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
    entry,
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:' + devConf.port
  ],
  output: {
    path: outputDir + '/static',
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
        loaders: ['url?limit=102&name=[name].[hash:7].[ext]']
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    new HtmlWebpackPlugin({
      filename: __dirname + '/dist/index.html',
      template: './src/index.html',
      inject: true
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:' + devConf.port })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: '#eval-source-map',
};
