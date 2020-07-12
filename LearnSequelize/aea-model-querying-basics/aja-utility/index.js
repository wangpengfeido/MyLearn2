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
    { name: 'tom', age: 10 },
    { name: 'sam', age: 5 },
    { name: 'jerry', age: 15 },
    { name: 'bob', age: 20 },
  ]);

  // count 方法统计数量
  const count = await User.count({ where: { age: { [Op.gt]: 10 } } });
  console.log('======count', count);

  // max 方法求最大值
  const max = await User.max('age', { where: { age: { [Op.gt]: 10 } } });
  console.log('======max', max);

  // min 方法求最小值
  const min = await User.min('age', { where: { age: { [Op.gt]: 10 } } });
  console.log('======min', min);

  // sun 方法求和
  const sum = await User.sum('age', { where: { age: { [Op.gt]: 10 } } });
  console.log('======sum', sum);
})();
