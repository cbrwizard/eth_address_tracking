import universalAnalytics from 'universal-analytics'

/**
 * Is responsible for returning a configured GA instance for the server.
 * @note to keep the connection between client and server, a user UUID should
 * be passed here.
 */
const getGA = () => universalAnalytics(process.env.GA_TRACKING_ID)

export default getGA
