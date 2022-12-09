const { DataTypes, Model, Op, QueryTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class Foo extends Model {}
Foo.init({ name: DataTypes.TEXT }, { sequelize });

class Bar extends Model {}
Bar.init({ name: DataTypes.TEXT }, { sequelize });

// 一对一关系
// 一对一关系必须选择在哪一方建立外键

// 在 Bar 上建立了 Foo 的外键
Foo.hasOne(Bar);
Bar.belongsTo(Foo);

// CREATE TABLE Foos (...)
// CREATE TABLE Bars ( ... FOREIGN KEY (id) REFERENCES Foos(id)  ...)

(async () => {
  await sequelize.sync({ force: true });
})();
