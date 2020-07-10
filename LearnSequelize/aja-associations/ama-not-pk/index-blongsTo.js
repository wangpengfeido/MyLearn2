const { DataTypes, Model, Op, QueryTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class Ship extends Model {}
Ship.init({ name: DataTypes.TEXT }, { sequelize, timestamps: false });

class Captain extends Model {}
Captain.init(
  {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  { sequelize, timestamps: false }
);

// 可以使用非主键作为外键建立关联。但这个字段必须具有唯一约束

Captain.hasOne(Ship, { sourceKey: 'name', foreignKey: 'captainName' });
Ship.belongsTo(Captain, {
  // 指定目标键
  targetKey: 'name',
  // 指定外键名称
  foreignKey: 'captainName',
});

(async () => {
  await sequelize.sync({ force: true });
  const captain = await Captain.create({ name: 'Jack Sparrow' });
  await captain.createShip({ name: 'Black Pearl' });
})();
