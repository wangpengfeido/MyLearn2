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

  const tom = await User.create({ name: 'tom' });
  console.log('======', tom.name, tom.favoriteColor);
  tom.name = 'tom-G';
  tom.favoriteColor = 'blue';
  // 可以传递一个列名数组，定义 save 时保存的属性
  await tom.save({ fields: ['name'] });
  // 这里 favoriteColor 是 blue ,因为这是本地属性，数据库中是 green
  console.log('======', tom.name, tom.favoriteColor);
  await tom.reload();
  console.log('======', tom.name, tom.favoriteColor);
})();
