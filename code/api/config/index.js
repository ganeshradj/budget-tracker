const { version: VERSION } = require('../package.json');
const dbConfig = require('./db-config.js');

module.exports = {
    PORT: process.env.SERVER_PORT || 3004,
    VERSION: process.env.APPLICATION_VERSION || VERSION,
    // DB Config
    DB: dbConfig,
};
