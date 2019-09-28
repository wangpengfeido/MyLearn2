class App {
  constructor() {
    this.stage = null;

    this.circle = null;
  }
  start() {
    this.initStage();
    this.initObject();
    createjs.Ticker.on('tick', () => {
      this.tick();
    });
  }
  initStage() {
    this.stage = new createjs.Stage(document.querySelector('#canvas'));
  }
  initObject() {
    this.circle = new createjs.Shape();
    this.circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 50);
    this.circle.x = 100;
    this.circle.y = 100;
    this.stage.addChild(this.circle);
  }
  animation() {
    this.circle.x = this.circle.x + (5 - Math.random() * 10);
  }
  tick() {
    this.animation();
    this.stage.update();
  }
}

new App().start();
