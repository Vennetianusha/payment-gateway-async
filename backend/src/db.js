const { Pool } = require("pg");

const pool = new Pool({
  host: "postgres",
  user: "gateway_user",
  password: "gateway_pass",
  database: "payment_gateway",
  port: 5432,
});

module.exports = pool;
