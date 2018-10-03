const net = require('net');

const socket = new net.Socket();
socket.connect(8124, () => {
    console.log('连接已建立');
    socket.on('data', (data) => {
        console.log(`收到数据：${data}`);
    });
    setInterval(() => {
        socket.write('hello world\n');
    }, 2000);
});
socket.on('error', () => {
    console.log('连接错误');
});



