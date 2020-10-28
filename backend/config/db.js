// this is the db configuration file
import mongoose from 'mongoose'


const connectDB = async () => {
  try {
    // set const to await MongoDB promise connection, using the connection string saved in .env
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // these are options Mongoose provides for custom config of DB
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    // console error message
    console.error(`Error: ${error.message}`.red.bold)
    // exists the connect. (1) means it will exit with failure
    process.exit(1)
  }
}

export default connectDB
