import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const Persist = (reducers) => {
  return persistReducer(
    {
      key: 'formData',
      storage
    },
    reducers
  )
}

export default Persist
