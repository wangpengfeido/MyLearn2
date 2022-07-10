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

  const users = await User.bulkCreate([{ name: 'tom' }, { name: 'sam' }, { name: 'jerry', age: 15 }], {
    // 也可以定义插入的字段
    fields: ['name'],
  });
})();
