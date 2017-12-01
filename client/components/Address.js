import React from 'react'
import { func, object, string } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

const propTypes = {
  address: string.isRequired,
  classes: object.isRequired,
  onRemoveClick: func.isRequired,
}

const styleSheet = {
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  },
}

/*
 * Is responsible for rendering an address which is being watched
 */
const Address = ({ address, classes, onRemoveClick }) => (
  <Grid container className={classes.inputContainer}>
    <Grid item>
      <Typography>
        {address}
      </Typography>
    </Grid>
    <Grid item>
      <Button raised color="accent" onClick={() => onRemoveClick(address)}>
        Stop watching
      </Button>
    </Grid>
  </Grid>
)

Address.propTypes = propTypes

export default withStyles(styleSheet)(Address)
