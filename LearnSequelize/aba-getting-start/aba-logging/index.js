const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_test', 'root', 'wang68015', {
  host: '47.104.146.151',
  port: '13306',
  dialect: 'mysql',
  // 自定义日志
  // 接收两个参数：1.sql查询信息 2.sequelize对象
  logging: (msg) => {
    console.log('this is my log:', msg);
  },
});

sequelize.authenticate().then(
  () => {
    console.log('连接正常');
  },
  (err) => {
    console.log('连接异常', err);
  }
);
