const path = require('path');
const webpack = require('webpack');

module.exports = {
    // 使用对象语法定义多个入口
    // 这是一种可重用并与其他配置组合的使用方法。将关注点分离，再使用webpack-merge这样的工具将它们合并
    // TODO:webpack-merge
    entry: {
        one: './src/01.js',
        two: './src/02.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './010dist')
    },
    mode: 'development',
};

