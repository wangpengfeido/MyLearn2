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
  await User.create({ name: 'tom' });
  await User.create({ name: 'sam' });
  await User.create({ name: 'jerry', age: 15 });

  // 使用 update 进行更新。也可以使用 where 参数
  await User.update({ age: 20 }, { where: { age: null } });
  console.log('已更新');
})();
