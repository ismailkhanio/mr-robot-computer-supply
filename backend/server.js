// this is the common js syntax, there is more updated ES6 module that will be refactored later.
const express = require('express')
const dotenv = require('dotenv')
const products = require('./data/products')

dotenv.config()

const app = express()

// create get request to the server
app.get('/', (req, res) => {
  res.send('API is running...')
})

// API route for products JSON data
app.get('/api/products', (req, res) => {
  res.json(products)
})

// route for single product by dynamic id parameter
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

// use port from .env file
const PORT = process.env.PORT || 5000

// listen to the server from the port in .env
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
