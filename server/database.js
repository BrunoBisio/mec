const { Sequelize } = require('sequelize');
let connection;
const scope = process.env.SCOPE
if(scope === 'production') {
  connection = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
    dialect: 'mysql',
    port:     match[4],
    host:     match[3],
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