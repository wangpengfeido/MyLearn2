// import {b} from './b.js';
// export function a() {
//   b();
// }

System.register(['./b.js'], function (_export, _context) {
  console.log('a111111111111111111111111111111');
  var b;
  
  _export({
    a: function () {
      b();
    },
  });

  // 返回的是 {setters,execute} ，而不是直接返回execute函数。
  // 这是为了在运行 execute 之前，模块绑定关系就能在模块树传递。
  // 绑定 setter 和 execute 分离，让我们能准确匹配 ES 模块语法
  return {
    setters: [
      function (m) {
        console.log('a22222222222222222222222222222222');
        b = m.b;
      },
    ],
    execute: function () {
      console.log('a333333333333333333333333333333333');
    },
  };
});
