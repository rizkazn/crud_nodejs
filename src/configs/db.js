const { Sequelize } = require("sequelize")


const orm = new Sequelize({
    username : process.env.DB_USER,
    database : process.env.DB_NAME,
    password : process.env.DB_PASS,
    host : process.env.DB_HOST,
    port : 5432,
    dialect : "postgres",
    logging : false
})

module.exports = orm 