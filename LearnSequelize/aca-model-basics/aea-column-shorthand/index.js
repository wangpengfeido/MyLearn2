const { DataTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

const User = sequelize.define(
  'User',
  {
    // 如果仅有类型，可以简化写法
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  },
  {}
);

(async function () {
  await User.sync({});
})();
