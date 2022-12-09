document.querySelector('#btn1').addEventListener('click', () => {
  import('./a.mjs').then((module) => {});
});
