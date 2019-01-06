const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');
const express = require('express');

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

  const renderer = VueServerRenderer.createRenderer();

  renderer.renderToString(app).then(html => {
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <meta charset="UTF-8">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `);
  }).catch(err => {
    res.status(500).end(err);
  });
});

