// app.js 是通用entry
// 对于纯客户端，创建根Vue实例，并挂载到DOM
// 对于ssr，责任转移到纯客户端entry。
// app.js简单导出一个工厂函数

import Vue from 'vue';
import App from './App.vue';

// 导出一个工厂函数，用于创建新的应用程序、router 和 store 实例
export function createApp() {
  const app = new Vue({
    render: h => h(App),
  });
  return {app};
}




