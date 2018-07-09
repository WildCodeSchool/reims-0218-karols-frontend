import React, { Component } from "react"
import { connect } from "react-redux"
import Logo from "../components/Logo"

const mapStateToProps = state => ({
  logo: state.logo
})

class KarolLogo extends Component {
  render() {
    return (
      <div>
        <Logo />
      </div>
    )
  }
}

export default connect(mapStateToProps)(KarolLogo)
