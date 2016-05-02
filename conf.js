var path = require('path');
module.exports = {
  build: {
    index: path.resolve(__dirname, '../RMusic-p/index.html'),
    assetsRoot: path.resolve(__dirname, '../RMusic-p'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false
  },
  dev: {
    port: 8080
  }
};
