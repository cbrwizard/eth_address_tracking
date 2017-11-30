import ReactGA from 'react-ga'

/**
 * Is responsible for returning a configured GA instance.
 */
const initializeGA = () => ReactGA.initialize(process.env.GA_TRACKING_ID)

export default initializeGA
