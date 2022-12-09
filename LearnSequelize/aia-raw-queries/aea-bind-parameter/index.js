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

  // 绑定参数

  // 绑定和替换的区别是：替换是 sequelize 层面的；绑定是数据库层面的，sequelize 会将查询语句和绑定参数发送给数据库

  const records1 = await sequelize.query('SELECT * FROM Users WHERE name=$1 OR age=$2', {
    type: QueryTypes.SELECT,
    // 传递一个数组，使用 $1,$2... 进行绑定
    bind: ['tom', '5'],
  });
  console.log('======', JSON.stringify(records1));

  const records2 = await sequelize.query('SELECT * FROM Users WHERE name=$search_name OR age=$search_age', {
    type: QueryTypes.SELECT,
    // 传递一个对象，使用 $key 进行绑定
    bind: { search_name: 'tom', search_age: '5' },
  });
  console.log('======2', JSON.stringify(records2));
})();
