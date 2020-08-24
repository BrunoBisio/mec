const passport          = require("passport");
const userService = require('../services/userService')
const CustomStrategy = require('passport-custom');
const ExtractJwt        = require('passport-jwt').ExtractJwt;
const JwtStrategy       = require('passport-jwt').Strategy;
const createError = require('http-errors');




// passport/login.js
passport.use('login', new CustomStrategy(
  function(req, done) { 
    const {docNumber, docType, password} = req.body
    return userService.login(parseInt(docNumber), docType, password).then((data) =>{
        return done(null, data);
    }
    ).catch(err => {
        return done(err, false)
    })
  }));
/** config de estrategia jwt de passport ******/
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET || 'secret';
opts.algorithms = [process.env.JWT_ALGORITHM || 'HS256'];
opts.ignoreExpiration = true

passport.use(new JwtStrategy(opts, (jwt_payload, done)=>{
    userService.getById(jwt_payload.sub)
        .then(data=>{
        if (data === null) { //no existe el usuario
            //podríamos registrar el usuario
            return done(null, false);
        }
        /*encontramos el usuario así que procedemos a devolverlo para
        inyectarlo en req.user de la petición en curso*/
        else  
            return done(null, data);
        })
        .catch(err=>done(err, null)) //si hay un error lo devolvemos
}));


exports.ensureAuthenticated = function(req,res,next) {
    passport.authenticate('jwt', {session: false}, (err, user, info)=>{
            //si hubo un error relacionado con la validez del token (error en su firma, caducado, etc)
            if(info){ return next(createError(403,info.message)); }

            //si hubo un error en la consulta a la base de datos
            if (err) { return next(err); }

            //si el token está firmado correctamente pero no pertenece a un usuario existente
            if (!user) { return next(createError(403,"You are not allowed to access.")); }
            
            //inyectamos los datos de usuario en la request
            req.user = user;
            next();
        })(req, res, next);
}
exports.passport = passport;