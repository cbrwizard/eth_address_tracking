import React from 'react'
import { array, object } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

import Event from 'client/components/Event'

const propTypes = {
  classes: object.isRequired,
  events: array.isRequired,
}

const styleSheet = {
  heading: {
    marginBottom: '10px',
  },
}

/*
 * Is responsible for rendering all events
 */
const EventsList = ({ events, classes }) => (
  <Grid container direction="column">
    <Typography className={classes.heading} type="title">
      Events
    </Typography>
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
