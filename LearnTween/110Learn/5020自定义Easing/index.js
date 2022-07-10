const dom = document.querySelector('.test');

// 接收一个参数，它表示过渡进程，范围是[0,1]
// 返回一个值，表示从起始值到结束值的比例
function myEasing(k) {
  return Math.floor(k * 10) / 10;
}

const tween = new TWEEN.Tween({ x: 0, y: 0 })
  .to({ x: 200, y: 200 }, 2000)
  .onUpdate(obj => {
    dom.style.transform = `translate(${obj.x}px,${obj.y}px)`;
  })
  .easing(myEasing)
  .start();

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
}
animate();
