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
  await User.create({ name: 'sam', age: 10 });

  // 使用 attributes 参数查询特定属性
  const users = await User.findAll({ attributes: ['name'] });
  console.log('=======1', JSON.stringify(users));

  // 使用嵌套数组重命名属性.
  // 即 select name, age as userAge ...
  const users2 = await User.findAll({ attributes: ['name', ['age', 'userAge']] });
  console.log('=======2', JSON.stringify(users2));

  // 使用 sequelize.fn 进行聚合.
  // 即 select name, age, COUNT(age) as count ...
  const users3 = await User.findAll({
    attributes: ['name', 'age', [sequelize.fn('COUNT', sequelize.col('age')), 'count']],
  });
  console.log('=======3', JSON.stringify(users3));

  // 使用 include 参数添加属性.这会列出所有属性后,再添加 include 中的属性
  const users4 = await User.findAll({
    attributes: {
      include: [[sequelize.fn('COUNT', sequelize.col('age')), 'count']],
    },
  });
  console.log('=======4', JSON.stringify(users4));

  // 使用 exclude 参数移除属性.这会列出所有属性后,再移除 exclude 中的属性
  const users5 = await User.findAll({
    attributes: {
      exclude: ['age'],
    },
  });
  console.log('=======5', JSON.stringify(users5));
})();
