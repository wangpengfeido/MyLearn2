let stage = new createjs.Stage('canvas');
stage.enableMouseOver();

let circle = new createjs.Shape();
circle.graphics.beginFill('DeepSkyBlue').drawCircle(50, 40, 30);

let circle2 = new createjs.Shape();
circle2.graphics.beginFill('red').drawCircle(50, 80, 30);

stage.on('stagemousedown', event => {
  // Container.getObjectUnderPoint()返回某一点下最近的图形
  console.log(stage.getObjectUnderPoint(event.stageX, event.stageY));
  // Container.getObjectsUnderPoint()返回某一点下所有的图形
  console.log(stage.getObjectsUnderPoint(event.stageX, event.stageY));
});

stage.addChild(circle, circle2);

createjs.Ticker.on('tick', stage);
