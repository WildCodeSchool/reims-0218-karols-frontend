import React, { Component } from "react"
import { connect } from "react-redux"
import Logo from "../components/Logo"

const mapStateToProps = state => ({
  logo: state.logo
})

class KarolLogo extends Component {
  render() {
    return <Logo logo={this.props.logo.image} />
  }
}

export default connect(mapStateToProps, null)(KarolLogo)
