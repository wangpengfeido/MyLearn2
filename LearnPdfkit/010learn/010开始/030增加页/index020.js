let fs = require('fs')
let PdfKit = require('pdfkit')
let doc = new PdfKit()
doc.pipe(fs.createWriteStream('./test.pdf'))
//每次增加页时执行
doc.on('pageAdded', () => {
    doc.text('hello world')
})
doc.addPage()
//指定边距
doc.addPage({margin: 200})
doc.addPage({margins: {top: 100, bottom: 200, left: 50, right: 50}})
doc.end()