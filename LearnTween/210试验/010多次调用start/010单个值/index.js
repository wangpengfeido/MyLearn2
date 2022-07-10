const dom = document.querySelector('.test');

const obj = { x: 0, y: 0 };
const tween = new TWEEN.Tween(obj)
  .to({ x: 100, y: 100 }, 1000)
  .onUpdate(() => {
    dom.style.transform = `translate(${obj.x}px,${obj.y}px)`;
  })
  .onComplete(() => {
    console.log('on complete');
  });

function start() {
  tween.start();
}

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
}
animate();

// 当to为单个值
// 多次调用start会使tween重新从初始值开始执行，并中断上一次的调用
