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
  // 为了将实例打印，可以使用 toJSON 方法
  console.log(tom.toJSON());
  // 也可以使用 JSON.stringify()
  console.log(JSON.stringify(tom));
})();
