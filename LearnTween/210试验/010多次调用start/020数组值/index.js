const dom = document.querySelector('.test');

const tween = new TWEEN.Tween({ x: 0 }).to({ x: [400, 300] }, 5000).onUpdate(obj => {
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

// 当to为数组值时，start的重复调用非常奇怪
// 每次start调用都会将当前值添加进数组开头，并忽略初始值，只计算数组中的值
// 最终的结果就是导致数组中的值越来越多,最有可能是添加了很多结束值
