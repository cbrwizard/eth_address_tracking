import { ADD } from 'client/constants/redux/events'

/*
 * Is responsible for handling the interaction with events.
 */
export const add = event => ({
  payload: event,
  type: ADD,
})

