const { DataTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

const User = sequelize.define(
  'User',
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {}
);

(async function () {
  // 删除模型相关的表
  await User.drop();
  console.log('用户表已删除!');
})();

// (async function () {
//   // 删除所有表
//   await sequelize.drop();
//   console.log('所有表已删除!');
// })();

