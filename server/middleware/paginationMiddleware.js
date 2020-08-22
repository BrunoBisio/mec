
exports.paginationMiddleware = function (req, res, next) {
  const param = req.query;
  let offset = 0;
  let limit = 30;
  if (param.offset > 0) {
    offset = parseInt(param.offset);
  }
  if (param.limit > 0 && param.limit < 100) {
    limit = parseInt(param.limit);
  }
  req.pagination = {
    limit: limit,
    offset: offset
  };
  next();
}