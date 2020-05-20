const path = require('path');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './scripts.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devServer: {
    port: 3000
  },
  plugins: [
    new copyPlugin({
      patterns: [
        {
          from: './*.html',
          to: path.resolve(__dirname, 'dist')
        },
        {
          from: './*.css',
          to: path.resolve(__dirname, 'dist')
        }
      ]
    })
  ]
}