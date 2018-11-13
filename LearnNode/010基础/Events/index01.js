
const EventEmitter = require('events').EventEmitter;

const emitter = new EventEmitter();

const listenFunc1_1 = function () {
    console.log('this is 1_1');
};
const listenFunc1_2 = function () {
    console.log('this is 1_2');
};
const listenFunc1_3 = function () {
    console.log('this is 1_3');
};
const listenFunc2_1 = function () {
    console.log('this is 2_1');
};
const listenFunc2_2 = function () {
    console.log('this is 2_2');
};
const listenFunc2_3 = function () {
    console.log('this is 2_3');
};

emitter.on('event1', listenFunc1_1);
emitter.on('event1', listenFunc1_2);
emitter.on('event1', listenFunc1_3);
emitter.on('event2', listenFunc2_1);
emitter.on('event2', listenFunc2_2);
emitter.on('event2', listenFunc2_3);

let eventOneSuccess = emitter.emit('event1');
let eventTwoSuccess = emitter.emit('event2');
let eventThreeSuccess = emitter.emit('event3');
console.log('事件1是否触发成功？', eventOneSuccess);
console.log('事件2是否触发成功？', eventTwoSuccess);
console.log('事件3是否触发成功？', eventThreeSuccess);

console.log('事件1当前绑定的函数个数', emitter.listenerCount('event1'));
emitter.removeListener('event1', listenFunc1_1);
console.log('事件1移除一个监听函数后，绑定的函数个数', emitter.listenerCount('event1'));
emitter.removeAllListeners('event1');
console.log('事件1移除所有监听函数后，绑定的函数个数', emitter.listenerCount('event1'));




