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

Tag.Products = Tag.belongsToMany(Product, { through: 'ProductTag' });
Product.Tags = Product.belongsToMany(Tag, { through: 'ProductTag' });

(async () => {
  await sequelize.sync({ force: true });

  await Product.create(
    {
      title: 'chair',
      Tags: [{ name: 'A' }, { name: 'B' }],
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
