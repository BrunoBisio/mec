const express = require('express');
const router = express.Router();
const db = require('../database');
const User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll().then(function(users){
    console.log(users);
    res.sendStatus(200);
  }, function(error) {
    console.log("error: " + error);
  });
});

module.exports = router;
