const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

const User = sequelize.define(
  'User',
  {
    firstName: {
      type: DataTypes.STRING,
      // 列的默认值为NULL，可以指定列的默认值
      defaultValue: 'john',
    },
    lastName: {
      type: DataTypes.STRING,
    },
    bar: {
      type: DataTypes.DATE,
      // 也可以指定一些特殊的值。这里指定插入时时间
      defaultValue: Sequelize.NOW,
    },
  },
  {}
);

(async function () {
  await User.sync({});
})();
