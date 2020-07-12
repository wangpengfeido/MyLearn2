const { DataTypes, Model, Op, QueryTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class Ship extends Model {}
Ship.init({ name: DataTypes.TEXT }, { sequelize, timestamps: false });

class Captain extends Model {}
Captain.init({ name: DataTypes.TEXT }, { sequelize, timestamps: false });

// 同时提供外键和定义别名

// 将在 Ship 中创建 bossId 外键，并改变自动添加的方法名及模型名
Captain.hasOne(Ship, { as: 'vessel', foreignKey: 'bossId' });
Ship.belongsTo(Captain, { as: 'leader', foreignKey: 'bossId' });

(async () => {
  await sequelize.sync({ force: true });
  const captain = await Captain.create({ name: 'Jack Sparrow' });
  await captain.createVessel({ name: 'Black Pearl' });

  const jack = await Captain.findOne({ where: { name: 'Jack Sparrow' } });
  console.log('======jack', JSON.stringify(jack));
  // 自动添加的方法名称改变
  const jacksShip = await jack.getVessel();
  console.log('======jack s ship', JSON.stringify(jacksShip));

  // 预先加载不再能直接传递模型，可传递字符串，或一个指定别名的模型
  const jack2 = await Captain.findOne({ where: { name: 'Jack Sparrow' }, include: 'vessel' });
  console.log('======jack2', JSON.stringify(jack2));

  const jack3 = await Captain.findOne({
    where: { name: 'Jack Sparrow' },
    include: {
      model: Ship,
      as: 'vessel',
    },
  });
  console.log('======jack3', JSON.stringify(jack3));
})();
