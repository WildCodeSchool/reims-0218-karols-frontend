import React from "react"
import { Button } from "reactstrap"

const ButtonRefresh = () => {
  return (
    <div>
      <Button
        outline
        color="secondary"
        value="Refresh Page"
        href="http://localhost:3000/"
      >
        Nouvelle réservation
      </Button>
    </div>
  )
}
export default ButtonRefresh
