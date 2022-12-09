const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../common/commonConnect.js');

// 可以为类添加实例方法或静态方法
class User extends Model {
  // 自定义静态方法
  static classLevelMethod() {
    return 'foo';
  }
  // 自定义实例方法
  instanceLevelMethod() {
    return 'bar';
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);

console.log(User.classLevelMethod());
const user = User.build({ firstName: 'Jane', lastName: 'Doe' });
console.log(user.instanceLevelMethod());
console.log(user.getFullName());
