const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_test', 'root', 'wang68015', {
  host: '47.104.146.151',
  port: '13306',
  dialect: 'mysql',
  define: {
    // 全局停止自动复数化
    freezeTableName: true,
  },
});
