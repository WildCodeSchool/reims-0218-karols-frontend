import React from "react"
import CardModel from "./CardModel"
import { Row, Col } from "reactstrap"
import Zoom from "react-reveal/Zoom"

const PreparationChoice = ({
  id,
  name,
  preparations,
  select,
  image,
  showCounter,
  handleMinus,
  handlePlus,
  preparationId
}) => (
  <div>
    <h5
      style={{
        height: "100px",
        paddingTop: "40px",
        fontSize: "40px"
      }}
    >
      {name}
    </h5>
    <Row className="justify-content-center">
      {preparations.map(preparation => (
        <Col
          key={preparation.id}
          lg="4"
          md="6"
          sm="12"
          className="text-center mb-3"
          style={{
            height: "325px"
          }}
        >
          <Zoom>
            <CardModel
              key={preparation.id}
              {...preparation}
              title={preparation.titlePreparation}
              image={preparation.image}
              select={preparationId => {
                select(id, preparationId)
              }}
              showCounter={showCounter}
              handleMinus={() => handleMinus(id, preparation.id)}
              handlePlus={() => handlePlus(id, preparation.id)}
            />
          </Zoom>
        </Col>
      ))}
    </Row>
  </div>
)

export default PreparationChoice
