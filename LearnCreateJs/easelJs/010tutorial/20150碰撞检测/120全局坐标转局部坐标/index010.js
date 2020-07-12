let stage = new createjs.Stage('canvas');

let circle = new createjs.Shape();
circle.graphics.beginFill('DeepSkyBlue').drawCircle(50, 40, 30);
circle.x = 100;

let container = new createjs.Container();
container.addChild(circle);
container.x = 100;
container.y = 100;

stage.addChild(container);

createjs.Ticker.on('tick', () => {
  // globalToLocal可以将全局坐标（stage）转换为当前displayObject内坐标
  const circlePt = circle.globalToLocal(stage.mouseX, stage.mouseY);
  if (circle.hitTest(circlePt.x, circlePt.y)) {
    circle.alpha = 0.5;
  } else {
    circle.alpha = 1;
  }
  stage.update();
});
