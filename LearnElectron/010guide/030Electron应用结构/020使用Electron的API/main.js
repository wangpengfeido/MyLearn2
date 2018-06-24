// 所有Electron的API都被指派给一种进程类型。 许多API只能被用于主进程中，有些API又只能被用于渲染进程，又有一些主进程和渲染进程中都可以使用。
const {app, BrowserWindow} = require('electron');

function createWindow() {
    // 例如electron中的BrowserWindow只能在主进程中使用
    let win = new BrowserWindow({width: 800, height: 600})
    win.loadFile('index.html')
    win.webContents.openDevTools()
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)


