const UserService = require('../services/userService');

/* GET users by id. */
exports.getUserById = function(req, res, next) {
    try {
        const user = UserService.getById(req.params.id);
        if (user) {
            return res.status(200).json({status: 200, data: user});
        } else {
            return res.status(400).json({status: 400, message: 'No existe ningun usuario con ese ID'});
        }
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}
