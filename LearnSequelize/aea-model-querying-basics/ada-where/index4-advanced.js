const { DataTypes, Model, Op } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class User extends Model {}

User.init(
  {
    name: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    address: DataTypes.TEXT,
  },
  {
    sequelize,
  }
);

(async () => {
  await sequelize.sync({ force: true });
  await User.create({ name: 'tom', age: 5, address: 'shanghai china' });
  await User.create({ name: 'sam', age: 10, address: 'shanghai china' });
  await User.create({ name: 'jerry', age: 15, address: 'york america' });

  // 使用 sequelize.where 进行高级查询.
  // 注意:函数名需要使用 sequelize.fn 方法, 列名需要使用 sequelize.col 方法, 而不能直接使用字符串
  // where char_length('name')=3
  user1 = await User.findAll({ where: sequelize.where(sequelize.fn('char_length', sequelize.col('name')), 3) });
  console.log('======', JSON.stringify(user1));

  // 更复杂的情况
  // where char_length(name)=3 or address like '%china' or (address like '%america' and char_length(name)>4)
  user2 = await User.findAll({
    where: {
      [Op.or]: [
        sequelize.where(sequelize.fn('char_length', sequelize.col('name')), 3),
        { address: { [Op.like]: '%china' } },
        {
          [Op.and]: [
            { address: { [Op.like]: '%america' } },
            sequelize.where(sequelize.fn('char_length', sequelize.col('name')), { [Op.gt]: 4 }),
          ],
        },
      ],
    },
  });
  console.log('======', JSON.stringify(user2));
})();
