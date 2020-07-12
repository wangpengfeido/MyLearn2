const { DataTypes, Model, Op } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class User extends Model {}

// 注意：存取值器均为实例层面，与存取数据库无关

User.init(
  {
    name: {
      type: DataTypes.TEXT,
      // 组合使用存取值器
      get() {
        const rawValue = this.getDataValue('name');
        return rawValue ? rawValue.toLowerCase() : null;
      },
      set(value) {
        this.setDataValue('name', value ? value.toUpperCase() : null);
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
