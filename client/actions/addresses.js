import { ADD, APPEND } from 'client/constants/redux/addresses'

/*
 * Is responsible for handling the interaction with addresses.
 */
export const add = address => ({
  payload: address,
  type: ADD,
})

export const append = address => ({
  payload: address,
  type: APPEND,
})
