let stage = new createjs.Stage('canvas');
stage.enableMouseOver();

const container = new createjs.Container();
let circle = new createjs.Shape();
circle.graphics.beginFill('DeepSkyBlue').drawCircle(50, 40, 30);

let circle2 = new createjs.Shape();
circle2.graphics.beginFill('DeepSkyBlue').drawCircle(50, 120, 30);

// 添加碰撞区域
let hit = new createjs.Shape();
hit.graphics.beginFill('#f00').drawRect(20, 90, 60, 60);
circle2.hitArea = hit;

function handleInteraction(event) {
  event.target.alpha = event.type == 'mouseover' ? 0.5 : 1;
}
circle.on('mouseover', handleInteraction);
circle.on('mouseout', handleInteraction);
circle2.on('mouseover', handleInteraction);
circle2.on('mouseout', handleInteraction);

stage.addChild(circle, circle2);

createjs.Ticker.on('tick', stage);
