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

createjs.Ticker.framerate = 40;
// 第一个圆会随着帧率的不同有不同的速度
// 第二个圆不管帧率如何都具有相同速度
createjs.Ticker.on('tick', event => {
  circle.x = circle.x + 3;
  if (circle.x > stage.canvas.width) {
    circle.x = 0;
  }

  // event.delta是距离上次tick的时间
  timeCircle.x += event.delta * 0.1;
  // createjs.Ticker.getTime()是距离Ticker初始化后经过的总时间
  console.log(event.delta, createjs.Ticker.getTime());
  if (timeCircle.x > stage.canvas.width) {
    timeCircle.x = 0;
  }

  stage.update();
});
