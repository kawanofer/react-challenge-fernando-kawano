import { combineReducers } from 'redux'

import formData from './formData/reducer'

const rootReducer = () =>
  combineReducers({
    formData
  })

export default rootReducer
