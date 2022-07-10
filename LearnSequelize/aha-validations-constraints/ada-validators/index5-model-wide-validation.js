const { DataTypes, Model, Op } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

// 模型范围验证

class User extends Model {}

User.init(
  {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
  },
  {
    sequelize,
    validate: {
      // 定义了模型范围的验证器
      bothCoordsOrNone() {
        if ((this.latitude === null) !== (this.longitude === null)) {
          throw new Error('经纬度或者不给出，或者全给出');
        }
      },
    },
  }
);

(async () => {
  await sequelize.sync({ force: true });
  await User.create({ name: 'tom', age: 10 });
  await User.create({ name: 'sam', age: 15, latitude: 10, longitude: null });
})().catch((err) => {
  console.error('======', JSON.stringify(err));
});
