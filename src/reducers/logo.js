import { SHOPS_PRESTATIONS_RECEIVED } from "../actions/actions"

const initialState = {}

const logo = (prevState = initialState, action) => {
  if (action.type === SHOPS_PRESTATIONS_RECEIVED) {
    return action.response.logo
  }
  return prevState
}

export default logo
