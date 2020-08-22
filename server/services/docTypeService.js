const DocTypes = require('../models/DocType');

exports.getDocTypes = function(){
    return DocTypes.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
}