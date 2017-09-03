/**
 * Created by dell on 2017/9/2.
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app.js',
        app2: './src/app2.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'./010dist'),
        publicPath:'./010dist/',
    },
    plugins: [
        //使用commonsChunkPlugin，使公共代码（如第三方库）打包到公共chunk中
        new webpack.optimize.CommonsChunkPlugin({
            //传入字符串
            name:'common',
            // name: 'app2'             //这里选择一个已有的chunk，可以使公共代码打包到已有chunk中

            //传入字符串数组
            // names:['common'],
            // names:['common1','common2',],        //此时相当于多次调用此插件，生成的common1是app\app2\common2三个chunk的公共代码

            // ansy:'ansyCommon'

        })
    ]
};

