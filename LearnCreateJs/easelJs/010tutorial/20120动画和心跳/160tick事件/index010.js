let stage = new createjs.Stage('canvas');

let timeCircle = new createjs.Shape();
timeCircle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 30);
timeCircle.x = 0;
timeCircle.y = 120;
stage.addChild(timeCircle);

// 当stage执行update时，会触发子displayObject的tick事件
// update的参数会作为tick事件的event参数
timeCircle.on('tick', event => {
  timeCircle.x += event.delta * 0.1;
  console.log(event.delta, createjs.Ticker.getTime());
  if (timeCircle.x > stage.canvas.width) {
    timeCircle.x = 0;
  }
});

createjs.Ticker.framerate = 40;
// createjs.Ticker.on('tick', event => {
//   stage.update(event);
// });

// 还可以直接将stage传给tick事件响应，它会自动执行stage.update(event).
createjs.Ticker.on('tick', stage);
