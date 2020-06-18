const { version: VERSION } = require('../package.json');

class PingController {
  static ping(req, res, next) {
    res.status(200).json({ status: VERSION });
  }
}

module.exports = PingController;
