const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: './src/01.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './010dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: []
            },
        ]
    },
    mode: 'development',
};

