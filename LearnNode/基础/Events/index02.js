const EventEmitter = require('events').EventEmitter

class Test extends EventEmitter{
    constructor(){
        super()
    }

    emitEventA(){
        this.emit('eventa')
    }

}

let t = new Test();
t.on('eventa',function () {
    console.log('event a is emitted')
})
t.emitEventA()