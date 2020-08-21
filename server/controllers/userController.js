const userService = require('../services/userService');
const express = require('express');
const router = express.Router();

/* GET users by id. */
router.get('user/:id', function(req, res, next) {
    const id = req.params.id;
    const user = userService.getById(id);
    res.json(user);
});

module.exports = router;