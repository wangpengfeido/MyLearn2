let stage = new createjs.Stage('canvas');

let circle = new createjs.Shape();
circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 30);
circle.x = 50;
circle.y = 40;
stage.addChild(circle);

// pressmove 为拖动事件
circle.on('pressmove', evt => {
  evt.target.x = evt.stageX;
  evt.target.y = evt.stageY;
});


createjs.Ticker.on('tick', stage);
