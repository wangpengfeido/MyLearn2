// 运算符逻辑组合

const { Op } = require('sequelize');

// Op.and, Op.or
Foo.findAll({
  where: {
    // // rank < 1000 OR rank IS NULL
    rank: {
      [Op.or]: {
        [Op.lt]: 1000,
        [Op.eq]: null,
      },
    },

    // createdAt < [timestamp] AND createdAt > [timestamp]
    createdAt: {
      [Op.lt]: new Date(),
      [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000),
    },

    // title LIKE 'Boat%' OR description LIKE '%boat%'
    [Op.or]: [
      {
        title: {
          [Op.like]: 'Boat%',
        },
      },
      {
        description: {
          [Op.like]: '%boat%',
        },
      },
    ],
  },
});

// Op.not
Project.findAll({
  // where name='some Project' and not( id in (1,2,3) or description like 'hello%' )
  where: {
    name: 'Some Project',
    [Op.not]: [
      { id: [1,2,3] },
      {
        description: {
          [Op.like]: 'Hello%'
        }
      }
    ]
  }
});













