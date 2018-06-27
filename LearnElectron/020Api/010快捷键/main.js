const {app, BrowserWindow, globalShortcut} = require('electron');

app.on('ready', () => {
    // 注册快捷键
    // Accelerator 由字符串组成，可以包含多个修饰符和键码，由 + 字符组合
    globalShortcut.register('CommandOrControl+Y', () => {
        console.log('运行了快捷键');
    })


    let win = new BrowserWindow({width: 800, height: 600})
    win.loadFile('index.html')
    win.webContents.openDevTools()
    win.on('closed', () => {
        win = null
    })
})

// 可用的功能键
// Command (缩写为Cmd)              windows/linux
// Control (缩写为Ctrl)             macOS
// CommandOrControl (缩写为 CmdOrCtrl)         windows/linux/macOS
// Alt              windows/linux/macOS
// Option           macOS
// AltGr
// Shift
// Super             windows/linux/macOS




// 可用的普通按键
// 0 to 9
// A to Z
// F1 to F24
// 类似~, !, @, #, $的标点符号
// Plus
// Space
// Tab
// Backspace
// Delete
// Insert
// Return (等同于 Enter)
// Up, Down, Left and Right
// Home 和 End
// PageUp 和 PageDown
// Escape (缩写为 Esc)
// VolumeUp, VolumeDown 和 VolumeMute
// MediaNextTrack、MediaPreviousTrack、MediaStop 和 MediaPlayPause
// PrintScreen





