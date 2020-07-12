const { DataTypes, Model, Op, QueryTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class Ship extends Model {}
Ship.init({ name: DataTypes.TEXT }, { sequelize, timestamps: false });

class Captain extends Model {}
Captain.init({ name: DataTypes.TEXT }, { sequelize, timestamps: false });

// 在相同模型间建立多个关联时，只要定义不同外键即可
Captain.hasOne(Ship, { as: 'PossessShip', foreignKey: 'bePossessedId' });
Ship.belongsTo(Captain, { as: 'PossessCaptain', foreignKey: 'bePossessedId' });
Captain.hasOne(Ship, { as: 'ControlShip', foreignKey: 'beControlledId' });
Ship.belongsTo(Captain, { as: 'ControlCaptain', foreignKey: 'beControlledId' });


(async () => {
  await sequelize.sync({ force: true });

  const captain = await Captain.create({ name: 'Jack Sparrow' });

  await captain.createPossessShip({ name: 'Black Pearl' });
  await captain.createControlShip({ name: 'Flying Dutchman' });
})();
