let path = require('path')
let page = require('webpage').create()
page.open('https://www.baidu.com', function (status) {
    console.log("Status: " + status)
    if (status === "success") {
        page.render(path.join(__dirname, '/example.png'))
    }
    phantom.exit();
})