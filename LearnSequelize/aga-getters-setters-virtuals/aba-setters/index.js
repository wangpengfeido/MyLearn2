const { DataTypes, Model, Op } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.TEXT,
      // 定义存值器。每次向实例存值都会被执行
      set(value) {
        console.log('-------存值');
        // 使用 setDataValue方法来存值。可以与实例的其他值结合使用（仅限实例上已经有值时）
        this.setDataValue('name', `----${value}_${this.age || ''}----`);
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

  const user1 = await User.create({ name: 'tom', age: 10 });
  console.log('======1', user1.toJSON());

  const user2 = User.build({ name: 'sam', age: 5 });
  user2.name = 'sans';
  await user2.save();
  console.log('======2', user2.toJSON());

  // const users = await User.bulkCreate([
  //   { name: 'tom', age: 10 },
  //   { name: 'sam', age: 5 },
  // ]);
  // console.log('======', JSON.stringify(users));

  // await User.update({ name: 'tom' }, { where: { name: '----tom_----' } });
})();
