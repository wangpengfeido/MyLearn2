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

  const tom = await User.create({ name: 'tom', age: 2, cash: 100 });
  // 递增递减值
  const incrementResult = await tom.increment('age', { by: 2 });
  // 注意：递增递减后的结果不会反应到实例中，需要调用 reload 方法更新
  console.log('======', JSON.stringify(incrementResult), tom.toJSON());
  await tom.reload();
  console.log('======', tom.toJSON());
  // 只增减 1，省略 by 参数
  await tom.increment('age');
  // 一次增减多个字段
  await tom.increment({ age: 2, cash: 10 });
  // 多个字段增减相同数量
  await tom.increment(['age', 'cash'], { by: 10 });
})();
