const dom = document.querySelector('.test');

function start() {
  const tween = new TWEEN.Tween({ x: 0, y: 0 })
    .to({ x: 100, y: 100 }, 1000)
    .onUpdate(obj => {
      dom.style.transform = `translate(${obj.x}px,${obj.y}px)`;
    })
    .start();
  console.log(TWEEN.getAll());
}

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
}
animate();

// 当tween执行完成后，会自动从TWEEN group中移除
