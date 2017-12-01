import React from 'react'
import { array, func, object } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

import Address from 'client/components/Address'

const propTypes = {
  addresses: array.isRequired,
  classes: object.isRequired,
  onLoad: func.isRequired,
  onRemoveClick: func.isRequired,
}

const styleSheet = {
  heading: {
    marginBottom: '10px',
  },
}

/*
 * Is responsible for rendering all addresses which are watched
 */
class AddressesList extends React.Component {
  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    const { addresses, classes, onRemoveClick } = this.props
    return (
      <Grid container direction="column">
        <Typography className={classes.heading} type="title">
          Watched addresses
        </Typography>
        {!addresses.length && (
          <Typography>
            Add some addresses to watch their events
          </Typography>
        )}
        {addresses.map((address) => (
          <Grid item key={address}>
            <Address {...{ address, onRemoveClick }} />
          </Grid>
        ))}
      </Grid>

    )
  }
}

AddressesList.propTypes = propTypes

export default withStyles(styleSheet)(AddressesList)
