import React, { Component } from "react"
import { DateTime } from "luxon"
import { connect } from "react-redux"
import { Jumbotron } from "reactstrap"
import { scroller } from "react-scroll"
import { makeSuccessReservation } from "../actions/actions"
import { getReservationData } from "../resume"

const mapDispatchToProps = dispatch => ({
  success: () => {
    dispatch(makeSuccessReservation())
  }
})

const mapStateToProps = state => ({
  showAlert: state.reservation.success,
  reservationData: getReservationData(state)
})

const transformTimeSlot = timeSlot =>
  DateTime.fromISO(timeSlot.time.s)
    .setLocale("fr")
    .toFormat("'à' HH 'h' mm 'le' cccc dd LLLL ")

class ShowResume extends Component {
  componentDidMount() {
    scroller.scrollTo("form", {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }
  render() {
    const reservationData = this.props.reservationData
    return (
      <Jumbotron
        style={{
          marginTop: "2em",
          textAlign: "center",
          backgroundColor: "#F7F7F7",
          fontSize: "25px",
          borderRadius: "70px",
          border: "2px solid #797979"
        }}
      >
        <h1 className="display-12">Récapitulatif</h1>
        <hr className="my-2" />

        {reservationData.shop && (
          <p className="shop">
            Vous avez reservé à {reservationData.shop.city}
          </p>
        )}
        {(reservationData.service && reservationData.service.id) === 1 && (
          <div>
            {reservationData.service && (
              <p className="préparation">
                Vous avez choisi l'offre : {reservationData.service.name}
              </p>
            )}
            {reservationData.preparations &&
              reservationData.preparations.map((preparation, index) => {
                return (
                  <p className="prestation" key={index}>
                    {preparation.preparations[0].titlePreparation}
                  </p>
                )
              })}
            {reservationData.timeSlot && (
              <p className="horaire">
                Date de RDV au salon {""}
                {transformTimeSlot(reservationData.timeSlot)}
              </p>
            )}
          </div>
        )}
        {(reservationData.service && reservationData.service.id) === 2 && (
          <div>
            {reservationData.service && (
              <p className="préparation">
                Vous avez choisi l'offre : {reservationData.service.name}
              </p>
            )}
            {reservationData.countTable && (
              <p className="count">Vous êtes {reservationData.countTable}</p>
            )}
            {reservationData.timeSlot && (
              <p className="horaire">
                Date de RDV au salon {""}
                {transformTimeSlot(reservationData.timeSlot)}
              </p>
            )}
          </div>
        )}
        {(reservationData.service && reservationData.service.id) === 3 && (
          <div>
            {reservationData.service && (
              <p className="préparation">
                Vous avez choisi l'offre : {reservationData.service.name}
              </p>
            )}
            {reservationData.countGender && (
              <div className="count">
                {reservationData.countGender.map((gender, index) => (
                  <div key={index}>
                    {gender.sex === "M" && (
                      <p>
                        Vous êtes {gender.count} homme{gender.count > 1 && "s"}
                      </p>
                    )}
                    {gender.sex === "F" && (
                      <p>
                        Vous êtes {gender.count} femme{gender.count > 1 && "s"}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
            {reservationData.countPreparation.map(preparation =>
              preparation.preparations.map((preparation, index) => (
                <div key={index}>
                  {preparation.count > 0 && (
                    <p>
                      Vous avez choisi {preparation.count}{" "}
                      {preparation.titlePreparation}
                    </p>
                  )}
                </div>
              ))
            )}
            {reservationData.timeSlot && (
              <p className="horaire">
                Date de RDV au salon {""}
                {transformTimeSlot(reservationData.timeSlot)}
              </p>
            )}
          </div>
        )}
      </Jumbotron>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(ShowResume)
