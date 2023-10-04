const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

console.log(HOST)
console.log(PORT)