const { DataTypes, Model, Op, QueryTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class Movie extends Model {}
Movie.init({ name: DataTypes.TEXT }, { sequelize });

class Actor extends Model {}
Actor.init({ name: DataTypes.TEXT }, { sequelize });

// 多对多关联
// 多对多关联使用联结模型实现。它将具有两个外键列并跟踪关联。

// 将自动创建 ActorMovies 作为联结模型
Movie.belongsToMany(Actor, { through: 'ActorMovies' });
Actor.belongsToMany(Movie, { through: 'ActorMovies' });

// CREATE TABLE ActorMovies ( 
//   FOREIGN KEY MovieId REFERENCES Movies(id),
//   FOREIGN KEY ActorId REFERENCES`Actors(id),
//   PRIMARY KEY (MovieId, ActorId)
// )

// 与一对一和一对多不同的是，多对多 ON UPDATE 和 ON DELETE 的默认值为 CASCADE

(async () => {
  await sequelize.sync({ force: true });
  const actor = await Actor.create({ name: 'tom' });
  actor.createMovie({ name: 'titanic' });
})();
