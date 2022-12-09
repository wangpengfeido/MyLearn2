let stage = new createjs.Stage('canvas');

let circle = new createjs.Shape();
circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 50);
circle.x = 100;
circle.y = 100;
stage.addChild(circle);

createjs.Ticker.framerate = 30;
createjs.Ticker.on('tick', () => {
  circle.x = circle.x + 3;
  if (circle.x > stage.canvas.width) {
    circle.x = 0;
  }
  stage.update();
});
