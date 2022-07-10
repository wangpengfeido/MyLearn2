const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');


// 扩展 Model 方式
class User extends Model {}

User.init(
  {
    // 在这里定义模型属性
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'User', // 我们需要选择模型名称
  }
);

// 定义的模型是类本身
console.log(User === sequelize.models.User); // true
