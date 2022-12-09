let fs=require('fs')
let PdfKit = require('pdfkit')
//创建实例时，自动增加一页，除非使用autoFirstPage:false参数
let doc = new PdfKit()
doc.pipe(fs.createWriteStream('./test.pdf'))
//增加一页
doc.addPage()
doc.end()