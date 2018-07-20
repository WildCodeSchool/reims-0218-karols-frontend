import React, { Component } from "react"
import { connect } from "react-redux"
import { Container } from "reactstrap"
import { Element } from "react-scroll"

import {
  showServices,
  showSex,
  showFemalePrestation,
  showMalePrestation,
  showDatePicker,
  showCalendar,
  showFormAndRecap,
  showCountPeopleTable
} from "../display"

import ServiceContainer from "./ServiceContainer"
import ShopContainer from "./ShopContainer"
import PrestationFemaleContainer from "./PrestationFemaleContainer"
import PrestationMaleContainer from "./PrestationMaleContainer"
import GenderContainer from "./GenderContainer"
import DatePickerContainer from "./DatePickerContainer"
import CalendarContainer from "./CalendarContainer"
import ResumeContainer from "./ResumeContainer"
import CountPeopleTableContainer from "./CountPeopleTableContainer"
import ContactFormContainer from "./ContactFormContainer"
import LogoContainer from "./LogoContainer"
import LoadingContainer from "./LoadingContainer"

import { makeShopsPrestationsReceived } from "../actions/actions"

import { fetchShopsPrestations } from "../api"

const mapStateToProps = state => ({
  showServices: showServices(state),
  showSex: showSex(state),
  showFemalePrestation: showFemalePrestation(state),
  showMalePrestation: showMalePrestation(state),
  showDatePicker: showDatePicker(state),
  showFormAndRecap: showFormAndRecap(state),
  showCalendar: showCalendar(state),
  showCountPeopleTable: showCountPeopleTable(state)
})

const mapDispatchToProps = dispatch => ({
  onShopsPrestationsReceived: response =>
    dispatch(makeShopsPrestationsReceived(response))
})

// Affichage conditionnel
// on affiche PrestationFemaleContainer si on a au moins 1 dans count F
// on affiche PrestationMaleContainer si on a au moins 1 dans count F
// le faire avec le test (deplacere le test dans un nouveau fichier)

// ENSUITE on connecte dans les containers
// pour la suite gérer les maxs

class Page extends Component {
  render() {
    return (
      <Container>
        <LoadingContainer />
        <LogoContainer />
        <ShopContainer />
        <Element name="services">
          {this.props.showServices && <ServiceContainer />}
        </Element>
        <Element name="table">
          {this.props.showCountPeopleTable && <CountPeopleTableContainer />}
        </Element>
        <Element name="genders">
          {this.props.showSex && <GenderContainer />}
        </Element>
        <Element name="female">
          {this.props.showFemalePrestation && <PrestationFemaleContainer />}
        </Element>
        <Element name="male">
          {this.props.showMalePrestation && <PrestationMaleContainer />}
        </Element>
        {this.props.showDatePicker && <DatePickerContainer />}
        {this.props.showCalendar && <CalendarContainer />}
        <Element name="form">
          {this.props.showFormAndRecap && (
            <div>
              {" "}
              <ResumeContainer />
              <ContactFormContainer />{" "}
            </div>
          )}
        </Element>
      </Container>
    )
  }
  componentDidMount() {
    //TODO fetch shopsandprestations
    fetchShopsPrestations().then(response => {
      this.props.onShopsPrestationsReceived(response)
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
