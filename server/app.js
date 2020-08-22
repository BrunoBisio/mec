const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// routes
const usersRouter = require('./routes/users');
const appointmentsRouter = require('./routes/appointments');
const specialtyRouter = require('./routes/specialties');
const clinicRouter = require('./routes/clinics');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routers
app.use('/users', usersRouter);
app.use('/appointment', appointmentsRouter);
app.use('/specialty', specialtyRouter);
app.use('/clinic', clinicRouter);

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
