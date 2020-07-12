const { DataTypes, Model, Op, QueryTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class Ship extends Model {}
Ship.init({ name: DataTypes.TEXT }, { sequelize });

class Captain extends Model {}
Captain.init({ name: DataTypes.TEXT }, { sequelize });

Captain.hasOne(Ship);
Ship.belongsTo(Captain);

// 涉及关联的查询

// 延迟加载：仅在确实需要时才获取关联数据
// 预先加载：从一开始就通过较大的查询一次获取所有内容.

(async () => {
  await sequelize.sync({ force: true });
  const captain = await Captain.create({ name: 'Jack Sparrow' });
  await Ship.create({ name: 'Black Pearl', CaptainId: captain.id });

  // 下面是延迟加载

  // 执行了两个查询
  // 如果不需要 Ship 数据可以不查询 Ship。或在需要时再查询

  const jack = await Captain.findOne({ where: { name: 'Jack Sparrow' } });
  console.log('======jack', JSON.stringify(jack));

  // getShip 是自动添加的实例方法
  const jacksShip = await jack.getShip();
  console.log('======jack s ship', JSON.stringify(jacksShip));

  // 下面是预先加载

  // 使用 include 参数将 Ship 一起查询回来。（只执行了一个 sql）
  const jack2 = await Captain.findOne({ where: { name: 'Jack Sparrow' }, include: Ship });
  console.log('======jack2', JSON.stringify(jack2));
})();
