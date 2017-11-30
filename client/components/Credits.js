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
  container: {
    padding: '0 5px',
  },
  link: {
    '&:hover': {
      color: '#ccc',
    },
    color: '#fff',
  },
  text: {
    color: '#ccc',
  },
}

/*
* Is responsible for rendering the credits.
* TODO: localize text, pass links as constants.
*/
const Credits = ({ classes, intl }) => (
  <div className={classes.container}>
    <Typography className={classes.text} type="caption">
      {intl.formatMessage({ id: 'app.text.takeCare' })}
    </Typography>
    <Typography className={classes.text} type="caption">
      {intl.formatMessage({ id: 'app.text.contact' })}
      <a className={classes.link} href="mailto:cbrwizard@protonmail.com">
        cbrwizard@protonmail.com
      </a>.
    </Typography>
    <Typography className={classes.text} type="caption">
      Made by{' '}
      <a className={classes.link} href="http://cbrwizard.com/">
        cbrwizard
      </a>. Get code{' '}
      <a
        className={classes.link}
        href="https://github.com/cbrwizard/shouldibuybitcoin.today"
      >
        on Github
      </a>{' '}
      and follow me{' '}
      <a className={classes.link} href="https://twitter.com/cbrwizard">
        on Twitter
      </a>{' '}
      for updates.
    </Typography>
  </div>
)

Credits.propTypes = propTypes

export default withStyles(styleSheet)(injectIntl(Credits))
