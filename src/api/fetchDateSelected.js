export const fetchDateSelected = (date, reservationData) =>
  fetch(`${process.env.REACT_APP_SERVER_URL}/date-selected/${date}`, {
    method: "POST",
    body: JSON.stringify(reservationData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(res => res.json())
