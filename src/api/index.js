export const fetchShopsPrestations = () =>
  fetch("http://api.wilder-artemis.fr/shops-prestations").then(res =>
    res.json()
  )
