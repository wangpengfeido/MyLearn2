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
    { name: 'tom', age: 10 },
    { name: 'sam', age: 5 },
    { name: 'jerry', age: 15 },
    { name: 'bob', age: 20 },
  ]);

  // 软删除
  await User.destroy({ where: { name: 'tom' } });

  await User.destroy({
    where: { name: 'sam' },
    // 使用 force 参数进行硬删除
    force: true,
  });
})();
