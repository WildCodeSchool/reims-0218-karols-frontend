export const fetchCreateReservation = data =>
  fetch("http://api.karolsresa.fr/reservations", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
