const { DataTypes, Model, Op, QueryTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class Product extends Model {}
Product.init(
  {
    title: DataTypes.STRING,
  },
  { sequelize }
);

class User extends Model {}
User.init(
  {
    name: DataTypes.STRING,
  },
  { sequelize }
);

// 使用了别名
Product.master = Product.belongsTo(User, { as: 'master' });

(async () => {
  await sequelize.sync({ force: true });

  await Product.create(
    {
      title: 'chair',
      // 数据也必须使用 别名
      master: {
        name: 'tom',
      },
    },
    {
      include: [{ association: Product.master, }],
    }
  );
})();
