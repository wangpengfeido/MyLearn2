// 1)所有在Node.js可以使用的API，在Electron中同样可以使用。
// 2)你可以在你的应用程序中使用Node.js的模块。例如npm模块。

const {app, BrowserWindow} = require('electron');
const fs = require('fs')

function createWindow() {
    let win = new BrowserWindow({width: 800, height: 600})
    win.loadFile('index.html')
    win.webContents.openDevTools()
    console.log(fs)
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

// 注意：原生Node.js模块 (即指，需要编译源码过后才能被使用的模块) 需要在编译后才能和Electron一起使用。
// TODO：编译原生模块

