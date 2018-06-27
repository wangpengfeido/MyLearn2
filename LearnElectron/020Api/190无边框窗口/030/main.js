// 点击穿透窗口窗口
const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    let win = new BrowserWindow({width: 800, height: 600, transparent: true, frame: false})
    // 使窗口忽略所有鼠标事件，创建点击穿透窗口
    // win.setIgnoreMouseEvents(true)
    win.loadFile('index.html')
    win.on('closed', () => {
        win = null
    })
})


