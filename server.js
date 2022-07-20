//Declare variables
const express = require('express')
const app = express()
const PORT = 8500;
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
// add model variable

//Middleware to help interpret things 
app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true},
    () => {console.log('Connected to database')}
)

app.listen(PORT, () => console.log(`Server is running on port 
${PORT} great going!`))





