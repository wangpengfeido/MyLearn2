let data = require('./data')

module.exports = () => {
    setInterval(function () {
        data.a++;
    }, 1000)
}