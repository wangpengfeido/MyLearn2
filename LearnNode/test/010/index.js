let data = require('./data')
let change = require('./change')

change()

setInterval(function () {
    console.log(data)
}, 1000)