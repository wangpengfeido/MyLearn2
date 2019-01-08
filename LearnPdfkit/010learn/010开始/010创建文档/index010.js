let fs=require('fs')
let PdfKit = require('pdfkit')
// 实例是一个node可写流
let doc = new PdfKit()
doc.pipe(fs.createWriteStream('./test.pdf'))
doc.end()