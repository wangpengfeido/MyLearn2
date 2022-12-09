const dom = document.querySelector('.test');

const tween = new TWEEN.Tween({ x: 0 }).to({ x: [400, 300] }, 2000).onUpdate(obj => {
  dom.style.transform = `translateX(${obj.x}px)`;
});

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

// to的值可以为一个数组，将会依次经过指定的值
// 每段所需要的时间进度是相同的