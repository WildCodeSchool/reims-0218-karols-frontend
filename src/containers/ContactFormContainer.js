import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import Recaptcha from "react-grecaptcha"
import { connect } from "react-redux"
import { Button, Alert } from "reactstrap"

import { fetchCreateReservation } from "../api/fetchCreateReservation"
import { makeSuccessReservation, requestLoading } from "../actions/actions"
import { getSelectedForm, getReservationData } from "../resume"

const mapDispatchToProps = dispatch => ({
  onLoading: loading => dispatch(requestLoading(loading)),
  success: () => {
    dispatch(makeSuccessReservation())
  }
})

const mapStateToProps = state => ({
  selectedForm: getSelectedForm(state),
  reservationData: getReservationData(state),
  showAlert: state.reservation.success
})

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      validCaptcha: false
    }
    this.verifyCallback = this.verifyCallback.bind(this)
  }

  verifyCallback() {
    this.setState({
      validCaptcha: true
    })
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "10px auto",
          padding: "16px",
          background: "#F7F7F7",
          fontSize: "22px",
          borderRadius: "60px",
          textAlign: "center",
          border: "2px solid grey"
        }}
        className="justify-content-center"
      >
        <h2
          style={{
            background: "#f2f2f2",
            color: "#26292D",
            fontSize: "30px",
            fontWeight: "100",
            padding: "20px",
            borderRadius: "10px",
            border: "1px solid #797979",
            margin: "30px"
          }}
        >
          {" "}
          Formulaire de réservation{" "}
        </h2>
        <div
          style={{
            marginTop: "20px"
          }}
        >
          <label
            htmlFor="firstName"
            style={{
              display: "inline-block",
              width: "140px",
              textAlign: "center"
            }}
          >
            Prénom
          </label>
          <Field
            name="firstName"
            component="input"
            type="text"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#181616",
              marginLeft: "20px",
              borderRadius: "10px"
            }}
          />
        </div>
        <div
          style={{
            marginTop: "20px"
          }}
        >
          <label
            htmlFor="lastName"
            style={{
              display: "inline-block",
              width: "140px",
              textAlign: "center"
            }}
          >
            Nom
          </label>
          <Field
            name="lastName"
            component="input"
            type="text"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#181616",
              marginLeft: "20px",
              borderRadius: "10px"
            }}
          />
        </div>
        <div
          style={{
            marginTop: "20px"
          }}
        >
          <label
            htmlFor="email"
            style={{
              display: "inline-block",
              width: "140px",
              textAlign: "center"
            }}
          >
            Email
          </label>
          <Field
            name="email"
            component="input"
            type="email"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#181616",
              marginLeft: "20px",
              borderRadius: "10px"
            }}
          />
        </div>
        <Recaptcha
          sitekey={"6LenQWAUAAAAAPa99VtqSlKXvI_uNBqZA5XyD-hQ"}
          callback={this.verifyCallback}
          expiredCallback={() => console.log("expiredcaptcha")}
          locale="fr-FR"
          className="customClassName"
          data-theme="grey"
          style={{
            display: "table",
            margin: "0 auto",
            paddingBottom: "30px",
            marginTop: "30px"
          }}
        />
        <Button
          disabled={!this.state.validCaptcha}
          outline
          color="secondary"
          onClick={() => {
            return fetchCreateReservation({
              loading: this.props.onLoading(true),
              contact: this.props.selectedForm,
              ...this.props.reservationData
            }).then(data => {
              this.props.success()
            })
          }}
        >
          Creer cette réservation
        </Button>{" "}
        {this.props.showAlert && (
          <Alert
            style={{
              marginTop: "30px"
            }}
          >
            {" "}
            Vous avez reçu un mail de confirmation{" "}
          </Alert>
        )}
      </form>
    )
  }
}

ContactForm = reduxForm({
  form: "contact"
})(ContactForm)

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
