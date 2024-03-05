import { all } from 'redux-saga/effects'

import formData from './formData/sagas'

export default function*rootSaga() {
  return yield all([formData])
}
