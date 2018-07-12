import {
  REQUEST_LOADING,
  TIMESLOTS_RECEIVED,
  SHOPS_PRESTATIONS_RECEIVED,
  SUCCESS_RESERVATION
} from "../actions/actions"

const initialState = true

const loading = (prevState = initialState, action) => {
  if (action.type === REQUEST_LOADING) {
    return action.loading
  }
  if (
    action.type === SHOPS_PRESTATIONS_RECEIVED ||
    action.type === TIMESLOTS_RECEIVED ||
    action.type === SUCCESS_RESERVATION
  ) {
    return false
  }
  return prevState
}

export default loading
