import React from 'react'
import { object } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { injectIntl, intlShape } from 'react-intl'
import Typography from 'material-ui/Typography'

const propTypes = {
  classes: object.isRequired,
  intl: intlShape.isRequired,
}
const styleSheet = {
  join: {
    color: '#fff',
    margin: '10px 0 0',
  },
  note: {
    color: '#ccc',
  },
}

/*
* Is responsible for rendering the vote results when nobody voted.
*/
const NobodyVoted = ({ classes, intl }) => (
  <div>
    <Typography className={classes.note} type="subheading" component="h2">
      {intl.formatMessage({
        id: 'app.text.answer.nobodyVoted',
      })}
    </Typography>
    <Typography className={classes.join} type="subheading">
      {intl.formatMessage({ id: 'app.text.answer.voteFirst' })}
    </Typography>
  </div>
)

NobodyVoted.propTypes = propTypes

export default withStyles(styleSheet)(injectIntl(NobodyVoted))
