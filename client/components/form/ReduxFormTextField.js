import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

const { object, string, shape, bool } = PropTypes
const propTypes = {
  input: object.isRequired,
  label: string,
  meta: shape({
    error: string,
    touched: bool,
  }).isRequired,
}
const defaultProps = {
  label: '',
}

/*
 * Is responsible for rendering a MUI's TextField inside a RF's Field.
 */
const ReduxFormTextField = ({
  input,
  label,
  meta: { touched, error },
  ...other
}) => (
  <TextField
    error={touched && !!error}
    {...input}
    {...other}
    label={(touched && error) || label}
  />
)

ReduxFormTextField.propTypes = propTypes
ReduxFormTextField.defaultProps = defaultProps

export default ReduxFormTextField
