const { DataTypes, Model, Op } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.TEXT,
      validate: {
        len: [3, 6],
      },
    },
    age: DataTypes.INTEGER,
  },
  {
    sequelize,
  }
);

(async () => {
  await sequelize.sync({ force: true });

  // bulkCreate 不会对每个对象进行验证（create 会）
  const users = await User.bulkCreate(
    [
      // 不验证时, 不符合条件的值也会被正常创建，不会引发错误
      // 验证开启时，将引发错误，不会创建任何内容
      { name: 'tom obad' },
      { name: 'sam' },
      { name: 'jerry', age: 15 },
    ],
    {
      // 开启验证
      validate: true,
    }
  );
})();
