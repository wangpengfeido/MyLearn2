var page = require('webpage').create();
page.open('https://www.baidu.com', function (status) {
  console.log("Status: " + status)
  if (status === "success") {
    page.render('example.png')
  }
  phantom.exit();
})