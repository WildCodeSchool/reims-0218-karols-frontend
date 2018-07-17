import {
  CHOOSE_TIMESLOT,
  TIMESLOTS_RECEIVED,
  EMPTY_TIMESLOTS
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
  if (action.type === EMPTY_TIMESLOTS) {
    return []
  }
  return prevState
}
export default timeSlot
