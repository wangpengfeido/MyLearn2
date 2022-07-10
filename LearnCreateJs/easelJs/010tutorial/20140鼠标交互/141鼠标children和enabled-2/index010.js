let stage = new createjs.Stage('canvas');

const container = new createjs.Container();
let circle = new createjs.Shape();
circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 30);
circle.x = 50;
circle.y = 40;
let circle2 = new createjs.Shape();
circle2.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 30);
circle2.x = 50;
circle2.y = 120;
container.addChild(circle, circle2);
stage.addChild(container);

stage.on(
  'click',
  () => {
    console.log('stage capture');
  },
  null,
  false,
  null,
  true
);

container.on(
  'click',
  () => {
    console.log('container capture');
  },
  null,
  false,
  null,
  true
);

circle.on('click', () => {
  console.log('circle');
});

circle2.on('click', () => {
  console.log('circle2');
});
// 将mouseEnabled设置为false可禁止某object上的事件
// 如果将container.mouseEnabled设置为false，则circle与circle2上的事件都会被禁止
circle2.mouseEnabled = false;

container.on('click', () => {
  console.log('container bubbling');
});

stage.on('click', () => {
  console.log('stage bubbling');
});

createjs.Ticker.on('tick', stage);
