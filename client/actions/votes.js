import { CREATE } from 'client/constants/redux/votes'

/*
 * Is responsible for handling the interaction with votes.
 */
export const create = shouldBuy => ({
  payload: shouldBuy,
  type: CREATE,
})
