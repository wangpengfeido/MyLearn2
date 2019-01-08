let path = require('path')
let childProcess = require('child_process')
let phantomjs = require('phantomjs-prebuilt')
let binPath = phantomjs.path

let childArgs = [
    path.join(__dirname, './script.js')
]

childProcess.execFile(binPath, childArgs, function (err, stdout, stderr) {
    console.log('err:', err);
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
})