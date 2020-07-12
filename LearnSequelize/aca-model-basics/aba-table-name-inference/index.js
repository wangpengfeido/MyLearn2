// 默认将模型名的复数作为表名

const { DataTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

sequelize.define(
  'User',
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    // 停止复数化。这样模型名等于表名
    freezeTableName: true,

    // 直接提供表名
    // tableName: 'Employees',
  }
);
