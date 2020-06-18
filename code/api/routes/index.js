const pingRouter = require('./ping-router');
const healthCheck = require('./health-check-router');
const balanceRouter = require('./balance-router');
const transactionRouter = require('./transaction-router');


const mountRoutes = app => {
  app.use(function(req, res, next) {
    const { 'x-correlation-id': correlationId } = req.headers;
    res.unauthorizedRequest = function() {
      const { type, details } = AM_ERROR_RESPONSE;
      return res.status(403).send({ type, correlationId, details });
    };
    next();
  });

  app.use(`/api/ping`, pingRouter);
  app.use(`/api/health-check`, healthCheck);
  app.use(`/api/balance`, balanceRouter);
  app.use(`/api/transaction`, transactionRouter);

};

module.exports = mountRoutes;
