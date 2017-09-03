/**
 * Created by dell on 2017/9/2.
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app.js',
        vendor: './src/vendors.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'./010dist')
    },
    plugins: [
        //使用commonsChunkPlugin，使公共代码（如第三方库）打包到公共chunk中
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'             //这里选择一个已有的chunk，可以使公共代码打包到已有chunk中
        })
    ]
};

