export const fetchShopsPrestations = () =>
  fetch("http://api.karolsresa.fr/shops-prestations").then(res =>
    res.json()
  )
