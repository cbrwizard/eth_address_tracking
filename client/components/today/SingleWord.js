import React from 'react'
import { bool, number, object, string } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { injectIntl, intlShape } from 'react-intl'
import Typography from 'material-ui/Typography'

import VoteResults from './VoteResults'
import { MOBILE_WIDTH } from '../../constants/styling'

const propTypes = {
  canVoteToday: bool.isRequired,
  classes: object.isRequired,
  intl: intlShape.isRequired,
  isLoading: bool.isRequired,
  noCount: number,
  percentVoted: string.isRequired,
  yesCount: number,
}
const defaultProps = {
  noCount: 0,
  yesCount: 0,
}

const styleSheet = {
  text: {
    [`@media only screen and (max-width: ${MOBILE_WIDTH}px)`]: {
      fontSize: '10rem',
      margin: '-40px 0 0',
    },
    color: '#fff',
    fontSize: '12rem',
    margin: '-25px 0 30px',
  },
}

/*
* Is responsible for rendering the answer in a form of a single word.
* TODO: rename.
*/
const SingleWord = ({
  canVoteToday,
  classes,
  intl,
  isLoading,
  percentVoted,
  noCount,
  yesCount,
}) => {
  let singleWordMessageId
  if (isLoading || noCount === yesCount) {
    singleWordMessageId = 'app.text.answer.singleWord.unknown'
  } else if (yesCount > noCount) {
    singleWordMessageId = 'app.text.answer.singleWord.yes'
  } else {
    singleWordMessageId = 'app.text.answer.singleWord.no'
  }

  return (
    <div>
      <Typography className={classes.text} type="display4">
        {intl.formatMessage({ id: singleWordMessageId })}
      </Typography>
      {!isLoading && (
        <VoteResults
          {...{
            canVoteToday,
            noCount,
            percentVoted,
            yesCount,
          }}
        />
      )}
    </div>
  )
}

SingleWord.propTypes = propTypes
SingleWord.defaultProps = defaultProps

export default withStyles(styleSheet)(injectIntl(SingleWord))
