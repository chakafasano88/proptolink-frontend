const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    },
    
    config.resolve.alias['~'] = path.resolve(__dirname);
    return config
  }
}
