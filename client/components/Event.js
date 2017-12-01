import React from 'react'
import { object, shape, string } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

const propTypes = {
  classes: object.isRequired,
  event: shape({
    from: string.isRequired,
    to: string.isRequired,
    value: string.isRequired,
  }).isRequired,
}

const styleSheet = {
  container: {},
}

/*
 * Is responsible for rendering an event
 */
const Event = ({ event, classes }) => (
  <Grid container>
    <Grid item>
      <Typography>
        {`From: ${event.from}`}
      </Typography>
    </Grid>
    <Grid item>
      <Typography>
        {`To: ${event.to}`}
      </Typography>
    </Grid>
    <Grid item>
      <Typography>
        {`Value: ${event.value}`}
      </Typography>
    </Grid>
  </Grid>
)

Event.propTypes = propTypes

export default withStyles(styleSheet)(Event)
