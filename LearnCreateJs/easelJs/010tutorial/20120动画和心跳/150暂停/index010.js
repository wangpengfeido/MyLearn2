let stage = new createjs.Stage('canvas');

let circle = new createjs.Shape();
circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 50);
circle.x = 100;
circle.y = 100;
stage.addChild(circle);

createjs.Ticker.framerate = 30;
createjs.Ticker.on('tick', () => {
  // createjs.Ticker.paused===true时，tick事件仍然会触发
  // getTime方法传入true可以返回包含暂停的时间，false返回不含暂停的时间
  console.log(createjs.Ticker.paused, createjs.Ticker.getTime(true), createjs.Ticker.getTime(false));
});

document.querySelector('.pause').addEventListener('click', () => {
  createjs.Ticker.paused = !createjs.Ticker.paused;
});
