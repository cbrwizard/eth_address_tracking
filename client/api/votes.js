import { VOTES_URL } from 'client/constants/server'
import { fetchJSON } from 'client/lib/fetch'

export const post = values =>
  fetchJSON(VOTES_URL, JSON.stringify(values), {
    method: 'POST',
  })
    .then(response => response.json())
    .catch((error) => {
      console.error(error)
      throw error
    })
