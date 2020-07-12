const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class User extends Model {}

User.init(
  {
    name: DataTypes.TEXT,
    favoriteColor: {
      type: DataTypes.TEXT,
      defaultValue: 'green',
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER,
  },
  {
    sequelize,
  }
);

(async () => {
  await sequelize.sync({ force: true });

  // 不是使用 new 方法来实例化，而是使用 build 方法
  const jane = User.build({ name: 'jane' });
  console.log(jane instanceof User); // true
  console.log(jane.name);

  // build 方法仅创建一个对象
  // 使用 save方法保存到数据库
  await jane.save();
  console.log('已保存到数据库');

  // create 是将 build 和 save 合并为一个方法。创建对象并保存到了数据库
  const tom = await User.create({ name: 'tom' });
  console.log(tom instanceof User); // true
  console.log(tom.name);
})();
