let data = require('./data')

module.exports = () => {
    setInterval(function () {
        data++;
    }, 1000)
}