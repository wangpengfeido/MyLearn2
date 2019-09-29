class App {
  constructor() {
    this.stage = null;

    this.circle = null;

    this.tween = null;
  }
  start() {
    this.initStage();
    this.initObject();
    this.initTween();
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
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
  initTween() {
    this.tween = createjs.Tween.get(this.circle, { loop: true })
      .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
      .to({ alpha: 0, y: 25 }, 500, createjs.Ease.getPowInOut(2))
      .to({ alpha: 0, y: 225 }, 100)
      .to({ alpha: 1, y: 100 }, 500, createjs.Ease.getPowInOut(2))
      .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));
  }
  tick() {
    this.stage.update();
  }
}

new App().start();
