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
    { name: 'sam', age: 5 },
    { name: 'jerry', age: 15 },
    { name: 'bob', age: 20 },
  ]);

  // findByPk 用主键从表中获取一个条目
  const user1 = await User.findByPk(1);
  console.log('======', JSON.stringify(user1));

  // 未找到时返回 null
  const user2 = await User.findByPk(10);
  console.log('======', JSON.stringify(user2));
})();
