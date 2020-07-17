const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    app: './main/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    chunkFilename: '[name].js',
    publicPath: '',
  },
  mode: 'development',
  plugins: [new HtmlWebpackPlugin()],
};

webpack(config).run();
