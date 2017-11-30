import { combineReducers } from 'redux'

import addressesReducer from 'client/reducers/addressesReducer'

export default combineReducers({
  addresses: addressesReducer,
})
