const app = require('./app');
const config = require('./config');


// This prevents the application running twice. This is a workaround to support mocha -w
if (!module.parent) {
  app.listen(config.PORT, () => {
    console.log(`Server listening on port ${config.PORT}`);
  });
}

