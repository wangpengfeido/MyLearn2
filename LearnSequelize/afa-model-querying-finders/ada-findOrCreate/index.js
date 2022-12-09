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
    { name: 'tom', age: 5 },
    { name: 'sam', age: 5 },
    { name: 'jerry', age: 15 },
  ]);

  // findOrCreate 查询一个条目，如果不存在将创建一个条目
  // 它返回两个值，一个值表示是否创建新的条目，一个是找到或创建的条目
  // 使用 defaults 参数来提供创建的内容。如果 defaults 未提供所有列的值，将使用 where 值
  const [user, created] = await User.findOrCreate({ where: { age: 18 }, defaults: { name: 'bob' } });
  console.log('======1', created, JSON.stringify(user));

  const [user2, created2] = await User.findOrCreate({ where: { age: 5 }, defaults: { name: 'bob' } });
  console.log('======2', created2, JSON.stringify(user2));
})();
