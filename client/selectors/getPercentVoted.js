import { isEmpty } from 'ramda'
import { createSelector } from 'reselect'

const getDay = state => state.app.day

const getPercentVoted = createSelector([getDay], (day) => {
  let percentVoted = null
  if (!isEmpty(day)) {
    const { noCount, yesCount } = day.record
    const sum = noCount + yesCount
    percentVoted = (Math.max(noCount, yesCount) / sum * 100).toFixed(2)
  }
  return percentVoted
})

export default getPercentVoted
