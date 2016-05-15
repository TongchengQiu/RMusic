const path = require('path');

module.exports = {
  build: {
    assetsRoot: path.resolve(__dirname, '../RMusic-p'),
    index: path.resolve(__dirname, '../RMusic-p/index.html'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false
  },
  dev: {
    port: 8080
  }
};
