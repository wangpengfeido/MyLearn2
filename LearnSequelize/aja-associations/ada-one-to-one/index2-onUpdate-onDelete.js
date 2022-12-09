const { DataTypes, Model, Op, QueryTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class Foo extends Model {}
Foo.init({ name: DataTypes.TEXT }, { sequelize });

class Bar extends Model {}
Bar.init({ name: DataTypes.TEXT }, { sequelize });

Foo.hasOne(
  Bar,
  // 指定外键的 ON DELETE 和 ON UPDATE 行为 (当被参考字段更新时如何变化)
  // onDelete 默认为 SET NULL，onUpdate 默认为 CASCADE
  {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  }
  // RESTRICT       不允许更新删除
  // CASCADE        级联操作（跟随更新删除）
  // NO ACTION      同 RESTRICT
  // SET DEFAULT    设置为默认值
  // SET NULL       设置为 null
);
Bar.belongsTo(Foo);

(async () => {
  await sequelize.sync({ force: true });
})();
