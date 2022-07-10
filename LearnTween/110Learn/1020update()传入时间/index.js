const dom = document.querySelector('.test');

const tween = new TWEEN.Tween({ x: 0, y: 0 })
  .to({ x: 100, y: 100 }, 1000)
  .onUpdate(obj => {
    dom.style.transform = `translate(${obj.x}px,${obj.y}px)`;
  })
  .start();

// TWEEN可传入时间，以传入的时间来计算时间的流逝
time = 0;
function update() {
  time += 100;
  TWEEN.update(time);
}

// 并且支持时间的倒流
function update2() {
  time -= 100;
  TWEEN.update(time);
}
