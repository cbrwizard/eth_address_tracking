import { ADD, REMOVE, SET } from 'client/constants/redux/addresses'

/*
 * Is responsible for handling the interaction with addresses.
 */
export const add = address => ({
  payload: address,
  type: ADD,
})

export const remove = address => ({
  payload: address,
  type: REMOVE,
})

export const set = addresses => ({
  payload: addresses,
  type: SET,
})
