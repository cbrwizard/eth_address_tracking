// TODO: this shouldn't be in client anymore duh.
import { SET_DAY } from 'client/constants/redux/day'
import broadcast from 'server/broadcasts/broadcast'

/**
 * Is responsible for broadcasting a current Day.
 */
const broadcastSetDay = async (io, day) =>
  broadcast(io, day, SET_DAY)

export default broadcastSetDay
