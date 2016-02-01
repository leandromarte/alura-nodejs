module.exports = function (app) {
  app.get('/produtos', function (req, res) {
    conn = app.infra.mysql();
    conn.connect();

    conn.query("SELECT * FROM casadocodigo_nodejs.livros", function (err, data) {
      res.render('produtos/lista', {lista: data});
    });

    conn.end();
  });
}
