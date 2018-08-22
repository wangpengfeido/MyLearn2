const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/01.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './010dist')
    },
    mode: 'development',
    plugins:[
        // 因为插件可以传递参数，你必须传递一个new实例在plugins
        new webpack.ProgressPlugin({}),
    ],
};

