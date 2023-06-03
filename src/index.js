const { config } = require('dotenv')
const express = require('express')
const app = express()

config({
  path: ".env",
});

const { 
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
 } = process.env

const PORT = process.env.PORT || '8000'
const sequelize = require('sequelize')

const database = new sequelize.Sequelize({
  dialect: 'postgres',
  host: 'database',
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
})

database.sync({
  force: true
})


app.listen(PORT, () => console.log(`server on port ${PORT}`))