import React from 'react'
import { bool, number, string } from 'prop-types'

import NobodyVoted from './NobodyVoted'
import SomebodyVoted from './SomebodyVoted'

const propTypes = {
  canVoteToday: bool.isRequired,
  noCount: number.isRequired,
  percentVoted: string.isRequired,
  yesCount: number.isRequired,
}

/*
* Is responsible for rendering the vote results.
*/
const VoteResults = ({
  canVoteToday, noCount, percentVoted, yesCount,
}) => {
  if (noCount === 0 && yesCount === 0) {
    return <NobodyVoted />
  }

  return (
    <SomebodyVoted
      {...{
        canVoteToday,
        percentVoted,
      }}
    />
  )
}

VoteResults.propTypes = propTypes

export default VoteResults
