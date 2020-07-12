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
  await User.create({ name: 'tom', age: 5 });
  await User.create({ name: 'sam', age: 10 });
  await User.create({ name: 'jerry', age: 15 });

  // 使用 where 参数过滤查询
  // where age=10
  const users1 = await User.findAll({ where: { age: 10 } });
  console.log('======1', JSON.stringify(users1));

  // 使用 Op 中的运算符进行比较
  // where age=10
  const user2 = await User.findAll({ where: { age: { [Op.eq]: 10 } } });
  console.log('======2', JSON.stringify(user2));

  // 使用多个校验
  // where name='tom' and age=5
  const user3 = await User.findAll({ where: { name: 'tom', age: { [Op.eq]: 5 } } });
  console.log('======3', JSON.stringify(user3));

  // 显式使用 or/and
  // where age=5 or age=10
  const user4 = await User.findAll({ where: { [Op.or]: [{ age: 5 }, { age: 10 }] } });
  console.log('======4', JSON.stringify(user4));

  // 当涉及相同字段时,也可以使用不同的结构
  const user5 = await User.findAll({ where: { age: { [Op.or]: [5, 10] } } });
  console.log('======5', JSON.stringify(user5));
})();
