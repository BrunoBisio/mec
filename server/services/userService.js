const User = require('../models/User');
const { Op } = require("sequelize");
const DocType = require('../models/DocType');
const Role = require('../models/Role');
const City = require('../models/City');
const Race = require('../models/Race');
const Plan = require('../models/Plan');
const bCrypt = require('bcrypt-nodejs');
const access = require('../models/Access');
const roleXaccess = require('../models/RoleXAccess');

exports.getById = function (id) {
    return User.findByPk(id, {
        attributes: {
            exclude: ['password']
        },
        include: [
            { model: Role, include: {model: access, through: { model: roleXaccess,
                attributes:[]} }},
            { model: City },
            { model: DocType },
            { model: Race },
            { model: Plan }
        ]
    });
}

exports.getUsers = function (condition) {
    return User.findAndCountAll(condition, {
        attributes: {
            exclude: ['password']
        },
        include: [
            { model: Role },
            { model: City },
            { model: DocType },
            { model: Race },
            { model: Plan }
        ]
    });
}

exports.getPatients = function (condition) {
    condition.where=  { RoleId: 4}
    condition.attributes =  {exclude: ['password']}
    return User.findAndCountAll(condition);
}

exports.getEmployees = function (condition) {
    condition.where = {RoleId:  {[Op.not]: 4}}
    condition.attributes =  {exclude: ['password']}
    return User.findAndCountAll(condition);
}

exports.getUserByRoleId = function (roleId, condition) {
    condition.where = { RoleId: roleId }
    return User.findAndCountAll(condition,{attributes:  {exclude: ['password']}});
}

exports.createUser = function (user) {
    user.password = createHash(user.password)
    return User.create(user);
}

exports.updateUser = function (userId, userUpdated) {
    if(userUpdated.password) {
        userUpdated.password = createHash(userUpdated.password)
    }
    return User.update(userUpdated, { where: { id: userId } });
}

exports.getUserForDelete = function(condition) {
    condition.where = { [Op.and]: [
        { deleteRequest: true },
        { deletedAt: null }
      ]}
      condition.include = [
        { model: City },
        { model: DocType },
        { model: Race },
        { model: Plan }
    ]
    return User.findAndCountAll(condition,{attributes:  {exclude: ['password']}});
}

exports.deleteUser = function(userId) {
    return User.destroy({ where: { id: userId } });
}
const getUserByDocNumber = function (docNumber, doctypeCode) {
    return User.findOne({where: {docNumber: docNumber}, include: [{model: DocType, where:{ docTypeCode: doctypeCode}}]})
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
