const path = require('path');
const webpack = require('webpack');

// loader可以将模块进行转换，例如将其他类型的文件（如css、图片等）转换为js

// 在使用前需要安装对应的loader

module.exports = {
    entry: './src/01.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './010dist')
    },
    module: {
        rules: [
            {test: /\.css$/, loader: 'css-loader'},
        ]
    },
    mode: 'development',
};

