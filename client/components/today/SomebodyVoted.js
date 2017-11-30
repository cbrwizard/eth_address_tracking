import React from 'react'
import { bool, object, string } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { injectIntl, intlShape } from 'react-intl'
import Typography from 'material-ui/Typography'

const propTypes = {
  canVoteToday: bool.isRequired,
  classes: object.isRequired,
  intl: intlShape.isRequired,
  percentVoted: string.isRequired,
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
* Is responsible for rendering the vote results when somebody voted.
*/
const SomebodyVoted = ({
  canVoteToday, classes, intl, percentVoted,
}) => {
  const voteTooMessageId = canVoteToday
    ? 'app.text.answer.voteToo'
    : 'app.text.answer.voteTomorrow'
  const webVotedMessageId =
    Number(percentVoted) === 50
      ? 'app.text.answer.webVotedEqually'
      : 'app.text.answer.webVoted'

  return (
    <div>
      <Typography className={classes.note} type="subheading" component="h2">
        {intl.formatMessage(
          {
            id: webVotedMessageId,
          },
          {
            percentVoted,
          }
        )}
      </Typography>
      <Typography className={classes.join} type="subheading">
        {intl.formatMessage({ id: voteTooMessageId })}
      </Typography>
    </div>
  )
}

SomebodyVoted.propTypes = propTypes

export default withStyles(styleSheet)(injectIntl(SomebodyVoted))
