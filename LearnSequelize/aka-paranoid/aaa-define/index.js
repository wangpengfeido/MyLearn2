const { DataTypes, Model, Op, QueryTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class User extends Model {}

// paranoid 表删除记录时不会真正删除，而是添加一个 deletedAt 特殊列
// 也就是说，paranoid 表执行的是软删除而不是硬删除

User.init(
  {
    name: DataTypes.TEXT,
    age: DataTypes.INTEGER,
  },
  {
    sequelize,
    // timestamps 必须为true
    timestamps: true,
    // 启用 paranoid
    paranoid: true
  }
);

(async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate([
    { name: 'tom', age: 10 },
    { name: 'sam', age: 5 },
    { name: 'jerry', age: 15 },
    { name: 'bob', age: 20 },
  ]);
})();
