import React from 'react'
import { bool, func, object } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { injectIntl, intlShape } from 'react-intl'
import Button from 'material-ui/Button'

const propTypes = {
  classes: object.isRequired,
  intl: intlShape.isRequired,
  onClick: func.isRequired,
  positive: bool,
}
const defaultProps = {
  positive: false,
}
const styleSheet = {
  button: {
    '&:hover': {
      backgroundColor: '#1f1f1f',
    },
    backgroundColor: '#333',
    border: '1px solid #fff',
    color: '#fff',
  },
}

/*
* Is responsible for rendering a single vote button.
*/
const VoteButton = ({
  classes, intl, onClick, positive,
}) => {
  const messageId = positive ? 'app.forms.vote.yes' : 'app.forms.vote.no'

  return (
    <Button
      className={classes.button}
      onClick={() => onClick(positive)}
      raised
    >
      {intl.formatMessage({ id: messageId })}
    </Button>
  )
}

VoteButton.propTypes = propTypes
VoteButton.defaultProps = defaultProps

export default injectIntl(withStyles(styleSheet)(VoteButton))
