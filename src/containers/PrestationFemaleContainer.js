import React, { Component } from "react"
import { connect } from "react-redux"
import ListChoicePrestation from "../components/ListChoicePrestation"
import {
  makeChoosePrestation,
  makeDecrementPrestation,
  makeIncrementPrestation
} from "../actions/actions"
import { scroller } from "react-scroll"
import { showCounter } from "../display"
import { getCountByGender, getSelectedService } from "../resume/index"

const mapStateToProps = state => ({
  prestations: state.prestations.filter(
    prestation => prestation.gender === "F"
  ),
  showCounter: showCounter(state),
  maxCountFemale: getCountByGender(state, "F"),
  bookingDone: state.reservation.success,
  selectedService: getSelectedService(state)
})

const mapDispatchToProps = dispatch => ({
  select: (prestationId, preparationId) => {
    dispatch(makeChoosePrestation(prestationId, preparationId))
  },
  handleMinus: (prestationId, preparationId) => {
    dispatch(makeDecrementPrestation(prestationId, preparationId))
  },
  handlePlus: max => (prestationId, preparationId) => {
    dispatch(makeIncrementPrestation(prestationId, preparationId, max))
  }
})

class FemaleSelected extends Component {
  componentDidMount() {
    if (this.props.selectedService && this.props.selectedService.id !== 3) {
      scroller.scrollTo("female", {
        duration: 1500,
        delay: 100,
        smooth: true
      })
    }
  }

  render() {
    return (
      <div>
        <ListChoicePrestation
          {...this.props}
          select={!this.props.bookingDone ? this.props.select : () => {}}
          showCounter={this.props.showCounter}
          handleMinus={
            !this.props.bookingDone ? this.props.handleMinus : () => {}
          }
          handlePlus={
            !this.props.bookingDone
              ? this.props.handlePlus(this.props.maxCountFemale)
              : () => {}
          }
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FemaleSelected)
