import { ADD } from 'client/constants/redux/events'
import initialState from 'client/initialState'

const eventsReducer = (state = initialState.events, action) => {
  switch (action.type) {
    case ADD: {
      return [...state, action.payload]
    }
    default:
      return state
  }
}

export default eventsReducer
