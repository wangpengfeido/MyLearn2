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

class Address extends Model {}
Address.init(
  {
    detail: DataTypes.STRING,
  },
  { sequelize }
);

// 这里保存了关联结果，方便以后调用
Product.User = Product.belongsTo(User);
User.Addresses = User.hasMany(Address);

(async () => {
  await sequelize.sync({ force: true });

  // 一次创建了 product,user,address
  await Product.create(
    {
      title: 'chair',
      // User 是模型名
      User: {
        name: 'tom',
        // Address 是模型名。这里必须使用复数
        Addresses: [{ detail: 'Shanghai' }, { detail: 'Shandong' }],
      },
    },
    {
      // 使用 include 指定了创建时包含的关联
      include: [
        {
          association: Product.User,
          include: [User.Addresses],
        },
      ],
    }
  );
})();
