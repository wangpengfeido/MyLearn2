const { Sequelize } = require('sequelize');

// 连接数据库
const sequelize = new Sequelize('node_test', 'root', 'wang68015', {
  host: '47.104.146.151',
  port: '13306',
  dialect: 'mysql',
});

// 测试连接是否正常
sequelize.authenticate().then(
  () => {
    console.log('连接正常');
  },
  (err) => {
    console.log('连接异常', err);
  }
);
