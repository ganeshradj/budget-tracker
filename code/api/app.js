const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const bearerToken = require('express-bearer-token');
const mountRoutes = require('./routes');

const app = express();
app.use(cors());

//app.use(cors({ exposedHeaders: EXPOSED_HEADERS }));
app.use(compression());
app.use(helmet());
app.use(bearerToken());
app.use(bodyParser.json());
// Mount all API related routes
mountRoutes(app);

// Global error handler
app.use(function(err, req, res, next) {
  console.log('Error: ', JSON.stringify(err.stack));
  res.status(500).send();
});

module.exports = app;
