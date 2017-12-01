import { ADDRESSES_URL } from 'client/constants/server'
import { checkForFailedResponse, fetchJSON, fetchUrl } from 'client/lib/fetch'

export const index = () =>
  fetchUrl(ADDRESSES_URL)
    .then(response => response.json())
    .catch((error) => {
      console.error(error)
      throw error
    })

export const post = values =>
  fetchJSON(ADDRESSES_URL, JSON.stringify(values), {
    method: 'POST',
  })
    .then(checkForFailedResponse)
    .then(response => response.json())
    .catch((error) => {
      console.error(error)
      throw error
    })

export const del = values =>
  fetchJSON(ADDRESSES_URL, JSON.stringify(values), {
    method: 'DELETE',
  })
    .then(checkForFailedResponse)
    .then(response => response.json())
    .catch((error) => {
      console.error(error)
      throw error
    })
