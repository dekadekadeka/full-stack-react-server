const { Pool } = require('pg');

const pool = new Pool({
    user: 'deka',
    host: 'localhost',
    database: 'data1',
    password: '',
    port: 5432
})

module.exports = pool;