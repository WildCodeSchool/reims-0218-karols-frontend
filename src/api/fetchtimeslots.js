export const fetchTimeSlots = () =>
  fetch(`http://${process.env.REACT_APP_SERVER_URL}/timeslots`).then(res =>
    res.json()
  )
