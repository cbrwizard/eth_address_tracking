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
  container: {
    borderBottom: '1px solid #ddd',
    margin: 0,
    padding: '0 0 20px',
  },
}

/*
 * Is responsible for rendering an event
 */
const Event = ({ event, classes }) => (
  <Grid container className={classes.container} direction="column">
    <Grid item>
      <Typography>
        <b>
          From:
        </b>
        {' '}
        {event.from}
      </Typography>
    </Grid>
    <Grid item>
      <Typography>
        <b>
          To:
        </b>
        {' '}
        {event.to}
      </Typography>
    </Grid>
    <Grid item>
      <Typography>
        <b>
          Value:
        </b>
        {' '}
        {event.value}
      </Typography>
    </Grid>
  </Grid>
)

Event.propTypes = propTypes

export default withStyles(styleSheet)(Event)
