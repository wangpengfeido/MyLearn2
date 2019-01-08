let fs = require('fs')
let PdfKit = require('pdfkit')
let doc = new PdfKit()
doc.pipe(fs.createWriteStream('./test.pdf'))
//添加元数据
doc.info = {
    Title: 'HelloWorld',
    Author: 'WangPengfei',
    Subject: 'learn',
    Keywords: 'pdf',
    CreationDate: new Date(),
    ModDate: new Date()
}
doc.end()