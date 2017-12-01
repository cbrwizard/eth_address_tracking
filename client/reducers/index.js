import { combineReducers } from 'redux'

import addressesReducer from 'client/reducers/addressesReducer'
import eventsReducer from 'client/reducers/eventsReducer'

export default combineReducers({
  addresses: addressesReducer,
  events: eventsReducer,
})
