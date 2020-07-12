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
    // 安全检查。只有当数据库名以"_test"结尾时才会执行同步
    match: /_test$/,
  });
  console.log('已更新');
})();

// (async function () {
//   await User.drop({
//     match: /_test$/,
//   });
//   console.log('已删除');
// })();

// 注意：````sync({force:true})````和````sync({alter:true})````可能是破坏性操作，不能在生产环境中使用。而是使用 Migrations（迁移）进行同步。
