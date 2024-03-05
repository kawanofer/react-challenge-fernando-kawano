import produce from 'immer'

import { GET_FORM_DATA, SET_FORM_DATA } from './actions'

const INITIAL_STATE = {
  formData: { firstName: 'Breaking', lastName: 'Bad' }
}

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_FORM_DATA: {
        draft.formData = action.payload.data
        break
      }
      case GET_FORM_DATA: {
        draft.formData = action.payload
        break
      }
      default:
    }
  })
}
