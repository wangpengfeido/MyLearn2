class Button extends createjs.Container {
  constructor(label) {
    super();
    this.label = label;

    // 绘制对应的图形
    this.setup();
  }
  // 重写Container的draw方法
  draw(ctx, ignoreCache) {
    super.draw(ctx, ignoreCache);
  }
  setup() {
    let text = new createjs.Text(this.label, '16px Arial', '#fff');
    text.textBaseline = 'top';
    text.textAlign = 'center';
    const width = text.getMeasuredWidth() + 30;
    const height = text.getMeasuredHeight() + 20;
    text.x = width / 2;
    text.y = 10;

    let rect = new createjs.Shape();
    rect.graphics.beginFill('blue').drawRoundRect(0, 0, width, height, 10);

    this.addChild(rect, text);
    this.cursor = 'pointer';
    this.on('rollover', this.handleRollover);
    this.on('rollout', this.handleRollout);
    this.on('click', this.handleClick);
  }
  handleRollover() {
    this.alpha = 0.4;
  }
  handleRollout() {
    this.alpha = 1;
  }
  handleClick() {
    alert('click');
  }
}

let stage = new createjs.Stage('canvas');
stage.enableMouseOver();

const btn1 = new Button('hello');
stage.addChild(btn1);

(function render() {
  stage.update();
  requestAnimationFrame(() => {
    render();
  });
})();
