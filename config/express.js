var express = require('express');
var load = require('express-load');


module.exports = function () {
  console.log('modulo carregado.');
  app = express();
  app.set('view engine', 'ejs');
  app.set('views', './app/views/');

  load('routes', {cwd: 'app'})
  .then('infra', {cwd: 'app'})
  .into(app);

  return app;
}
