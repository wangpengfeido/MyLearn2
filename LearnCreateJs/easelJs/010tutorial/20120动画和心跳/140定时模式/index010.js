let stage = new createjs.Stage('canvas');

let circle = new createjs.Shape();
circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 30);
circle.x = 0;
circle.y = 30;
stage.addChild(circle);

let timeCircle = new createjs.Shape();
timeCircle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 30);
timeCircle.x = 0;
timeCircle.y = 120;
stage.addChild(timeCircle);

// timingMode 计时模式
// 默认 TIMEOUT 使用setTimeout
// RAF 使用 requestAnimationFrame ,framerate选项会被忽略
// RAF_SYNCHED 使用 requestAnimationFrame ,并且会适配framerate，但是会有较大的帧时间波动
// createjs.Ticker.timingMode = createjs.Ticker.RAF;
createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
createjs.Ticker.framerate = 40;
createjs.Ticker.on('tick', event => {
  circle.x = circle.x + 3;
  if (circle.x > stage.canvas.width) {
    circle.x = 0;
  }

  timeCircle.x += event.delta * 0.1;
  console.log(event.delta, createjs.Ticker.getTime());
  if (timeCircle.x > stage.canvas.width) {
    timeCircle.x = 0;
  }

  stage.update();
});
