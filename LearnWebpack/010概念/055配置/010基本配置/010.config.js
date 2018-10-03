const path = require('path');
const webpack = require('webpack');

// webpack 的配置文件，是导出一个对象的 JavaScript 文件。

// 因为 webpack 配置是标准的 Node.js CommonJS 模块，可以：
// 通过 require(...) 导入其他文件
// 通过 require(...) 使用 npm 的工具函数
// 使用 JavaScript 控制流表达式，例如 ?: 操作符
// 对常用值使用常量或变量
// 编写并执行函数来生成部分配置

// 应该避免：
// 在使用 webpack 命令行接口(CLI)时，访问命令行接口(CLI)参数（应该编写自己的命令行接口(CLI)，或使用 --env）
// 导出不确定的值（调用 webpack 两次应该产生同样的输出文件）
// 编写很长的配置（应该将配置拆分为多个文件）

module.exports = {
    entry: {
        main: './src/01.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './010dist')
    },
    mode: 'development',
};

