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

  // 可以直接使用标准模型执行操作
  const captain = await Captain.create({ name: 'Jack Sparrow' });
  await Ship.create({ name: 'Black Pearl', CaptainId: captain.id });

  // 或者可使用关联模型的 特殊方法/混合 ，将在后面介绍

  // 注意：save() 方法不知道关联关系。如果修改了父级实例预先加载的子级的值，save() 时不会更新子级的修改。
})();
