/*
 * Contains functions helpful for fetching.
 */

const parseError = (error, response) => {
  const errorInstance = new Error(error.message || response.statusText)
  errorInstance.name = error.error || response.status
  errorInstance.response = response
  errorInstance.body = error
  errorInstance.details = error.details
  return errorInstance
}

export const parseResponse = (response) => {
  if (/^application\/json(;.*)?/.test(response.headers.get('Content-Type'))) {
    return response.json()
  }
  return response.text()
}

/*
 * TODO: find a more secure solution to send cookies for other domains.
 */
export const fetchUrl = (url, params = {}) =>
  fetch(url, {
    credentials: 'include',
    mode: 'cors',
    ...params,
  })

export const fetchJSON = (url, JSONData, params = {}) =>
  fetchUrl(url, {
    body: JSONData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...params,
  })

export const checkForFailedResponse = (response) => {
  const isValidRange = response.status >= 200 && response.status < 300

  if (isValidRange) { return response }

  return parseResponse(response).then((error) => { throw parseError(error, response) })
}
