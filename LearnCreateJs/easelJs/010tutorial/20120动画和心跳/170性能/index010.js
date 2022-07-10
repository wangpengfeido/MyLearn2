let stage = new createjs.Stage('canvas');

let timeCircle = new createjs.Shape();
timeCircle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 30);
timeCircle.x = 0;
timeCircle.y = 120;
stage.addChild(timeCircle);

timeCircle.on('tick', event => {
  timeCircle.x += event.delta * 0.1;
  if (timeCircle.x > stage.canvas.width) {
    timeCircle.x = 0;
  }
});

createjs.Ticker.framerate = 40;
createjs.Ticker.on('tick', event => {
  // Ticker.getMeasuredFPS() 返回前1秒的帧率
  // Ticker.getMeasuredTickTime() 返回每一帧计算所花费的平均时间
  console.log(createjs.Ticker.getMeasuredFPS(), createjs.Ticker.getMeasuredTickTime());
  stage.update(event);
});
