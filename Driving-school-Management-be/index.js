// console.log("hai ");
const routes=require('./Router/router')//import router
require('dotenv').config()
const express = require('express')
require('./DB/connection')
const bodyParser=require("body-parser")
const cookieParser=require("cookie-parser")
const cors=require("cors")
const app = express()//server
app.use(express.json())
app.use(cors())
app.use(routes)
const port = 3000
app.get('/', (req, res) => {
res.send('Hello World!')
})
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

//const mongoose=require("mongoose")

