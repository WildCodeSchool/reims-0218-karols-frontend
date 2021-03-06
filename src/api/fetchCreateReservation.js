export const fetchCreateReservation = data =>
  fetch(`${process.env.REACT_APP_SERVER_URL}/reservations`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
