module.exports = {
    // Database
    DB_CONNECTION:
      process.env.DB_CONNECTION ||
      'postgres://postgres:postgres@localhost:5432/budget-tracker',
  };
  