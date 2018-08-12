const path = require('path');
const webpack = require('webpack');
module.exports = {
    // 可以把应用程序和第三方库程序分为不同入口
    entry: {
        app: './src/app.js',
        vendor: './src/vendors.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './010dist')
    },
    mode: 'development',
    /////////// 旧：4.0-//////////////////////
    // plugins: [
    //     //使用commonsChunkPlugin，使公共代码（如第三方库）打包到公共chunk中
    //     new webpack.optimize.CommonsChunkPlugin({
    //         chunks: 'all',
    //         name: 'vendor',             //这里选择一个已有的chunk，可以使公共代码打包到已有chunk中
    //         minSize: 1,
    //     })
    // ],
    //////////////////////////////////////
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'vendor',
            minSize: 1,
        }
    }
};
// TODO:__webpck_require__()
// TODO:长效缓存
// TODO:DllPlugin移除该场景

