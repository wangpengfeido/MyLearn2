const { DataTypes, Model, Op } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class User extends Model {}

User.init(
  {
    name: DataTypes.TEXT,
    age: DataTypes.INTEGER,
  },
  {
    sequelize,
  }
);

(async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate([
    { name: 'tom', age: 10 },
    { name: 'sam', age: 10 },
    { name: 'jerry', age: 15 },
  ]);

  // group 进行分组
  // 它与 order 语法相同，只是没有方向。
  // 另外还可以直接传递字符串给 group，它将包含在生成的 sql 中。（慎用）
  const users = await User.findAll({ group: [['age']] });
  console.log('======', JSON.stringify(users));
})();
