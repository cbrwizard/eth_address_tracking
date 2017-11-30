import { numberOfVotesForDayAndSessionId } from 'server/queries/votes'

/**
 * Is responsible for telling whether a vote is possible for a current session.
 */
const canVoteToday = async (day, sessionId) =>
  !await numberOfVotesForDayAndSessionId(day._id, sessionId)

export default canVoteToday
