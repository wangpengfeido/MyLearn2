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

Captain.hasOne(Ship, {
  // 指定源键
  sourceKey: 'name',
  // 指定外键名称
  foreignKey: 'captainName',
});
Ship.belongsTo(Captain, { targetKey: 'name', foreignKey: 'captainName' });

(async () => {
  await sequelize.sync({ force: true });
  const captain = await Captain.create({ name: 'Jack Sparrow' });
  await captain.createShip({ name: 'Black Pearl' });
})();
