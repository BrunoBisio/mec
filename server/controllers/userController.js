const UserService = require('../services/userService');
const Pagination = require('../utils/paginationResponse');
const passport = require('passport');
const jwt       = require('jsonwebtoken');
const createError = require('http-errors');

/* GET users by id. */
exports.getUserById = function (req, res, next) {
    UserService.getById(req.params.id).then((user) => {
        return res.status(200).json({ status: 200, data: user });
    }).catch((error) => {
        next(error);
    });
}

/* GET users */
exports.getUsers = function (req, res, next) {
    UserService.getUsers(req.pagination).then((users) => {
        return res.status(200).json({ status: 200, data: Pagination.generateResponse(users, req.pagination) });
    }).catch((error) => {
        next(error);
    });
}

/* GET users by role id. */
exports.getUserByRoleId = function (req, res, next) {
    UserService.getUserByRoleId(req.params.roleId, req.pagination).then((users) => {
        return res.status(200).json({ status: 200, data: Pagination.generateResponse(users, req.pagination) });
    }).catch((error) => {
        next(error);
    });
}

/* CREATE user. */
exports.createUser = function (req, res, next) {
    UserService.createUser(req.body).then((user) => {
        return res.status(200).json({ status: 200, data: user });
    }).catch((error) => {
        next(error);
    });
}

/* UPDATE user */
exports.updateUser = function (req, res, next) {
    UserService.updateUser(req.params.id, req.body).then((user) => {
        return res.status(200).json({ status: 200, data: user });
    }).catch((error) => {
        next(error);
    });
}

/* DELETE appointments. */
exports.deleteUser = function (req, res, next) {
    AppointmentService.deleteUser(req.params.userId).then(function (user) {
      if (user > 0) {
        res.send("ok");
      } else {
        res.status(404).send("not found");
      }
    }).catch(function (error) {
      next(error);
    });
  }

exports.getUsersPendingDelete = function (req, res, next) {
    UserService.getUserForDelete(req.pagination).then((users) => {
        return res.status(200).json({ status: 200, data: Pagination.generateResponse(users, req.pagination) });
    }).catch((error) => {
        next(error);
    });
}

exports.getLogedUser = function(req, res, next) {
    res.send(req.user)
}

exports.login = (req, res, next) => {
    passport.authenticate("login", { session: false }, (error, user) => {
        //si hubo un error en el callback verify relacionado con la consulta de datos de usuario
        if (error || !user) {
            next(createError(403,"username or password not correct."))
        }else {
            const payload = {
                sub: user.id,
                username: user.username
            };

            /* NOTA: Si estuviesemos usando sesiones, al usar un callback personalizado, 
            es nuestra responsabilidad crear la sesión.
            Por lo que deberiamos llamar a req.logIn(user, (error)=>{}) aquí*/

            /*solo inficamos el payload ya que el header ya lo crea la lib jsonwebtoken internamente
            para el calculo de la firma y así obtener el token*/
            const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET || 'secret', {algorithm: process.env.JWT_ALGORITHM ||'HS256'});
            res.json({ data: { token: token } });
        }
    })(req, res, next);
}