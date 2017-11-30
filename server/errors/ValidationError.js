const createValidationError = (message) => {
  const error = new Error(message)
  error.name = 'ValidationError'
  return error
}

export default createValidationError
