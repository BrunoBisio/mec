const planService = require('../services/planService');

exports.getPlans = function (_, res, next) {
    planService.getPlans().then((values) => {
        res.send(values);
    }).catch((error) => {
        next(error);
    });
}