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

  // findAndCountAll 是结合 findAll 和 count 的便捷方法
  // 特别适合用于 limit 和 offset 分页查找
  const { count, rows } = await User.findAndCountAll();
  console.log('======', count, JSON.stringify(rows));
})();
