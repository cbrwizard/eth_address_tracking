import { RECEIVE } from 'client/constants/redux/events'
import broadcast from 'server/broadcasts/broadcast'

/**
 * Is responsible for broadcasting a new event
 */
const broadcastReceiveEvent = async (io, event) =>
  broadcast(io, event, RECEIVE)

export default broadcastReceiveEvent
