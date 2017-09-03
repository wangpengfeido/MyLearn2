/**
 * Created by dell on 2017/9/2.
 */
const path=require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'./010dist'),
        //TODO:__webpack_public_path__
        //publicPath选项决定了html引用动态chunk的路径
        publicPath:'./010dist/',
        // publicPath:'/abc/',
        // publicPath:'https://www.google.com/'
    },
};

