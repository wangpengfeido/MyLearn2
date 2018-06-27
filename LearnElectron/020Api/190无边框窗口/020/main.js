// 透明窗口
const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    //  transparent 选项设置为 true来创建透明窗口
    let win = new BrowserWindow({width: 800, height: 600,transparent: true, frame: false})
    win.loadFile('index.html')
    win.webContents.openDevTools()
    win.on('closed', () => {
        win = null
    })
})

// 透明窗口有局限性
// 不能点击穿透透明区域
// 窗口不可调整大小
// 无法对位于透明窗口下方的内容应用模糊效果
// 在 windows 操作系统上, 当 DWM 被禁用时, 透明窗口将无法工作
// 在 linux 上, 用户必须在命令行中设置 --enable-transparent-visuals --disable-gpu 来禁用GPU, 启用 ARGB，用以实现窗体透明
// 在 Mac 上, 原生窗口阴影不会在透明窗口中显示

