// custom middleware for error handling

// 404 route not found
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

// error handler
const errorHandler = (err, req, res, next) => {
  // conditional if there is an error with 200 OK response. If so change to 500 response (server error).
  // if the response status code is 200 with an error output 500 response code, else output the response code as is
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  // allow this error to show only in development mode, not production. This is the stack trace. 
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

export { notFound, errorHandler }
