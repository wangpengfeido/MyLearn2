/**
 * Created by dell on 2017/9/2.
 */
const path = require('path');
const webpack = require('webpack');

let webConfig = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name]_web.js',
        path: path.resolve(__dirname, './010dist'),
    },
    //指定构建目标
    target: 'web',               //默认值
};

let nodeConfig= {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name]_node.js',
        path: path.resolve(__dirname, './010dist'),
    },
    //指定构建目标
    target: 'node',
};

//打包两份分离的配置来创建同构的库
module.exports = [webConfig, nodeConfig];

