const serverless = require("serverless-http");
const express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var soap = require('soap');
var bodyParser = require('body-parser');
const app = express();
app.use(express.json());
const port = process.env.PORT || 8082;


var server = app.listen(port, ()=>{
  var host = '127.0.0.1',
  port = server.address().port;
  console.log(`Listening on port: ${port}`);
});


app.get('/', (req, res) => res.send(`Computação em Larga Escala/2022.1 UFF. \n Para consultar um cep vá até http://localhost:9090/consulta/`));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
