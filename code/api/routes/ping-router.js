const express = require('express');

const router = new express.Router();
const PingController = require('../controllers/ping-controller');

/**
 * /ping:
 *  get:
 *     summary: Determines the availability of the api.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: '#/definitions/pingResponse'
 * */
router.get('/', PingController.ping);

module.exports = router;
