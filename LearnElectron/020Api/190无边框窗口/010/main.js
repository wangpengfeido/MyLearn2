const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    // 将frame设置为false来创建无边框窗口
    let win = new BrowserWindow({width: 800, height: 600, frame: false})
    win.loadFile('index.html')
    win.webContents.openDevTools()
    win.on('closed', () => {
        win = null
    })
})

// 在macOS上有替代方案，即设置titleBarStyle选项，来隐藏窗口控件及红绿灯
