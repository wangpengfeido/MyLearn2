const path = require('path');
const webpack = require('webpack');

// 这个是原来的旧例子，查看新例子请查看后面的../020

// 插件目的在于解决 loader 无法实现的其他事。

//webpack 插件是一个具有 apply 方法的 JavaScript 对象。
// apply 方法会被 webpack compiler 调用，并且 compiler 对象可在整个编译生命周期访问。


//这是一个插件////////////////////////////////////////////////
function ConsoleLogOnBuildWebpackPlugin() {

}

ConsoleLogOnBuildWebpackPlugin.prototype.apply = function (compiler) {
    compiler.plugin('run', function (compiler, callback) {
        console.log("webpack 构建过程开始！！！");

        callback();
    });
};
/////////////////////////////////////////////////////////////////////////


module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './010dist'),
        publicPath: './010dist/',
    },
    plugins: [
        new ConsoleLogOnBuildWebpackPlugin(),
        //也可以使用内联方式定义插件
        //function具有apply方法（思考js的Function.prototype.apply方法），此时this指向compiler
        function () {
            this.plugin('run', function (compiler, callback) {
                console.log("这里是内联定义插件！！！webpack 构建过程开始！！！");

                callback();
            });
        },
    ],
    mode: 'development',
};

// TODO
