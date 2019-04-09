require('babel-register')({
  plugins: [
    'babel-plugin-transform-es2015-modules-commonjs',
    'babel-plugin-transform-object-rest-spread',
    'babel-plugin-transform-runtime'
  ],
});

module.exports = require('./index.js');
