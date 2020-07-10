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

  // 使用 sequelize.query 方法执行原始查询
  // 它返回两个参数：一个是查询结果，一个是元数据。元数据结构由数据库方言决定。
  const [results, metadata] = await sequelize.query("UPDATE Users SET age=11 WHERE name='tom'");
  console.log('======1', results);
  console.log('======1', metadata);

  // 如果不需要元数据，可以传递一个查询类型，以告诉后续格式化结果
  const users2 = await sequelize.query('SELECT * FROM Users', { type: QueryTypes.SELECT });
  console.log('======2', users2);

  // 也可以传入模型，查询结果将映射到模型，返回的是模型实例
  const users3 = await sequelize.query('SELECT * FROM Users', {
    model: User,
    // 映射字段
    mapToModel: true,
  });
  console.log('======3', users3);
})();
