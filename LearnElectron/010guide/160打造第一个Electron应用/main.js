// 从开发者的角度来说，electron是一个node应用


const {app, BrowserWindow} = require('electron');

function createWindow() {
    // 创建浏览器窗口
    let win = new BrowserWindow({width: 800, height: 600})
    // 加载html
    win.loadFile('index.html')
    // 打开开发者工具
    win.webContents.openDevTools()
    // 当 window 被关闭，这个事件会被触发。
    win.on('closed', () => {
        // 取消引用 window 对象
        // 如果你的应用支持多窗口的话，通常会把多个 window 对象存放在一个数组里面，与此同时，你应该删除相应的元素。
        win = null
    })
}

// Electron 会在初始化后并准备创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow)

app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (win === null) {
        createWindow()
    }
})

