const net = require('net');

/**
 * net.createServer([options][, connectionListener])
 * 创建一个TCP或IPC连接
 */
const server = net.createServer((c) => {
    console.log('连接建立', c.remoteAddress, c.remotePort);
    c.on('data', (data) => {
        console.log(`接收到数据： ${c.remoteAddress}：${data}`);
        c.write(`back`);
    });
    c.on('end', () => {
        console.log('连接断开');
    });
    c.on('error', () => {
        console.log('连接错误');
    });
});
server.listen(8124, () => {
    console.log('lising port 8124');
});

