let stage = new createjs.Stage('canvas');

let circle = new createjs.Shape();
circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 30);
circle.x = 50;
circle.y = 40;
stage.addChild(circle);

// 响应事件
circle.on('click', () => {
  alert('click');
});

// 常用事件有：click, mousedown, dblclick, pressmove, pressup, mouseover / mouseout, rollover / rollout
// mouseover / mouseout, 和 rollover / rollout 需要设置stage.enableMouseOver(frequency)。frequency是检测频率。

createjs.Ticker.on('tick', stage);
