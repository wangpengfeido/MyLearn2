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
};

