const userService = require('../services/userService');
const express = require('express');
const router = express.Router();
const appointment = require('../models/Appointment');

/* GET users listing. */
router.get('/appointments/user/:userId', function(req, res, next) {
  appointment.findAll({where:{UserUserId: req.params.userId}}).then(function(appointments){
    res.send(appointments);
  }, function(error) {
    console.log("error: " + error);
  });
});


module.exports = router;