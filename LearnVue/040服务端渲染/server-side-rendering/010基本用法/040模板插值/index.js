const fs = require('fs');
const express = require('express');
const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');

const server = express();
server.listen(8123);

server.get('*', (req, res) => {
  const app = new Vue({
    data: function () {
      return {
        requestUrl: req.url,
      };
    },
    template: `<div>访问的url是：{{requestUrl}}</div>`,
  });

  const renderer = VueServerRenderer.createRenderer({
    template: fs.readFileSync('./index.template.html', 'utf-8')
  });

  const context = {
    title: 'hello...',
    meta: `
    <meta charset="UTF-8">
    `,
  };

  // 传入一个渲染上下文对象，提供模板插值数据
  renderer.renderToString(app, context).then(html => {
    res.end(`${html}`);
  }).catch(err => {
    res.status(500).end(err);
  });
});



// 此外，模板支持一些高级特性:
// 在使用 *.vue 组件时，自动注入「关键的 CSS(critical CSS)」；
// 在使用 clientManifest 时，自动注入「资源链接(asset links)和资源预加载提示(resource hints)」；
// 在嵌入 Vuex 状态进行客户端融合(client-side hydration)时，自动注入以及 XSS 防御。

