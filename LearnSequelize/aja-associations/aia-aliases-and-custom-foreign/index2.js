const { DataTypes, Model, Op, QueryTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class Ship extends Model {}
Ship.init({ name: DataTypes.TEXT }, { sequelize, timestamps: false });

class Captain extends Model {}
Captain.init({ name: DataTypes.TEXT }, { sequelize, timestamps: false });

// 定义别名

// wpf：注意：最好不要单独使用 as ，因为会使得模型名和自动添加的方法的语义变得很奇怪
// wfp：为什么 hasOne 和 belongsTo 不使用不同 as 值呢？因为会创建两个不同名的外键

// 将在 Ship 中创建 bossId 外键，并改变自动添加的方法名及模型名
Captain.hasOne(Ship, { as: 'boss' });
Ship.belongsTo(Captain, { as: 'boss' });

(async () => {
  await sequelize.sync({ force: true });
  const captain = await Captain.create({ name: 'Jack Sparrow' });
  await captain.createBoss({ name: 'Black Pearl' });

  const jack = await Captain.findOne({ where: { name: 'Jack Sparrow' } });
  console.log('======jack', JSON.stringify(jack));
  // 自动添加的方法名称改变
  const jacksShip = await jack.getBoss();
  console.log('======jack s ship', JSON.stringify(jacksShip));

  // 预先加载不再能直接传递模型，可传递字符串，或一个指定别名的模型
  const jack2 = await Captain.findOne({ where: { name: 'Jack Sparrow' }, include: 'boss' });
  console.log('======jack2', JSON.stringify(jack2));

  const jack3 = await Captain.findOne({
    where: { name: 'Jack Sparrow' },
    include: {
      model: Ship,
      as: 'boss',
    },
  });
  console.log('======jack3', JSON.stringify(jack3));
})();
