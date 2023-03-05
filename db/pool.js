const { Pool } = require('pg')
// const dotenv = require('dotenv')

require('dotenv').config()

const db_config={

  password:'postgres',

  connectionTimeoutMillis: 300,
 
  idleTimeoutMillis: 200,
 
  max: 10,
 
  connectionString:process.env.DATABASE_URL
    
}

const pool = new Pool(db_config)


pool.on('connect', (client) => {
    console.log("Database Connected")
})

pool.on('remove', (client) => {
    console.log("Database Disconnected")
})

module.exports = pool