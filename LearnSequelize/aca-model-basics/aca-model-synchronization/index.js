// 模型同步：将模型同步到数据库表。
// 注意：这仅会更改表，而不会更改模型。

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
  await User.sync({
    // 默认:如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
    // 将创建表,如果表已经存在,则将其首先删除
    // force: true,
    // 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.
    // alter: true,
  });
  console.log('用户模型表刚刚(重新)创建！');
})();

// (async function () {
//   // 一次性同步所有模型
//   await sequelize.sync({
//     alter: true,
//   });
//   console.log('所有模型均已成功同步.');
// })();
