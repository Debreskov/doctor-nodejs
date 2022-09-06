const mysql = require('mysql')



const connectDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'review'
})

connectDB.connect((err) => {
    err ? console.log(err) : console.log('DB - connected')
})

module.exports = connectDB

