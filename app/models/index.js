'use strict';

const
  Sequelize = require('sequelize'),
  sequelize = new Sequelize(
        process.env.DB_MYSQL_1_ENV_MYSQL_DATABASE,
        process.env.DB_MYSQL_1_ENV_MYSQL_USER,
        process.env.DB_MYSQL_1_ENV_MYSQL_PASSWORD,
        {
        host     : 'db_mysql',
        dialect: 'mysql'
      }
    );

sequelize
    .authenticate()
    .then((err)=>{
        console.log('Conected to DB');
    })
    .catch((err)=>{
        console.log(`DB Conection failed: ${err}`);
    });

module.exports.sequelize  = sequelize;
module.exports.Post = sequelize.import('./post');