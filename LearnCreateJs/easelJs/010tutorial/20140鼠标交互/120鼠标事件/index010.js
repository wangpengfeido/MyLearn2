let stage = new createjs.Stage('canvas');

let circle = new createjs.Shape();
circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 30);
circle.x = 50;
circle.y = 40;
stage.addChild(circle);

circle.on('click', event => {
  // event.type 事件类型
  // event.target 事件目标。例如这里就是Shape
  // event.nativeEvent 原生事件对象
  // event.stageX/event.stageY 事件触发点在stage上的位置
  console.log(event.type, event.target, event.nativeEvent, event.stageX, event.stageY);
});

createjs.Ticker.on('tick', stage);
