const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'Takoyaki99',
  host: 'localhost',
  port: 5433, // default Postgres port
  database: 'buatchallenge'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};


