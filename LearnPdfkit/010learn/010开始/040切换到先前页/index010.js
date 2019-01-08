let fs = require('fs')
let PdfKit = require('pdfkit')
//使页面被缓存
let doc = new PdfKit({bufferPages: true})
doc.pipe(fs.createWriteStream('./test.pdf'))
doc.addPage()
doc.addPage()
//切换页面
doc.switchToPage(0);
doc.text('hello world')
doc.end()