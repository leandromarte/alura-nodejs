var mysql = require('mysql');

function createDBConn () {
  var conn  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1q2w3e4r',
    database: 'casadocodigo_nodejs'
  });
  return conn;
};

module.exports = function () {
  return createDBConn;
}
