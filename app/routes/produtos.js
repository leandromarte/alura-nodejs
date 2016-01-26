module.exports = function (app) {
  app.get('/produtos', function (req, res) {
    var mysql = require('mysql');
    var conn  = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1q2w3e4r',
      database: 'casadocodigo_nodejs'
    });
    conn.connect();

    conn.query("SELECT * FROM casadocodigo_nodejs.livros", function (err, results) {
      res.render('produtos/lista', {lista: results});
    });

    conn.end();
    res.render('produtos/lista');
  });
}
