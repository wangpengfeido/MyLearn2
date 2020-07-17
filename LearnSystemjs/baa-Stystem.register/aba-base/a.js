// import { b as bb } from './b.js';
// export var a = 'aaa';
// export function func() {
//   return bb;
// }
// export class C {
// }

// 上面的 ES6 模块可转换为

System.register(['./b.js'], function (_export, _context) {
  var a, bb, C;
  function func() {
    return bb;
  }
  _export('func', func);
  return {
    setters: [
      function (m) {
        bb = m.b;
      },
    ],
    execute: function () {
      console.log(_context.meta);
      a = 'aaa';
      _export('a', a);
      C = class {};
      _export('C', C);
    },
  };
});
