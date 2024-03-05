import { all, put, takeLatest } from 'redux-saga/effects'

import {
  GET_FORM_DATA,
  getFormData,
  SET_FORM_DATA,
  setFormData
} from './actions'

export function SetFormData({ payload }) {
  put(setFormData(payload.data))
}

export function GetFormData() {
  put(getFormData())
}

export default all([
  takeLatest(SET_FORM_DATA, SetFormData),
  takeLatest(GET_FORM_DATA, GetFormData)
])
