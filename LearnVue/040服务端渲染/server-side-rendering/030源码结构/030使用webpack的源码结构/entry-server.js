// 服务端引导逻辑
import {createApp} from "./app";

// 服务器entry导出一个工厂函数，每次渲染调用此函数。
// 除了创建和返回应用程序实例之外，它不会做太多事情 - 但是稍后我们将在此执行服务器端路由匹配 (server-side route matching) 和数据预取逻辑 (data pre-fetching logic)。
export default context => {
  const {app} = createApp();
  return app;
}






