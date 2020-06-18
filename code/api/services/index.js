const {
    VERSION,
    DB: { DB_CONNECTION },
    
  } = require('../config');
  
  // Result constants
  const typeService = 'service';
  const typeDatabase = 'database';
  const statusSuccess = 'success';
  const statusFailure = 'failure';
  
  const healthCheck = {
    async get() {
      
    },
  };
  
  module.exports = healthCheck;
  