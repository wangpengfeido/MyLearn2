const { DataTypes, Model, Op, QueryTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
  },
  { sequelize, timestamps: false }
);

class Profile extends Model {}
Profile.init(
  {
    name: DataTypes.STRING,
  },
  { sequelize, timestamps: false }
);

// 自定义联结表
class Grant extends Model {}
Grant.init(
  {
    // 可以自定义主键，而不使用复合主键
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // 可以在联结表中定义更多列
    selfGranted: DataTypes.BOOLEAN,
  },
  { sequelize, timestamps: false }
);

// 可以使用 uniqueKey 自定义复合主键名
// User.belongsToMany(Profile, { through: Grant, uniqueKey: 'my_custom_unique' });
// Profile.belongsToMany(User, { through: Grant, uniqueKey: 'my_custom_unique' });

User.belongsToMany(Profile, { through: Grant });
Profile.belongsToMany(User, { through: Grant });

(async () => {
  await sequelize.sync({ force: true });

  const tom = User.create({ username: 'tom' });
  tom.addProfile({name:''})
})();
