const { DataTypes, Model, Op } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      // 不允许 null 值
      allowNull: false,
      unique: true,
    },
    age: DataTypes.INTEGER,
  },
  {
    sequelize,
  }
);

// allowNull 检查是 验证 和 约束 混合而成的检查
//     试图将 null 设置到不允许为 null 的字段, 不会执行任何 sql
//     具有 allowNull: false 的列将使用 NOT NULL SQL 约束进行定义

(async () => {
  await sequelize.sync({ force: true });
  await User.create({ name: 'tom', age: 10 });
  await User.create({ age: 5 });
})().catch((err) => {
  console.error('======', JSON.stringify(err));
});
