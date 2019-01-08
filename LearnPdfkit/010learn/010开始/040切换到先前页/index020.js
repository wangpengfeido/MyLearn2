let fs = require('fs')
let PdfKit = require('pdfkit')
let doc = new PdfKit({bufferPages: true})
doc.pipe(fs.createWriteStream('./test.pdf'))
doc.addPage()
doc.addPage()
//冲洗页面缓存
doc.flushPages()
doc.addPage()
//获取已缓存的页面页码与个数
console.log(doc.bufferedPageRange())
//此时切换到第0页不被允许，因为第0页已被冲洗
doc.switchToPage(0);
doc.text('hello world')
//自动冲洗缓存
doc.end()