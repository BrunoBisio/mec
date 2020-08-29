const { Sequelize } = require('sequelize');
let connection;
const scope = process.env.SCOPE
if(scope === 'production') {
  connection = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
    dialect: 'mysql',
    logging:  true //false

  });
} else{
  connection = new Sequelize('MEC', 'mecadmin', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  }
);

}

connection.sync({ alter: true });

module.exports = connection;