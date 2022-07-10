let path=require('path')
const PdfKitHelp = require('./index010')
let pdfKitHelp = new PdfKitHelp('test', path.join(__dirname,'test.pdf'))
let doc=PdfKitHelp.getDocInstance('test');
// let doc = pdfKitHelp.getDoc()
doc.addPage()
doc.text('hello world')
doc.end()