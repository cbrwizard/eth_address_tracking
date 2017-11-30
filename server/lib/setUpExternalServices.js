/**
 * Responsible for setting up all external services in a server root.
 */

import setUpRavenClient from 'server/lib/setUpRavenClient'

const setUpExternalServices = () => {
  setUpRavenClient()
}


export default setUpExternalServices
