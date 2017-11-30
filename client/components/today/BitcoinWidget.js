import React from 'react'
import { bool, object } from 'prop-types'
import { withStyles } from 'material-ui/styles'

import { MOBILE_WIDTH } from '../../constants/styling'

const BITCOIN_WIDGET_SRC =
  'https://bitcoinium.com/assets/js/bitcoinium-widget-min.js'

const propTypes = {
  classes: object.isRequired,
  isNode: bool.isRequired,
}
const styleSheet = {
  bitcoin: {
    [`@media only screen and (max-width: ${MOBILE_WIDTH}px)`]: {
      margin: '10px auto 0',
      position: 'relative',
      right: 0,
      top: 0,
    },
    border: '1px solid #2e2e2e',
    minHeight: '140px',
    position: 'absolute',
    right: '10px',
    top: '10px',
    width: '210px',
  },
}

/**
 * Is responsible for rendering a Bitcoin widget.
 * @note: first the tag must be rendered, then the script should be downloaded.
 */
class BitcoinWidget extends React.Component {
  componentWillMount() {
    if (!this.props.isNode) {
      const script = document.createElement('script')

      script.src = BITCOIN_WIDGET_SRC
      script.async = true

      document.body.appendChild(script)
    }
  }

  render() {
    const { classes } = this.props

    return (
      <div
        id="bitcoinium-widget"
        className={classes.bitcoin}
        widget-coin="BTC"
        widget-align="center"
        widget-size="small"
        widget-initial-pair="BTC_BITSTAMP_USD"
      />
    )
  }
}

BitcoinWidget.propTypes = propTypes

export default withStyles(styleSheet)(BitcoinWidget)
