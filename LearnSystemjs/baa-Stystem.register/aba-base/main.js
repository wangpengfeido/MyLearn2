document.querySelector('#btn1').addEventListener('click', () => {
  System.import('./a.js').then((module) => {
    console.log(module.a);
    console.log(module.func());
    console.log(module.C);
  });
});
