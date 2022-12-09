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

  // 使用 bulkCreate 进行批量创建。它接收一个数组
  const users = await User.bulkCreate([{ name: 'tom' }, { name: 'sam' }, { name: 'jerry', age: 15 }]);
  console.log(users.length);
  console.log(users[0] instanceof User); // true
  console.log(users[0].toJSON());
})();
