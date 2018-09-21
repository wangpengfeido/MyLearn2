const path = require('path');
const webpack = require('webpack');

// 插件
const pluginName = 'ConsoleLogOnBuildWebpackPlugin'; // 插件名应该是驼峰命名。将插件名定义为常量，这样可以在多个hook中使用
class ConsoleLogOnBuildWebpackPlugin {
    apply(complier) {
        complier.hooks.run.tap(pluginName, complication => {
            console.log('webpack 构建开始！')
        });
    }
}

module.exports = {
    entry: './src/01.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './010dist')
    },
    mode: 'development',
    plugins: [
        new ConsoleLogOnBuildWebpackPlugin(),
    ]
};

