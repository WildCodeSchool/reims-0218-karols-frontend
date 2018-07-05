export const fetchDateSelected = (date, reservationData) =>
  fetch(`http://localhost:8000/date-selected/${date}`, {
    method: "POST",
    body: JSON.stringify(reservationData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(res => res.json())
