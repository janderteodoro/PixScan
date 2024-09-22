const successResponse = ({ response, data = {}, message = 'Success', statusCode = 200 }) => {
  response.status(statusCode).json({
    status: statusCode,
    success: true,
    message,
    data
  })
}

const errorResponse = ({ response, error = 'Something went wrong', statusCode = 500 }) => {
  response.status(statusCode).json({
    status: statusCode,
    success: false,
    error
  })
}

module.exports = {
  successResponse,
  errorResponse,
}