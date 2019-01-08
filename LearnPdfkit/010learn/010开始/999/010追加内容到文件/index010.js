/*
* 经试验pdfkit不能追加到文件
* 因为每次执行new PdfKit()在创建的可写流中都会包含文件头，导致pdf识别不出
* */
let fs = require('fs')
let PdfKit = require('pdfkit')
let doc = new PdfKit()
//let outFsStream = fs.createWriteStream('./test.pdf')
doc.on('data', function (data) {
    doc.pause()
    fs.appendFile('./test.pdf', data, () => {
        doc.resume()
    })
})
//增加一页
doc.addPage()
doc.text('hello world')
doc.text('this page is appended')
doc.end()