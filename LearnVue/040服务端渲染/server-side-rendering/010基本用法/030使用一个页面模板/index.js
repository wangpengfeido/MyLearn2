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

  // 使用页面模板
  const renderer = VueServerRenderer.createRenderer({
    template: fs.readFileSync('./index.template.html','utf-8')
  });

  renderer.renderToString(app).then(html => {
    res.end(`${html}`);
  }).catch(err => {
    res.status(500).end(err);
  });
});

