const dom = document.querySelector('.test');

const tween = new TWEEN.Tween({ x: 0, y: 500 }).to({ x: '+100', y: '-100' }, 1000).onUpdate(obj => {
  dom.style.transform = `translate(${obj.x}px,${obj.y}px)`;
});

function start() {
  tween.start();
}

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
}
animate();

// to方法的值可以传入包含正负号的字符串，表示相对于起始值的值
