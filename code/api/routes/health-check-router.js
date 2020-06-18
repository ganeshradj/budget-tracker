const express = require('express');

const router = new express.Router();
const HealthCheckController = require('../controllers/health-check-controller');

/**
 * /health-check:
 *  get:
 *     summary: Determines the availability of the microservice and it's dependencies.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: '#/definitions/healthCheckResponse'
 */
router.get('/', HealthCheckController.healthCheck);

module.exports = router;
