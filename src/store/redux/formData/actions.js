export const SET_FORM_DATA = '@user/SET_FORM_DATA'
export const GET_FORM_DATA = '@user/GET_FORM_DATA'

export function setFormData(data) {
  return {
    type: SET_FORM_DATA,
    payload: { data }
  }
}

export function getFormData(data) {
  return {
    type: GET_FORM_DATA,
    payload: data
  }
}
