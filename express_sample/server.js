const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

console.log(HOST)
console.log(PORT)

const app = express()

app.get('/', (req, res) => {
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    res.send('Hello!!!!!!!')
})

app.listen(PORT, HOST, () => {
    console.log(HOST)
    console.log(PORT)
    console.log('wait...')
})