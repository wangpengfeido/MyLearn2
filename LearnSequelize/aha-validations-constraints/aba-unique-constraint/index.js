const { DataTypes, Model, Op } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      // 创建唯一约束
      unique: true,
    },
    age: DataTypes.INTEGER,
  },
  {
    sequelize,
  }
);

(async () => {
  await sequelize.sync({ force: true });
  await User.create({ name: 'tom', age: 10 });
  await User.create({ name: 'tom', age: 5 });
})().catch((err) => {
  console.error('======', JSON.stringify(err));
});
