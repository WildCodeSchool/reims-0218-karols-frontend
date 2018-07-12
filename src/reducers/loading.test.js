import {
  requestLoading,
  makeTimeslotsReceived,
  makeSuccessReservation,
  makeShopsPrestationsReceived
} from "../actions/actions"

import loading from "./loading"

describe("loading", () => {
  it("should be true when it's loading shop prestation received", () => {
    const prevState = true

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(loading(prevState, anyAction)).toEqual(prevState)
  })

  it("should be true when shop prestation is received", () => {
    const prevState = true

    const expectedState = false

    const action = makeShopsPrestationsReceived(false)
    expect(loading(prevState, action)).toEqual(expectedState)
  })
})

describe("loading", () => {
  it("should be true when it's loading time slot received", () => {
    const prevState = {
      loading: true
    }

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(loading(prevState, anyAction)).toEqual(prevState)
  })

  it("should be true when time slot is received", () => {
    const prevState = true

    const expectedState = false

    const action = makeTimeslotsReceived(false)
    expect(loading(prevState, action)).toEqual(expectedState)
  })
})

describe("loading", () => {
  it("should be true when it's loading success reservation received", () => {
    const prevState = {
      loading: true
    }

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(loading(prevState, anyAction)).toEqual(prevState)
  })

  it("should be true when success reservation is received", () => {
    const prevState = true

    const expectedState = false

    const action = makeSuccessReservation(false)
    expect(loading(prevState, action)).toEqual(expectedState)
  })
})

describe("loading", () => {
  it("should be true when no fetch is done", () => {
    const prevState = true

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(loading(prevState, anyAction)).toEqual(prevState)
  })

  it("should should be true when no fetch is done ", () => {
    const prevState = true

    const expectedState = true

    const action = requestLoading(true)
    expect(loading(prevState, action)).toEqual(expectedState)
  })
})
