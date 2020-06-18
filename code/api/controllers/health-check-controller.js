const { healthCheck } = require('../services');

class HealthCheckController {
  static async healthCheck(req, res, next) {
    try {
      const result = await healthCheck.get();
      res.status(200).json(result);
    } catch (e) {
      console.log('Failed to get healthcheck: ', e);
      next(e);
    }
  }
}

module.exports = HealthCheckController;
