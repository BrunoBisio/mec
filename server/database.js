const { Sequelize } = require('sequelize');

const connection = new Sequelize('MEC', 'mecadmin', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  }
);

connection.sync({ alter: true });

module.exports = connection;