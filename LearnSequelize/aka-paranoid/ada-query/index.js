const { DataTypes, Model, Op, QueryTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class User extends Model {}

User.init(
  {
    name: DataTypes.TEXT,
    age: DataTypes.INTEGER,
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
  }
);

(async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate([
    { name: 'tom', age: 5 },
    { name: 'sam', age: 5 },
    { name: 'jerry', age: 15 },
    { name: 'bob', age: 20 },
  ]);

  await User.destroy({ where: { age: 5 } });

  // 查询将自动忽略软删除的记录
  const users = await User.findAll();
  console.log('======', JSON.stringify(users));

  // 如果要查询软删除记录，传递 paranoid:false
  const users2 = await User.findAll({ paranoid: false });
  console.log('======', JSON.stringify(users2));
})();
