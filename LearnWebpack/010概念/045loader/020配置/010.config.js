const path = require('path');
const webpack = require('webpack');

//有三种方式使用loader：配置；内联；CLI

module.exports = {
    entry: './src/01.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './010dist')
    },
    module: {
        // 在配置中指定loader
        // 应该尽量使用这种方式
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {modules: true,}
                    }
                ]
            },
        ]
    },
    mode: 'development',
};

