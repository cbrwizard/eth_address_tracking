import { connect } from 'react-redux'

// import { fetch } from 'client/actions/day'
import { create } from 'client/actions/votes'
import getPercentVoted from 'client/selectors/getPercentVoted'
import Answer from '../../components/today/Answer'

const mapStateToProps = state => ({
  day: state.app.day,
  percentVoted: getPercentVoted(state),
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
  //   dispatch(fetch())
  },
  onVoteClick: (shouldBuy) => {
    dispatch(create(shouldBuy))
  },
})

const AnswerContainer = connect(mapStateToProps, mapDispatchToProps)(Answer)

export default AnswerContainer
