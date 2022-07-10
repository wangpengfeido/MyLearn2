const { QueryTypes } = require('sequelize');
await sequelize.query('SELECT 1', {
  // 用于记录查询的函数(或false)
  // 将调用发送到服务器的每个SQL查询.
  logging: console.log,

  // 如果plain为true,则sequelize将仅返回结果集的第一条记录.
  // 如果是false,它将返回所有记录.
  plain: false,

  // 如果你没有查询的模型定义,请将此项设置为true.
  raw: false,

  // 你正在执行的查询类型. 查询类型会影响结果在传回之前的格式.
  type: QueryTypes.SELECT,
});

// 注意第二个参数为null！
// 即使我们在这里声明了一个被调用对象,
// raw: true 也会取代并返回一个原始对象.

console.log(await sequelize.query('SELECT * FROM projects', { raw: true }));
