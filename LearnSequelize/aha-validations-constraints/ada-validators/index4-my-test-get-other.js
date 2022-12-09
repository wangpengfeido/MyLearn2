const { DataTypes, Model, Op } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      validate: {
        myCustomValidator(value) {
          // 经验证，创建时这里可以正常取到 this.age 的值
          console.log('-------------------------------', this.age);
          if (this.age > 10 && value.length < 5) {
            throw new Error('-------------年龄大于10的，名字长度必须大于等于5');
          }
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
  await User.create({ name: 'sam', age: 15 });
})().catch((err) => {
  console.error('======', JSON.stringify(err));
});
