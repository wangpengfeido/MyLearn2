const { DataTypes, Model, Op } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      validate: {
        // 可以传入一个对象，包含参数和自定义错误消息
        len: {
          args: [2, 6],
          msg: '名字必须是指定长度',
        },
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
  await User.create({ name: 'tom', age: 10 });
  await User.create({ name: 'jerry G H', age: 5 });
})().catch((err) => {
  console.error('======', JSON.stringify(err));
});
