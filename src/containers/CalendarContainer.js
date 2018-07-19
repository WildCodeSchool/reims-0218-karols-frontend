import React, { Component } from "react"
import { connect } from "react-redux"
import { Container } from "reactstrap"

import Media from "react-media"

import { fetchDateSelected } from "../api/fetchDateSelected"

import { Button } from "reactstrap"
import {
  makeTimeslotsReceived,
  makeChooseSlotReservation,
  requestLoading,
  makeEmptyTimeslots
} from "../actions/actions"
import { getSelectedShop, getReservationData } from "../resume"

import ResultCalendar from "../components/ResultCalendar"
const { DateTime } = require("luxon")

const mapStateToProps = state => ({
  timeSlots: state.timeSlots,
  selectedShop: getSelectedShop(state),
  reservationData: getReservationData(state)
})

const mapDispatchToProps = dispatch => ({
  onTimeSlotsReceived: response => dispatch(makeTimeslotsReceived(response)),
  onLoading: loading => dispatch(requestLoading(loading)),
  onTimeSlotSelected: timeSlot => dispatch(makeChooseSlotReservation(timeSlot)),
  onNewChoices: () => dispatch(makeEmptyTimeslots())
})

class TimeSlots extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMore: false
    }
  }
  handleMinusClick = () => {
    this.props.timeSlots.map((timeSlot, key) => {
      if (key === 2) {
        const dateMinusOne = DateTime.fromISO(timeSlot.date)
          .plus({ days: -1 })
          .toISODate()
        this.props.onLoading(true)
        fetchDateSelected(dateMinusOne, this.props.reservationData).then(
          response => {
            this.props.onTimeSlotsReceived(response)
          }
        )
      }
      return false
    })
  }
  handlePlusClick = () => {
    this.props.timeSlots.map((timeSlot, key) => {
      if (key === 2) {
        const datePlusOne = DateTime.fromISO(timeSlot.date)
          .plus({ days: +1 })
          .toISODate()
        this.props.onLoading(true)
        fetchDateSelected(datePlusOne, this.props.reservationData).then(
          response => {
            this.props.onTimeSlotsReceived(response)
          }
        )
      }
      return false
    })
  }
  seeMoreTimeSlots = () => {
    this.setState({
      showMore: !this.state.showMore
    })
  }
  render() {
    return (
      <Container>
        <Media query="(max-width: 575.98px)">
          {matches =>
            matches ? (
              <ResultCalendar
                handleMinusClick={this.handleMinusClick}
                weekTimeSlots={this.props.timeSlots.slice(0, 3)}
                handlePlusClick={this.handlePlusClick}
                selectTimeSlot={this.props.onTimeSlotSelected}
              />
            ) : (
              <ResultCalendar
                handleMinusClick={this.handleMinusClick}
                weekTimeSlots={this.props.timeSlots}
                handlePlusClick={this.handlePlusClick}
                selectTimeSlot={this.props.onTimeSlotSelected}
              />
            )
          }
        </Media>

        <div className="availabilities-more-button mt-3">
          <div className="phone mt-3">
            {this.props.selectedShop && (
              <p className="shop">
                Si vous ne trouvez aucun crénau, contactez le{" "}
                {this.props.selectedShop.phone}
              </p>
            )}
          </div>
        </div>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlots)
