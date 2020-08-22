var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// routes
var usersRouter = require('./routes/users');
var appointmentsRouter = require('./routes/appointments');
var specialtyRouter = require('./routes/specialties');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routers
app.use('/users', usersRouter);
app.use('/appointment', appointmentsRouter);
app.use('/specialty', specialtyRouter);

/**
* Logica par alevantar React
*/
app.use(express.static(path.join(__dirname, '/../build')));

app.all('/', function(req, res, next) {
  const route = __dirname + '/../build/index.html'
  console.log(route)
  res.sendFile(path.join(route));
});
// Termina React

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
 
  // render the error page
  status = err.status || 400
  res.status(status);
  // Creates and error message
  error = {
    status: status,
    message: "we have a problem with your request",
    error: req.app.get('env') !== 'production' ? err : {}
  }
  res.send(error)
});

module.exports = app;
