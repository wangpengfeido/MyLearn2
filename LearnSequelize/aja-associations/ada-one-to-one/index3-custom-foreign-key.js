const { DataTypes, Model, Op, QueryTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class Foo extends Model {}
Foo.init({ name: DataTypes.TEXT }, { sequelize });

class Bar extends Model {}
Bar.init({ name: DataTypes.TEXT }, { sequelize });

// 自定义外键

Foo.hasOne(Bar, {
  // foreignKey 可以接受一个字符串或对象
  // 接受对象时，可以像定义模型中字段一样定义，接收 type,allowNull,defaultValue 等参数
  foreignKey: {
    name: 'myFooId',
    type: DataTypes.INTEGER,
    // 将 allowNull 设置为 false 可以将关联置为强制性关联，外键值必须存在
    allowNull: false,
  },
});
Bar.belongsTo(Foo, { foreignKey: 'myFooId' });

(async () => {
  await sequelize.sync({ force: true });
})();
