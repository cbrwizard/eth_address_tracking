import { DAY_URL } from 'client/constants/server'
import { fetchUrl } from 'client/lib/fetch'

export const index = () =>
  fetchUrl(DAY_URL)
    .then(response => response.json())
    .catch((error) => {
      console.error(error)
      throw error
    })
