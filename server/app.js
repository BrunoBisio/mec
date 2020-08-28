const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// routes
const usersRouter = require('./routes/users');
const appointmentsRouter = require('./routes/appointments');
const specialtyRouter = require('./routes/specialties');
const prescriptionRouter = require('./routes/prescriptions');
const clinicRouter = require('./routes/clinics');
const medicalRecordRouter = require('./routes/medicalRecords');
const medicalRecordRouterAppointment = require('./routes/medicalRecordsAppointment');
const docTypeRouter = require('./routes/docTypes');
const emailRouter = require('./routes/email');
const medicDetailRouter = require('./routes/medicDetails');
const raceRouter = require('./routes/race');
const planRouter = require('./routes/plan');
const roleRouter = require('./routes/role');
const cityRouter = require('./routes/city');

const User = require('./services/userService');
const passport = require('./middleware/passportMiddleware');

let app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.passport.initialize())

// routers
app.use('/users', usersRouter);
app.use('/appointment', appointmentsRouter);
app.use('/specialties', specialtyRouter);
app.use('/clinics', clinicRouter);
app.use('/prescription', prescriptionRouter);
app.use('/medicalRecord', medicalRecordRouter);
app.use('/medicalRecordAppointment', medicalRecordRouterAppointment);
app.use('/docTypes', docTypeRouter);
app.use('/email', emailRouter);
app.use('/medic', medicDetailRouter);
app.use('/races', raceRouter);
app.use('/plans', planRouter);
app.use('/roles', roleRouter);
app.use('/cities', cityRouter);

/* Logica par alevantar React */
app.use(express.static(path.join(__dirname, '/../build')));

app.all('*', function(req, res, next) {
  const route = __dirname + '/../build/index.html'
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
    error: err // req.app.get('env') !== 'production' ? err : {}
  }
  res.send(error)
});

module.exports = app;
