let stage = new createjs.Stage('canvas');

let circle = new createjs.Shape();
circle.graphics.beginFill('DeepSkyBlue').drawCircle(50, 40, 30);
circle.x = 100;
stage.addChild(circle);

createjs.Ticker.on('tick', () => {
  // hitTest方法检测某一点与图形是否有碰撞(必须在同一坐标系下)
  const pt = circle.globalToLocal(stage.mouseX, stage.mouseY);
  if (circle.hitTest(pt.x, pt.y)) {
    circle.alpha = 0.5;
  } else {
    circle.alpha = 1;
  }
  stage.update();
});
