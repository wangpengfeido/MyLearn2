const domA = document.querySelector('.test-a');
const domB = document.querySelector('.test-b');
const domC = document.querySelector('.test-c');

const groupA = new TWEEN.Group();
const groupB = new TWEEN.Group();

const tweenA = new TWEEN.Tween({ x: 0, y: 0 }, groupA)
  .to({ x: 100, y: 100 }, 1000)
  .onUpdate(obj => {
    domA.style.transform = `translate(${obj.x}px,${obj.y}px)`;
  })
  .start();
const tweenB = new TWEEN.Tween({ x: 0, y: 0 }, groupB)
  .to({ x: 100, y: 100 }, 1000)
  .onUpdate(obj => {
    domB.style.transform = `translate(${obj.x}px,${obj.y}px)`;
  })
  .start();
const tweenC = new TWEEN.Tween({ x: 0, y: 0 })
  .to({ x: 100, y: 100 }, 1000)
  .onUpdate(obj => {
    domC.style.transform = `translate(${obj.x}px,${obj.y}px)`;
  })
  .start();

function update() {
  TWEEN.update(2000);
}

function updateA() {
  groupA.update(2000);
}

function updateB() {
  groupB.update(2000);
}

// 将实例归于某个分组后，这个实例将被分组控制add\remove\update，而不再受TWEEN控制
