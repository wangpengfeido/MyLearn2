// allowNull 与其他验证器的交互：
// 如果将字段设置为 allowNull: false ,并且该值设置为 null,则将跳过所有验证器,并抛出 ValidationError.
// 如果将其设置为 allowNull: true,并且该值设置为 null,则仅会跳过内置验证器,而自定义验证器仍将运行.

class User extends Model {}
User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      // 当 username 设置为 null，将跳过 len 验证器
      validate: {
        len: [5, 10],
      },
    },
  },
  { sequelize }
);

class User2 extends Model {}
User2.init(
  {
    age: Sequelize.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        // 当name设置为null时，自定义验证器仍然会执行
        customValidator(value) {
          if (value === null && this.age !== 10) {
            throw new Error('除非年龄为10,否则名称不能为 null');
          }
        },
      },
    },
  },
  { sequelize }
);

class User3 extends Model {}
UsUser3er.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // 通过 notNull 验证器自定义 allowNull 的错误消息
        notNull: {
          msg: '请输入你的名字',
        },
      },
    },
  },
  { sequelize }
);
