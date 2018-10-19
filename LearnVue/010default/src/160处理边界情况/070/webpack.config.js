const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const configuration = {
    entry: {
        app: path.resolve(__dirname, './index010.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
    },
    mode: 'development',
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index010.html',
            template: path.resolve(__dirname, './index010.html'),
            inject: true,
            chunks: ['app'],
        }),
    ],
};

const compiler = webpack(configuration);

compiler.run();
