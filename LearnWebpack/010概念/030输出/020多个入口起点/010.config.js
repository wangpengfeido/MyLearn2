const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        one: './src/01.js',
        two: './src/02.js',
    },
    output: {
        // 当有多个chunk时，应该使用占位符
        // TODO:占位符
        filename: '[name].js',
        path: path.resolve(__dirname, './010dist')
    },
    mode: 'development',
};

