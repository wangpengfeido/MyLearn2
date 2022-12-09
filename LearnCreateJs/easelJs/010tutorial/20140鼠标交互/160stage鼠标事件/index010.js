let stage = new createjs.Stage('canvas');
stage.enableMouseOver();
// stage.mouseMoveOutside可以决定鼠标在stage外时是否触发mousemove事件
// stage.mouseMoveOutside = true;

let shape = new createjs.Shape();
stage.addChild(shape);

let oldX, oldY;
let color = '#0ff',
  size = 2;
stage.on('stagemousemove', evt => {
  if (oldX) {
    shape.graphics
      .beginStroke(color)
      .setStrokeStyle(size, 'round')
      .moveTo(oldX, oldY)
      .lineTo(evt.stageX, evt.stageY);
  }
  // stageX和stageY返回stage区域内的标准化的鼠标坐标
  oldX = evt.stageX;
  oldY = evt.stageY;
  // rawX和rawY返回非标准化的坐标(不一定在stage区域内)
  // stage.mouseInBounds返回鼠标是否再stage内
  console.log(evt.stageX, evt.stageY, evt.rawX, evt.rawY, stage.mouseInBounds);
});
stage.on('stagemousedown', () => {
  size = 10;
});
stage.on('stagemouseup', () => {
  size = 2;
  color = createjs.Graphics.getHSL(Math.random() * 360, 100, 50);
});

createjs.Ticker.on('tick', stage);
