let stage = new createjs.Stage('canvas');

// 设置字体
const text = new createjs.Text('hello world!', 'bold 86px Arial', '#ff7700');
stage.addChild(text);

createjs.Ticker.framerate = 40;
createjs.Ticker.on('tick', event => {
  stage.update(event);
});
