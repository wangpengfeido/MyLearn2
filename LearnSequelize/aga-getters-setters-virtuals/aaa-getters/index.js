const { DataTypes, Model, Op } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.TEXT,
      // 定义取值器。每次从实例读取值都会被执行
      get() {
        console.log('-----------------------------取值');
        // 注意：需要使用 getDataValue 方法获取值（不通过取值器），因为如果使用 this.name 将会引发无限循环
        const rawValue = this.getDataValue('name');
        return rawValue ? rawValue.toUpperCase() : null;
      },
    },
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
  ]);

  const users = await User.findAll();
  console.log('======', JSON.stringify(users));
  console.log('======', users[0].name, users[0].getDataValue('name'));
})();
