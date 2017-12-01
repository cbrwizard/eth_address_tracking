import React from 'react'
import { array, func, object } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

import Address from 'client/components/Address'

const propTypes = {
  addresses: array.isRequired,
  classes: object.isRequired,
  onRemoveClick: func.isRequired,
}

const styleSheet = {
  container: {},
}

/*
 * Is responsible for rendering all addresses which are watched
 */
const AddressesList = ({ addresses, classes, onRemoveClick }) => (
  <Grid container direction="column">
    {!addresses.length && (
      <Typography>
        Addresses being watched will be displayed here.
      </Typography>
    )}
    {addresses.map((address) => (
      <Grid item key={address}>
        <Address {...{ address, onRemoveClick }} />
      </Grid>
    ))}
  </Grid>
)

AddressesList.propTypes = propTypes

export default withStyles(styleSheet)(AddressesList)
