/**
 * Is responsible for returning an Error of validation type.
 */
const createValidationError = (key, message) => {
  const error = new Error(message)
  error.errors = { [key]: message }
  error.name = 'ValidationError'
  return error
}

export default createValidationError
