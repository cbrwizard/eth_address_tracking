import React from 'react'
import { func, object } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'

import VoteButton from './VoteButton'

const propTypes = {
  classes: object.isRequired,
  onVoteClick: func.isRequired,
}
const styleSheet = {
  container: {
    margin: '0 auto',
    width: '250px',
  },
}

/*
* Is responsible for rendering the vote buttons together.
*/
const VoteButtons = ({ classes, onVoteClick }) => (
  <Grid className={classes.container} container>
    <Grid item xs>
      <VoteButton onClick={onVoteClick} positive />
    </Grid>
    <Grid item xs>
      <VoteButton onClick={onVoteClick} />
    </Grid>
  </Grid>
)

VoteButtons.propTypes = propTypes

export default withStyles(styleSheet)(VoteButtons)
