import React, { Component } from "react"
import { connect } from "react-redux"
import { Row, Col } from "reactstrap"

import CardModel from "../components/CardModel"
import ShopTitle from "../components/ShopTitle"
import { makeChooseShop } from "../actions/actions"

const mapStateToProps = state => ({
  shops: state.shops,
  timeSlots: state.timeSlots
})

const mapDispatchToProps = dispatch => ({
  select: shopId => {
    dispatch(makeChooseShop(shopId))
  }
})

class ShopSelect extends Component {
  render() {
    return (
      <div>
        <ShopTitle />
        <Row className="justify-content-center mt-5">
          {this.props.shops.map(shop => (
            <Col
              key={shop.id}
              lg="4"
              md="6"
              sm="12"
              className="text-center mb-4"
            >
              <CardModel
                title={shop.city}
                image={shop.image}
                {...shop}
                select={
                  this.props.timeSlots.length === 0
                    ? this.props.select
                    : () => {}
                }
              />
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopSelect)
