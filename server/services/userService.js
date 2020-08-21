const User = require('../models/User');

exports.getById = function(id) {
    User.findByPk(id).then(
        (user) => { return user; },
        (error) => { console.log(error); return; }
    );
}