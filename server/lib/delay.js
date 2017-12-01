/**
 * Adapts setTimeout to Promises.
 */
const delay = duration =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, duration)
  })

export default delay
