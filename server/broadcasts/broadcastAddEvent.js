import { ADD } from 'client/constants/redux/events'
import broadcast from 'server/broadcasts/broadcast'

/**
 * Is responsible for broadcasting a new event
 */
const broadcastAddEvent = async (io, event) =>
  broadcast(io, event, ADD)

export default broadcastAddEvent
