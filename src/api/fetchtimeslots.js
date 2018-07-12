export const fetchTimeSlots = () =>
  fetch("http://api.karolsresa.fr/timeslots").then(res => res.json())
