const { DataTypes, Model, Op, QueryTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class Team extends Model {}
Team.init({ name: DataTypes.TEXT }, { sequelize });

class Player extends Model {}
Player.init({ name: DataTypes.TEXT }, { sequelize });

// 一对多关系
// 一对多要在多的一方建立外键

// 在 Player（多） 上建立了 Team（一） 的外键
Team.hasMany(Player, {});
Player.belongsTo(Team);

// CREATE TABLE Teams (...)
// CREATE TABLE Players (... FOREIGN KEY (TeamId) REFERENCES Teams(id) ...)

// 同样地，hasMany 也可以使用与建立一对一关联时相同的参数

(async () => {
  await sequelize.sync({ force: true }); 
})();
