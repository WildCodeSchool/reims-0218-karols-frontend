import { combineReducers } from "redux"

import prestations from "./prestations"
import services from "./services"
import shops from "./shops"
import reservation from "./reservation"
import genders from "./genders"
import timeSlots from "./timeSlots"
import countPeopleTable from "./countPeopleTable"
import logo from "./logo"
import { reducer as formReducer } from "redux-form"
import loadingReducer from "./loadingReducer"

export default combineReducers({
  prestations,
  services,
  shops,
  genders,
  reservation,
  timeSlots,
  loadingReducer,
  form: formReducer,
  countPeopleTable,
  logo
})
