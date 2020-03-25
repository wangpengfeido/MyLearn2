const dom = document.querySelector('.test');

const tweenA = new TWEEN.Tween({ x: 0, y: 0 }).to({ x: 100, y: 0 }, 1000).onUpdate(obj => {
  console.log('a update');
  dom.style.transform = `translate(${obj.x}px,${obj.y}px)`;
});

const tweenB = new TWEEN.Tween({ x: 100, y: 0 }).to({ x: 100, y: 100 }, 1000).onUpdate(obj => {
  console.log('b update');
  dom.style.transform = `translate(${obj.x}px,${obj.y}px)`;
});

tweenA.chain(tweenB);
tweenB.chain(tweenA);
tweenA.start();

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
}
animate();
