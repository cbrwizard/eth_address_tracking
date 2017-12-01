import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import React from 'react'
import { func, object } from 'prop-types'
import { Field } from 'redux-form'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import ethereumAddress from 'ethereum-address'

import ReduxFormTextField from 'client/components/form/ReduxFormTextField'

const styleSheet = {
  alternative: {
    margin: '5px 0 0',
  },
  button: {
    margin: '2px',
  },
  form: {
    width: '400px',
  },
}

const propTypes = {
  classes: object.isRequired,
  handleSubmit: func.isRequired,
}

const validateAddresses = (value) =>
  ethereumAddress.isAddress(value) ? undefined : 'Must be Ethereum address'


/*
 * Is responsible for rendering an Addresses form.
 */
const AddressesForm = ({
                         classes,
                         handleSubmit,
                       }) => (
  <form onSubmit={handleSubmit} className={`${classes.form} h-center-text`}>
    <Typography type="display3">
      Enter an address to track, one at a time.
    </Typography>
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
      <Button color="accent" className={classes.button} type="submit" raised>
        Submit
      </Button>
    </Grid>
  </form>
)

AddressesForm.propTypes = propTypes

export default withStyles(styleSheet)(AddressesForm)
