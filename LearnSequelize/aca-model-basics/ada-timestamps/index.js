// 默认 Sequelize 会使用 DataTypes.DATE 向每个模型添加 createdAt 和 updatedAt 字段。

// 注意：在 Sequelize 层面完成（未使用sql触发器）。所以不使用 Sequelize 的情况下不会更新这些字段

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
  {
    // 控制时间戳开关
    timestamps: true,
    // 指定某一项的开关
    createdAt: false,
    // 自定义名称
    updatedAt: 'updateTimestamp',
  }
);

(async function () {
  await User.sync({});
})();
