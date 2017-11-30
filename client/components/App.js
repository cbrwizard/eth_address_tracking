import React from 'react'
import { object } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'

import AddressesFormContainer from 'client/containers/AddressesFormContainer'

const propTypes = {
  classes: object.isRequired,
}

const styleSheet = {
  container: {
    margin: 0,
    minHeight: '100vh',
    textAlign: 'center',
    width: '100%',
  },
}

/*
 * Is responsible for rendering the main components.
 */
const App = classes => (
  <Grid className={classes.container} container direction="column">
    <Grid className={classes.question} component="header" item>
      <AddressesFormContainer />
    </Grid>
  </Grid>
)

App.propTypes = propTypes

export default withStyles(styleSheet)(App)
