const User = require('../models/User');
const docType = require('../models/DocType');
const bCrypt = require('bcrypt-nodejs');

exports.getById = function (id) {
    return User.findByPk(id);
}

exports.getUsers = function (condition) {
    return User.findAndCountAll(condition);
}

exports.getUserByRoleId = function (roleId, condition) {
    condition.where = { RoleId: roleId }
    return User.findAndCountAll(condition);
}

exports.createUser = function (user) {
    user.password = createHash(user.password)
    return User.create(user);
}

exports.updateUser = function (userId, userUpdated) {
    userUpdated.password = createHash(userUpdated.password)
    return User.update(userUpdated, { where: { id: userId } });
}
const getUserByDocNumber = function (docNumber, doctypeCode) {
    return User.findOne({where: {docNumber: docNumber}, include: [{model: docType, where:{ docTypeCode: doctypeCode}}]})
}
exports.getUserByDocNumber = getUserByDocNumber;
exports.login = function(docNumber, docType, password) {
    return getUserByDocNumber(docNumber, docType).then((user)=> {
        if (!isValidPassword(user, password)){
            throw 'Invalid Password';
        }
          // User and password both match, return user from 
          // done method which will be treated like success
        return user;
    })
}

const isValidPassword = function(user, password){
    return bCrypt.compareSync(password, user.password);
  }
  // Generates hash using bCrypt
  const createHash = function(password){
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
   }
