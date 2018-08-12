const path = require('path');
const webpack = require('webpack');

module.exports = {
    ////////////单入口简写。默认入口名为main//////////////////////////////
    // entry: './src/01.js',
    /////////////相当于//////////////////////////////
    // entry: {
    //     main: './src/01.js',
    // },
    //////////////////当向entry传入一个数组时，将创建多个主入口，它们将导向同一个chunk（打包到一起）//////////////////////////////////
    // entry: ['./src/01.js', './src/02.js'],
    ////////////这样也一样//////////////////////////////////
    entry: {
        one: ['./src/01.js', './src/02.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './010dist')
    },
    mode: 'development',
};

