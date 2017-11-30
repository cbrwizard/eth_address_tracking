import React from 'react'
import { func, object, string } from 'prop-types'
import Grid from 'material-ui/Grid'

import SingleWord from './SingleWord'
import VoteButtons from './VoteButtons'

const propTypes = {
  day: object.isRequired,
  onLoad: func.isRequired,
  onVoteClick: func.isRequired,
  percentVoted: string,
}
const defaultProps = { percentVoted: '' }

/*
* Is responsible for rendering the main answer components.
*/
class Answer extends React.Component {
  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    const { day, onVoteClick, percentVoted } = this.props

    return (
      <Grid container direction="column">
        <Grid item>
          <SingleWord
            canVoteToday={day.canVoteToday}
            isLoading={day.isLoading}
            noCount={day.record.noCount}
            yesCount={day.record.yesCount}
            {...{ percentVoted }}
          />
        </Grid>
        <Grid item>
          {!day.isLoading &&
            day.canVoteToday && <VoteButtons {...{ onVoteClick }} />}
        </Grid>
      </Grid>
    )
  }
}

Answer.propTypes = propTypes
Answer.defaultProps = defaultProps

export default Answer
