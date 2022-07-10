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

  // findOne 找到符合条件的第一个条目
  const user = await User.findOne();
  console.log('======', JSON.stringify(user));
})();
