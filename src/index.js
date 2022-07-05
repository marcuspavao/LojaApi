const router = require('./routes/index')
const express = require('express')
const app = express()
//const cors = require('cors')
require('dotenv').config()

console.log(process.env.API)

const port = 3000

app.use(express.urlencoded({extended: true,}),)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", 'http://localhost:8080')
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    res.header("Access-Control-Allow-Headers", "*")
    //app.use(cors())
    next()
})
app.use(express.json())

app.use('/', router)

app.listen(port, () => {console.log(`App rodando na porta:${port}`)})