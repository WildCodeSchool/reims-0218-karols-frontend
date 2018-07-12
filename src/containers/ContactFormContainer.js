import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import Recaptcha from "react-grecaptcha"
import { connect } from "react-redux"
import { Button, Alert } from "reactstrap"

import { fetchCreateReservation } from "../api/fetchCreateReservation"
import { makeSuccessReservation } from "../actions/actions"
import { getSelectedForm, getReservationData, getFormErrors } from "../resume"

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Veuillez rentrer une adresse mail valide"
    : undefined

const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Veuillez renter un numéro de téléphone à 10 chiffres"
    : undefined

const required = value =>
  value || typeof value === "number" ? undefined : "Required"

const mapDispatchToProps = dispatch => ({
  success: () => {
    dispatch(makeSuccessReservation())
  }
})

const mapStateToProps = state => ({
  selectedForm: getSelectedForm(state),
  reservationData: getReservationData(state),
  formErrors: getFormErrors(state),
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
    console.log(this.props.selectedForm)
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
            validate={required}
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
            validate={required}
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
            Téléphone
          </label>
          <Field
            name="phone"
            component="input"
            type="number"
            validate={[required, phoneNumber]}
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
            validate={[required, email]}
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
          disabled={!this.state.validCaptcha || this.props.formErrors}
          outline
          color="secondary"
          onClick={() => {
            return fetchCreateReservation({
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
