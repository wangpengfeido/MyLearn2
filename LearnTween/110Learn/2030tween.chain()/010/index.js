const dom = document.querySelector('.test');

const tweenB = new TWEEN.Tween({ x: 100, y: 0 })
  .to({ x: 100, y: 100 }, 1000)
  .onStart(() => {
    console.log('b start');
  })
  .onUpdate(obj => {
    console.log('b update');
    dom.style.transform = `translate(${obj.x}px,${obj.y}px)`;
  })
  .onComplete(() => {
    console.log('b complete');
  });

const tweenA = new TWEEN.Tween({ x: 0, y: 0 })
  .to({ x: 100, y: 0 }, 1000)
  // chain：在complete后立即调用被链接实例的start
  .chain(tweenB)
  .onUpdate(obj => {
    console.log('a update');
    dom.style.transform = `translate(${obj.x}px,${obj.y}px)`;
  })
  .onComplete(() => {
    console.log('a complete');
  })
  .start();

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
}
animate();

// 注意：chian 是对调用实例的修改，并不会创建新的实例
