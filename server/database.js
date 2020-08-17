const { Sequelize } = require('sequelize');

const connection = new Sequelize('MEC', 'mecadmin', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });

  // test connection
/*sequelize.authenticate().then(function() {
  console.log("db success");
}, function(err) {
  console.log("db connection error: " + err);
});*/

module.exports = connection;
