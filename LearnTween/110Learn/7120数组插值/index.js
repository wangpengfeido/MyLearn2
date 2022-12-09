const dom = document.querySelector('.test');

const tween = new TWEEN.Tween({ x: 0 })
  .to({ x: [400, 300] }, 2000)
  .onUpdate(obj => {
    dom.style.transform = `translateX(${obj.x}px)`;
  })
  // .interpolation(TWEEN.Interpolation.Linear);
  .interpolation(TWEEN.Interpolation.Bezier);
// .interpolation(TWEEN.Interpolation.CatmullRom);

function start() {
  const startTime = Date.now();
  tween.start();
  tween.onComplete(() => {
    console.log(startTime, Date.now(), Date.now() - startTime);
  });
}

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
}
animate();

// interpolation 用于计算某个进度比例对应的值
