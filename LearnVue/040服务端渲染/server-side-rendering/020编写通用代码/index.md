## 服务器上的数据响应
每个请求应该是全新的、独立的应用程序实例，以避免交叉请求造成的状态污染。

禁用响应式数据。因为渲染时其状态已经确定了，响应式过程是多余的，还可以节省性能。

## 组件生命周期钩子函数
只有beforeCreate和created会在ssr调用。

应该避免beforeCreate和created中产生全局副作用的代码，例如setInterval，你没有机会销毁它。

## 访问特定平台(Platform-Specific) API
通用代码不应该接受特定平台的api，例如window/document。

对于通用代码，这时应该将平台特定实现包含在通用api。对于仅浏览器的api，通常将其包含在生命周期钩子中。

考虑到第三方library，可能通过模拟全局变量使其正常运行，但这只是hack的做法，并可能影响到其他library的环境检测代码。

## 自定义指令
大多数自定义指令直接操作DOM，因此在ssr会导致错误。
1. 推荐使用组件作为抽象机制，并运行在「虚拟 DOM 层级(Virtual-DOM level)」（例如，使用渲染函数(render function)）。
2. 如果你有一个自定义指令，但是不是很容易替换为组件，则可以在创建服务器 renderer 时，使用 directives 选项所提供"服务器端版本(server-side version)"。



