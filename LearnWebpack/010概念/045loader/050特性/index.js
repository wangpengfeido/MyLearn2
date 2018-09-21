// loader 支持链式传递。
// loader 链中每个 loader，都对前一个 loader 处理后的资源进行转换。
// loader 链会按照相反的顺序执行。
// 例如前面的例子，会先执行css-loader，再将其结果执行style-loader

// loader 可以是同步的，也可以是异步的。

// loader 运行在 Node.js 中，并且能够执行任何可能的操作。

// loader 接收查询参数。用于对 loader 传递配置。

// loader 也能够使用 options 对象进行配置。

// TODO:
// 除了使用 package.json 常见的 main 属性，还可以将普通的 npm 模块导出为 loader，做法是在 package.json 里定义一个 loader 字段。

// TODO:
// 插件(plugin)可以为 loader 带来更多特性。

// TODO:
// loader 能够产生额外的任意文件。




