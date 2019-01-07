const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {test: /\.vue/, use: [{loader: 'vue-loader'}]},
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};





