import mongoose from 'mongoose'

// create schema w/ Mongoose, and a pass in an object that will define all the fields for a user
const userSchema = mongoose.Schema(
  {
    // required: must have input data.
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      // to ensure that multiple users aren't made with the same email address
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      // when a user registers, they are not by default an admin
      default: false,
    },
  },
  {
    // this object is a secondary argument of options. Mongoose is used to complete added options easily

    //  adds a 'created at' and 'updated at' data for the user via Mongoose
    timestamps: true,
  }
)

// Create model based on the schema above w/ Mongoose
const User = mongoose.model('User', userSchema)

export default User
