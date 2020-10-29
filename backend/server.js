import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import colors from 'colors'
import mongoose from 'mongoose'
import productRoutes from './routes/productRoutes.js'

// run dotenv config method before initalizing server
dotenv.config()

// connect to mongoDB function
connectDB()

// namespace express server to app
const app = express()

// create get request to the server
app.get('/', (req, res) => {
  res.send('API is running...')
})

// link url /api/products to productRoutes.js
app.use('/api/products', productRoutes)

// fallback for 404 errors (anything that isn't a route)
app.use(notFound)

// custom middleware for error handling
app.use(errorHandler)

// use port from .env file
const PORT = process.env.PORT || 5000

// listen to the server from the port in .env
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
