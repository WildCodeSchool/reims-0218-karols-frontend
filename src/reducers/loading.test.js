import { requestLoading, makeTimeslotsReceived } from "../actions/actions"

import loading from "./loading"

describe("request", () => {
  it("loading but the response isn't here", () => {
    const prevState = {
      loading: true
    }

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(loading(prevState, anyAction)).toEqual(prevState)
  })

  it("loading but the response isn't here", () => {
    const prevState = {
      loading: true
    }
    const expectedState = {
      loading: true
    }
    const action = requestLoading(true)
    expect(loading(prevState, action)).toEqual(expectedState)
  })
})

describe("received", () => {
  it("loading but the response isn't here", () => {
    const prevState = {
      loading: true
    }

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(loading(prevState, anyAction)).toEqual(prevState)
  })

  it("loading is enabled but the response is here", () => {
    const prevState = {
      loading: true
    }
    const expectedState = {
      loading: false
    }
    const action = makeTimeslotsReceived(false)
    expect(loading(prevState, action)).toEqual(expectedState)
  })
})
