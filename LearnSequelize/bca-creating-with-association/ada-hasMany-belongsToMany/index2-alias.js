const { DataTypes, Model, Op, QueryTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

class Product extends Model {}
Product.init(
  {
    title: DataTypes.STRING,
  },
  { sequelize }
);

class Tag extends Model {}
Tag.init(
  {
    name: DataTypes.STRING,
  },
  { sequelize }
);

// 也支持别名
Tag.Products = Tag.belongsToMany(Product, { through: 'ProductTag', as: 'p' });
Product.Tags = Product.belongsToMany(Tag, { through: 'ProductTag', as: 't' });

(async () => {
  await sequelize.sync({ force: true });

  await Product.create(
    {
      title: 'chair',
      t: [{ name: 'A' }, { name: 'B' }],
    },
    {
      include: [
        {
          association: Product.Tags,
        },
      ],
    }
  );
})();
