const { DataTypes, Model, Op, QueryTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class Ship extends Model {}
Ship.init({ name: DataTypes.TEXT }, { sequelize, timestamps: false });

class Captain extends Model {}
Captain.init({ name: DataTypes.TEXT }, { sequelize, timestamps: false });

// 有三种方法可以为外键指定不同的名称：
//   通过直接提供外键名称
//   通过定义别名
//   通过两个方法同时进行

// 下面是直接提供外键名称

Captain.hasOne(Ship, { foreignKey: { name: 'bossId' } });
Ship.belongsTo(Captain, { foreignKey: { name: 'bossId' } });

(async () => {
  await sequelize.sync({ force: true });
  const captain = await Captain.create({ name: 'Jack Sparrow' });
  await captain.createShip({ name: 'Black Pearl' });

  const jack = await Captain.findOne({ where: { name: 'Jack Sparrow' } });
  console.log('======jack', JSON.stringify(jack));
  const jacksShip = await jack.getShip();
  console.log('======jack s ship', JSON.stringify(jacksShip));

  const jack2 = await Captain.findOne({ where: { name: 'Jack Sparrow' }, include: Ship });
  console.log('======jack2', JSON.stringify(jack2));
})();
