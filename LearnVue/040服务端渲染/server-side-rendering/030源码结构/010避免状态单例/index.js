const fs = require('fs');
const express = require('express');
const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');

const server = express();
server.listen(8123);

// 如果创建一个单例对象，它将在每个传入的请求之间共享。这很有可能导致请求状态污染

// 应该为每个请求创建一个新的根 Vue 实例

// 我们可以创建一个工厂函数，来创建vue实例
function createApp(context) {
  return new Vue({
    data: function () {
      return {
        requestUrl: context.url,
      };
    },
    template: `<div>访问的url是：{{requestUrl}}</div>`,
  });
}

server.get('*', (req, res) => {
  const renderer = VueServerRenderer.createRenderer({
    template: fs.readFileSync('./index.template.html', 'utf-8')
  });

  const context = {
    title: 'hello...',
    meta: `
    <meta charset="UTF-8">
    `,
    url: req.url,
  };

  const app = createApp(context);

  // 传入一个渲染上下文对象，提供模板插值数据
  renderer.renderToString(app, context).then(html => {
    res.end(`${html}`);
  }).catch(err => {
    res.status(500).end(err);
  });
});

// 同样的规则也适用于 router、store 和 event bus 实例。不应该直接从模块中导出实例，而是应该用工厂函数创建。

// 在使用带有 { runInNewContext: true } 的 bundle renderer 时，可以消除此约束，但是由于需要为每个请求创建一个新的 vm 上下文，因此伴随有一些显著性能开销




