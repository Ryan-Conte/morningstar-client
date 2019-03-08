const sqlite3 = require('sqlite3').verbose();

var query = new sqlite3.Database('./DB/morningstar.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.')
  });

module.exports = {
    query,
};
  