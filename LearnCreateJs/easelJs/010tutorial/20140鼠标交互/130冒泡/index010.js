let stage = new createjs.Stage('canvas');

const container = new createjs.Container();
let circle = new createjs.Shape();
circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 30);
circle.x = 50;
circle.y = 40;
container.addChild(circle);
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

container.on('click', () => {
  console.log('container bubbling');
});

stage.on('click', () => {
  console.log('stage bubbling');
});

createjs.Ticker.on('tick', stage);
