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
  text: {
    color: '#fff',
  },
}

/*
* Is responsible for rendering the main question.
*/
const Question = ({ classes, intl }) => (
  <Typography className={classes.text} type="display1">
    {intl.formatMessage({ id: 'app.text.question' })}
  </Typography>
)

Question.propTypes = propTypes

export default withStyles(styleSheet)(injectIntl(Question))
