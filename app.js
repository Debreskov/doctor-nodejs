// ! Packages that I need to install 

// * PACKAGES
// ? ==> Express
// ? ==> nodemon 
// ? ==> dotenv [.env ]
// ? ==> morgan ==> log URLs
// ? ==> express-asyc-errors
// ? ==> cors
// ? ==> mysql || mysql2 || mongoose
// ? ==> res.status(status).send http-status-codes

 const connectDB = require('./shared-services/connect')
require('dotenv').config()
require('express-async-errors')
// const { urlencoded } = require('express')
const express = require('express')
const doctorRoute = require('./routes/doctorRoutes')
const app = express()

// ! getting port from the env file
const port = process.env.PORT || 4000

// ! BODY PARSER
// body-parser
app.use(express.json())
// app.use(express.urlencoded({extended: true}))

// route
app.use('/api/v1/doctor',doctorRoute)



// ? SERVER

app.listen(port, () => {
    console.log(`Live on : http://localhost:${port}`);
})