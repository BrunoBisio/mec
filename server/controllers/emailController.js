const EmailService = require('../services/emailService');

exports.sendEmail = function (_, res, next) {
    EmailService.sendEmail().then((info) => {
        res.send(info)
    }).catch((error) => {
        next(error);
    });
}