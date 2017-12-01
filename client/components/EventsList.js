import React from 'react'
import { array, object } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

import Event from 'client/components/Event'

const propTypes = {
  events: array.isRequired,
  classes: object.isRequired,
}

const styleSheet = {
  container: {},
}

/*
 * Is responsible for rendering all events
 */
const EventsList = ({ events, classes }) => (
  <Grid container direction="column">
    {!events.length && (
      <Typography>
        Events from addresses being watched will be displayed here.
      </Typography>
    )}
    {events.map(event => (
      <Event {...{ event }} key={event.data} />
    ))}
  </Grid>
)

EventsList.propTypes = propTypes

export default withStyles(styleSheet)(EventsList)
