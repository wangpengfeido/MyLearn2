const { DataTypes, Model, Op } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class User extends Model {}

User.init(
  {
    name: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    // 虚拟字段
    // 虚拟字段只存在于实例中，而不存在于数据库中
    full: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.name}_${this.age}`;
      },
      set() {
        // 注意：不能设置虚拟字段的值
      },
    },
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
  console.log('======', users[0].full);
})();
