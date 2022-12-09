// import {a} from './a.js';
// export function b() {
//   console.log('b');
// }
// a();

System.register(['./a.js'], function (_export, _context) {
  console.log('b111111111111111111111111111111');
  var a;

  _export('b', function b() {
    console.log('b');
  });

  return {
    setters: [
      function (m) {
        console.log('b22222222222222222222222222222222');
        a = m.a;
      },
    ],
    execute: function () {
      console.log('b333333333333333333333333333333333');
      a();
    },
  };
});
