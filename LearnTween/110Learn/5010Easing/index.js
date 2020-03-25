const dom = document.querySelector('.test');

const tween = new TWEEN.Tween({ x: 0, y: 0 })
  .to({ x: 200, y: 200 }, 2000)
  .onUpdate(obj => {
    dom.style.transform = `translate(${obj.x}px,${obj.y}px)`;
  })
  .easing(TWEEN.Easing.Bounce.InOut)
  .start();

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
}
animate();
