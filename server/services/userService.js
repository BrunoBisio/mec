const User = require('../models/User');

const userService = {
    getById: function(id) {
        User.findByPk(id).then(
            (user) => { return user; },
            (error) => { console.log(error); }
        );
    }
}

module.exports = userService;