/**
 * A helper function, is responsible for broadcasting something to the client.
 */
const broadcast = async (io, payload, type) =>
  io.broadcast('action', { payload, type })

export default broadcast
