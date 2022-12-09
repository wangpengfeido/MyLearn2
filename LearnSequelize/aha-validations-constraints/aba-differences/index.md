验证和约束的区别： 
* 验证是 Sequelize 层面的，验证失败不会执行 sql
* 约束是数据库层面的，无论如何都会执行 sql ，约束不通过会引发数据库错误。Sequelize 会抛出 SequelizeUniqueConstraintError 异常






