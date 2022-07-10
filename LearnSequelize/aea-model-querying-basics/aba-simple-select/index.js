const { DataTypes, Model } = require('sequelize');
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
  await User.create({ name: 'tom' });
  await User.create({ name: 'sam', age: 10 }, { fields: ['name'] });

  // 使用 findAll 方法查询所有用户
  const users = await User.findAll();
  console.log('=======', JSON.stringify(users));
})();
