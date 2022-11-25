// KONEKSI KE POSTGRESQL

// deklare library
const pg = require('pg')
const {
  DB_HOSTNAME,
  PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME
} = require('../helper/env');
const db = new pg.Pool({
  host: DB_HOSTNAME,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: PORT,
})

// cek koneksi
db.connect((err) => {
  if (err) {
    console.log(err)
  }
})

module.exports = db
