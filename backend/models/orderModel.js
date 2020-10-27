import mongoose from 'mongoose'

// create schema w/ Mongoose, and a pass in an object that will define all the fields for a user
const orderSchema = mongoose.Schema(
  {
    // user that buys the product
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // ref User model
      ref: 'User',
    },
    // an array of order items that will have quantity, name, price, etc.
    orderItems: [
      {
        // these are embedded objects of data
        name: { type: String, required: true },
        qty: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: String, required: true },
        // an objectID linked to the product model. Order has a relationship to the product
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    // setup for paypal gateway but setup easily for scalability to other payment platforms
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      // this data will come from paypal, outputs message about success/failure of payment
      id: { type: String },
      // to know if it's paid or not
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaidValue: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

// Create model based on the schema above w/ Mongoose
const Order = mongoose.model('Order', orderSchema)

export default Order
