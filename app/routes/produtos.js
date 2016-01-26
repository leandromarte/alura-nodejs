module.exports = function (app) {
  app.get('/produtos', function (req, res) {
    conn = require('../../config/mysql')();
    conn.connect();

    conn.query("SELECT * FROM casadocodigo_nodejs.livros", function (err, results) {
      res.render('produtos/lista', {lista: results});
    });

    conn.end();
    res.render('produtos/lista');
  });
}
