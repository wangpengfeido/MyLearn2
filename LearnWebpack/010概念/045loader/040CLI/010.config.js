const path = require('path');
const webpack = require('webpack');

// CLI方式。使用--module-bind 参数

// 例： webpack --module-bind 'css=style-loader!css-loader?{modules:true}'
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

