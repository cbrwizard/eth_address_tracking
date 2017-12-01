import Button from 'material-ui/Button'
import { blue } from 'material-ui/colors'
import Grid from 'material-ui/Grid'
import React from 'react'
import { func, object } from 'prop-types'
import { Field } from 'redux-form'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

import isEthereumAddress from 'shared/lib/isEthereumAddress'
import ReduxFormTextField from 'client/components/form/ReduxFormTextField'

const styleSheet = {
  alternative: {
    margin: '5px 0 0',
  },
  button: {
    '&:hover': {
      backgroundColor: blue[700],
    },
    backgroundColor: blue[500],
    color: '#fff',
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  },
}

const propTypes = {
  classes: object.isRequired,
  handleSubmit: func.isRequired,
}

const validateAddresses = (value) =>
  isEthereumAddress(value) ? undefined : 'Must be Ethereum address'

/*
 * Is responsible for rendering an Addresses form.
 */
const AddressesForm = ({
                         classes,
                         handleSubmit,
                       }) => (
  <form onSubmit={handleSubmit}>
    <Typography type="headline">
      Enter an ETH address to track, one at a time.
    </Typography>
    <Grid container className={classes.inputContainer}>
      <Grid item>
        <Field
          fullWidth
          name="address"
          component={ReduxFormTextField}
          label="Ethereum Address"
          type="text"
          validate={[validateAddresses]}
        />
      </Grid>
      <Grid item>
        <Button
          className={classes.button}
          type="submit"
          raised
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  </form>
)

AddressesForm.propTypes = propTypes

export default withStyles(styleSheet)(AddressesForm)
