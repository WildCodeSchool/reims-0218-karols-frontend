export const fetchShopsPrestations = () =>
  fetch(`${process.env.REACT_APP_SERVER_URL}/shops-prestations`).then(
    res => res.json()
  )
