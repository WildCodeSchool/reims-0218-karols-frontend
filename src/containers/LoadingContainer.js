import React, { Component } from "react"
import { connect } from "react-redux"

import Loading from "../components/Loading"

const mapStateToProps = state => ({
  loading: state.loading
})

class LoadingContainer extends Component {
  render() {
    return <div>{this.props.loading && <Loading />}</div>
  }
}

export default connect(mapStateToProps)(LoadingContainer)
