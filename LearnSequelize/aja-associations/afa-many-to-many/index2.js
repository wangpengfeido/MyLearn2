const { DataTypes, Model, Op, QueryTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class Movie extends Model {}
Movie.init({ name: DataTypes.TEXT }, { sequelize });

class Actor extends Model {}
Actor.init({ name: DataTypes.TEXT }, { sequelize });

// 也可以自定义联结模型

class ActorMovies extends Model {}
ActorMovies.init(
  {
    MovieId: {
      type: DataTypes.INTEGER,
      references: {
        model: Movie,
        key: 'id',
      },
    },
    ActorId: {
      type: DataTypes.INTEGER,
      references: {
        model: Actor,
        key: 'id',
      },
    },
  },
  { sequelize }
);

Movie.belongsToMany(Actor, { through: 'ActorMovies' });
Actor.belongsToMany(Movie, { through: 'ActorMovies' });

(async () => {
  await sequelize.sync({ force: true });
  const actor = await Actor.create({ name: 'tom' });
  actor.createMovie({ name: 'titanic' });
})();
