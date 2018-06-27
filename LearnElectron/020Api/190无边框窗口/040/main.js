// 可拖拽区
const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    let win = new BrowserWindow({width: 800, height: 600,transparent: true, frame: false})
    win.loadFile('index.html')
    win.webContents.openDevTools()
    win.on('closed', () => {
        win = null
    })
})


