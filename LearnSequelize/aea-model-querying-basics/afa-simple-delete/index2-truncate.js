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

  // 如果要删除所有内容，那么使用 truncate 命令
  await User.destroy({ truncate: true });
  console.log('已删除');
})();
