export const fetchTimeSlots = () =>
  fetch(`${process.env.REACT_APP_SERVER_URL}/timeslots`).then(res => res.json())
