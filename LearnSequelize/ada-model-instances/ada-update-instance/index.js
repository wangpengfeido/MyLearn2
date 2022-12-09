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
  console.log(tom.name);
  // 修改实例属性。但并未保存到数据库。
  tom.name = 'tom G';
  // 保存到数据库
  await tom.save();
  console.log('已保存到数据库')
})();
