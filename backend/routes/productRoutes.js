import express from 'express'
import asyncHandler from 'express-async-handler'
// bring in router method to use to create routes
const router = express.Router()
// bring in Product model
import Product from '../models/productModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public (anyone can hit it)
// API route for products JSON data
router.get(
  '/',
  asyncHandler(async (req, res) => {
    // go into the Product model, find everything using an empty object {}. This returns a Promise (because all Mongoose methods return promises), thus use async/await syntax
    const products = await Product.find({})
    res.json(products)
  })
)

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
// route for single product by dynamic id parameter
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    // req.params.id gives us the unique id in the URL
    const product = await Product.findById(req.params.id)

    // check to ensure there is a product, if not return an error
    if (product) {
      // return product
      res.json(product)
    } else {
      // set error message to 404 and throw new error
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

export default router
