const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/01.js',
    },
    output: {
        // filename：输出文件名
        filename: '[name].js',
        // path:输出文件路径
        path: path.resolve(__dirname, './010dist')
    },
    mode: 'development',
};

