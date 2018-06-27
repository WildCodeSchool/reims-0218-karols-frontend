import React from "react"
import { Label, Input, FormGroup, Button } from "reactstrap"

const SelectClient = () => {
  return (
    <FormGroup className="mt-3">
      <Label for="select-client">Select client : </Label>
      <Input
        type="number"
        id="select-client"
        max="48"
        min="0"
        placeholder="Indiquez le nombre de personnes"
        onChange={() => {}}
      />
      <Button outline color="secondary">
        Valider
      </Button>
    </FormGroup>
  )
}

export default SelectClient
