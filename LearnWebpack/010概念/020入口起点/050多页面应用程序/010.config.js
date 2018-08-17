const path = require('path');
const webpack = require('webpack');

module.exports = {
    // 多页面应用程序时，可以为每个页面使用（且推荐只使用）一个入口。
    entry: {
        pageOne: './src/page-one.js',
        pageTwo: './src/page-two.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './010dist'),
    },
    // 将多个bundle中共享的代码提取出来，使得公共代码可以复用加载
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'common',
            minSize: 1,
        }
    },
    mode:'development'
};

