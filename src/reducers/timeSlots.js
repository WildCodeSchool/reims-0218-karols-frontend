import {
  CHOOSE_TIMESLOT,
  TIMESLOTS_RECEIVED,
  EMPTY_TIMESLOTS,
  CHOOSE_COUNT_PEOPLE,
  CHOOSE_PRESTATION,
  CHOOSE_SERVICE,
  CHOOSE_SEX,
  CHOOSE_SHOP,
  DECREMENT_PRESTATION,
  DECREMENT_SEX,
  DECREMENT_TABLE,
  INCREMENT_PRESTATION,
  INCREMENT_SEX,
  INCREMENT_TABLE
} from "../actions/actions"

const initialState = []

const timeSlot = (prevState = initialState, action) => {
  if (action.type === CHOOSE_TIMESLOT) {
    // si l'action est de type CHOOSE_TIMESLOT
    return prevState.map(day => ({
      ...day,
      timeSlots: day.timeSlots.map(timeSlot => ({
        ...timeSlot,
        selected: action.timeSlot.time.s === timeSlot.time.s
      }))
    }))
  }
  if (action.type === TIMESLOTS_RECEIVED) {
    return action.response.map(day => ({
      ...day,
      timeSlots: day.timeSlots.filter(timeSlot => timeSlot.available)
    }))
  }
  if (
    action.type === EMPTY_TIMESLOTS ||
    action.type === CHOOSE_COUNT_PEOPLE ||
    action.type === CHOOSE_PRESTATION ||
    action.type === CHOOSE_SERVICE ||
    action.type === CHOOSE_SEX ||
    action.type === CHOOSE_SHOP ||
    action.type === DECREMENT_PRESTATION ||
    action.type === DECREMENT_SEX ||
    action.type === DECREMENT_TABLE ||
    action.type === INCREMENT_PRESTATION ||
    action.type === INCREMENT_SEX ||
    action.type === INCREMENT_TABLE
  ) {
    return []
  }
  return prevState
}
export default timeSlot
