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
    { name: 'tom', age: 20 },
    { name: 'sam', age: 10 },
    { name: 'jerry', age: 15 },
  ]);

  const users = await User.findAll({ order: [['age', 'ASC']] });
  console.log('======', JSON.stringify(users));
})();
