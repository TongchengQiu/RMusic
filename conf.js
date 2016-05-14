const path = require('path');

module.exports = {
  build: {
    assetsRoot: path.resolve(__dirname, './dist'),
    index: path.resolve(__dirname, './dist/index.html'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false
  },
  dev: {
    port: 8080
  }
};
