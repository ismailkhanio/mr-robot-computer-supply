// this is the common js syntax, there is more updated ES6 module that will be refactored later.
const express = require('express')
const products = require('./data/products')

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

// create listen to the server
app.listen(5000, console.log('Server running on port 5000'))
