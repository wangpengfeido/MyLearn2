// 模型是代表数据库中表的抽象.
// 在 Sequelize 中,它是一个 Model 的扩展类.
// 该模型告诉 Sequelize 有关它代表的实体的几件事,例如数据库中表的名称以及它具有的列(及其数据类型).
// Sequelize 中的模型有一个名称. 此名称不必与它在数据库中表示的表的名称相同. 通常,模型具有单数名称(例如,User),而表具有复数名称(例如, Users),当然这是完全可配置的.

// 有两种方式定义模型：
//   * 调用 sequelize.define(modelName, attributes, options)
//   * 扩展 Model 并调用 init(attributes, options)
// 这两种方式是等效的
// 定义模型后,可通过其模型名称在 sequelize.models 中使用该模型.

const { DataTypes } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

// sequelize.define 方式
const User = sequelize.define(
  'User',
  {
    // 在这里定义模型属性
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull 默认为 true
    },
  },
  {
    // 这是其他模型参数
  }
);

// `sequelize.define` 会返回模型
console.log(User === sequelize.models.User); // true
