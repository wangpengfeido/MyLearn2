let stage = new createjs.Stage('canvas');

let circle = new createjs.Shape();
circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 30);
circle.x = 50;
circle.y = 40;

let circle2 = new createjs.Shape();
circle2.graphics.beginFill('red').drawCircle(0, 0, 5);
circle2.x = 0;
circle2.y = 40;

stage.addChild(circle, circle2);

createjs.Ticker.on('tick', () => {
  circle2.x += 5;
  if (circle2.x >= stage.canvas.width) {
    circle2.x = 0;
  }
  // localToLocal将一个局部坐标转换为另一个局部坐标
  const circlePt = circle2.localToLocal(2, 2, circle);
  if (circle.hitTest(circlePt.x, circlePt.y)) {
    circle.alpha = 0.5;
  } else {
    circle.alpha = 1;
  }
  stage.update();
});
