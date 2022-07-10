const dom = document.querySelector('.test');

const tween = new TWEEN.Tween({ x: 0, y: 0 })
  .to({ x: 100, y: 100 }, 1000)
  .onUpdate(obj => {
    dom.style.transform = `translate(${obj.x}px,${obj.y}px)`;
  })
  .start();

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
}
animate();
