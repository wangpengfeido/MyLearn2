const { DataTypes, Model } = require('sequelize');
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

  // 使用 create 方法创建并保存实例.它是 build 和 save 方法的简写
  const tom = await User.create({ name: 'tom' });

  // fields 可以设置使用的属性.未在其中的属性既不会在实例中,也不会被保存在数据库中
  const sam = await User.create({ name: 'sam', age: 10 }, { fields: ['name'] });
  console.log('======', sam.toJSON());
})();
