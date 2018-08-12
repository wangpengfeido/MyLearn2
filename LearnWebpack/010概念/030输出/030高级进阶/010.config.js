/**
 * Created by dell on 2017/9/2.
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './010dist'),
        // publicPath决定了动态引用chunk的路径(见src/index.js)。
        // 通常与chunk生成的路径匹配，如果路径设置不正确，则会导致加载不到文件
        publicPath: './010dist/',
        // publicPath:'/abc/',
        // publicPath:'https://www.google.com/'
    },
    mode: 'development',
};
// TODO:__webpack_public_path__

