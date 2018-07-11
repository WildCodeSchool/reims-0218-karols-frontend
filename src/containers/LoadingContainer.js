import React, { Component } from "react"
import { connect } from "react-redux"

import Loading from "../components/Loading"
import { requestLoading } from "../actions/actions"

const mapStateToProps = state => ({
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  requestLoading: loading => dispatch(requestLoading(loading))
})

class LoadingContainer extends Component {
  render() {
    return <div>{this.props.requestLoading.loading && <Loading />}</div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingContainer)
