const { DataTypes, Model, Op, QueryTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class Movie extends Model {}
Movie.init({ name: { type: DataTypes.STRING, unique: true } }, { sequelize, timestamps: false });

class Actor extends Model {}
Actor.init({ name: { type: DataTypes.STRING, unique: true } }, { sequelize, timestamps: false });

// 与其他的不同，belongsToMany 需要指定 联结表 字段

// actor 使用 name，movie 使用主键
// Movie.belongsToMany(Actor, { through: 'ActorMovies', targetKey: 'name' });
// Actor.belongsToMany(Movie, { through: 'ActorMovies', sourceKey: 'name' });

// movie 使用 name, actor 使用主键
// Movie.belongsToMany(Actor, { through: 'ActorMovies', sourceKey: 'name' });
// Actor.belongsToMany(Movie, { through: 'ActorMovies', targetKey: 'name' });

// actor 和 movie 都使用 name
Movie.belongsToMany(Actor, { through: 'ActorMovies', targetKey: 'name', sourceKey: 'name' });
Actor.belongsToMany(Movie, { through: 'ActorMovies', targetKey: 'name', sourceKey: 'name' });

(async () => {
  await sequelize.sync({ force: true });
  const actor = await Actor.create({ name: 'tom' });
  actor.createMovie({ name: 'titanic' });
})();
