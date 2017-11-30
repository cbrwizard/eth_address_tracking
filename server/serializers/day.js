import { pick } from 'ramda'

const serializeDay = day => ({
  ...pick(['noCount', 'yesCount'], day),
})

export default serializeDay
