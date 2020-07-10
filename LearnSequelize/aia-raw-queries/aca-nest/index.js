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

  const records = await sequelize.query("SELECT 1 as 'foo.bar.baz' FROM Users", { type: QueryTypes.SELECT });
  console.log('======', JSON.stringify(records));

  // 如果属性名称包含"."，nest 参数可将其变成嵌套对象
  const records2 = await sequelize.query("SELECT 1 as 'foo.bar.baz' FROM Users", {
    type: QueryTypes.SELECT,
    nest: true,
  });
  console.log('======2', JSON.stringify(records2));
})();
