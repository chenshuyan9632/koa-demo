require('babel-register')({
  plugins: [
    'babel-plugin-transform-es2015-modules-commonjs',
    'babel-plugin-transform-object-rest-spread'
  ],
});

module.exports = require('./index.js');
