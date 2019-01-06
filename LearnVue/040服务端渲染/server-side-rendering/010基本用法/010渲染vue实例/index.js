const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');

// 创建vue实例
const app = new Vue({
  template: `<div>hello world</div>`
});

// 创建renderer
const renderer = VueServerRenderer.createRenderer();

// 将vue实例渲染为html
// renderer.renderToString(app, (err, html) => {
//   if (err) {
//     throw err;
//   }
//   console.log(html);
// });
// 或者
renderer.renderToString(app).then(html => {
  console.log(html);
}).catch(err => {
  console.log(err);
});


