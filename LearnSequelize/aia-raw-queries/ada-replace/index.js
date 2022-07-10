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

  const records1 = await sequelize.query('SELECT * FROM Users WHERE name=? OR age=?', {
    type: QueryTypes.SELECT,
    // 传递一个数组，? 按出现顺序被替换
    replacements: ['tom', '5'],
  });
  console.log('======', JSON.stringify(records1));

  const records2 = await sequelize.query('SELECT * FROM Users WHERE name=:search_name OR age=:search_age', {
    type: QueryTypes.SELECT,
    // 传递一个对象，:key 将替换为对象的键
    replacements: { search_name: 'tom', search_age: '5' },
  });
  console.log('======2', JSON.stringify(records2));

  const records3 = await sequelize.query('SELECT * FROM Users where name in (:names)', {
    type: QueryTypes.SELECT,
    // 数组将被自动处理
    replacements: { names: ['tom', 'sam'] },
  });
  console.log('======3', JSON.stringify(records3));

  const records4 = await sequelize.query('SELECT * FROM Users where name LIKE :search', {
    type: QueryTypes.SELECT,
    // 可以使用通配符
    replacements: { search: '%m' },
  });
  console.log('======4', JSON.stringify(records4));
})();
