import React from "react"
import { Button } from "reactstrap"

const Counter = ({
  count,
  handleMinus,
  handlePlus,
  id,
  prestationId,
  preparationId
}) => {
  return (
    <div>
      <Button
        onClick={() => handleMinus(id, preparationId)}
        size="large"
        style={{
          display: "inline-block",
          backgroundColor: "#FFF",
          color: "#000",
          fontWeight: "bold",
          opacity: "0.8",
          padding: "5px 15px 5px 15px",
          borderRadius: "50%",
          top: "20px"
        }}
        className="mr-4 mb-1"
        disabled={count < 1 && true}
      >
        -
      </Button>
      <p
        size="large"
        style={{
          display: "inline-block",
          color: "#FFF",
          fontWeight: "bold",
          border: "1px solid",
          padding: "5px 15px 5px 15px",
          borderRadius: "50%"
        }}
      >
        {count}
      </p>
      <Button
        onClick={() => handlePlus(id, preparationId)}
        size="large"
        style={{
          display: "inline-block",
          backgroundColor: "#FFF",
          color: "#000",
          fontWeight: "bold",
          opacity: "0.8",
          padding: "5px 15px 5px 15px",
          borderRadius: "50%"
        }}
        className="ml-4 mb-1"
      >
        +
      </Button>
    </div>
  )
}

export default Counter
