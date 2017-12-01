import React from 'react'
import { object } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'

import AddressesFormContainer from 'client/containers/AddressesFormContainer'
import AddressesListContainer from 'client/containers/AddressesListContainer'
import EventsListContainer from 'client/containers/EventsListContainer'

const propTypes = {
  classes: object.isRequired,
}

const styleSheet = {
  appContainer: {
    margin: '0 auto',
    maxWidth: '600px',
    minHeight: '100vh',
    textAlign: 'center',
    width: '100%',
  },
  block: {
    margin: '15px 0',
  },
}

/*
 * Is responsible for rendering the main components.
 */
const App = ({ classes }) => (
  <Grid className={classes.appContainer} container direction="column">
    <Grid className={classes.block} item>
      <AddressesFormContainer />
    </Grid>
    <Grid className={classes.block} item>
      <AddressesListContainer />
    </Grid>
    <Grid className={classes.block} item>
      <EventsListContainer />
    </Grid>
  </Grid>
)

App.propTypes = propTypes

export default withStyles(styleSheet)(App)
