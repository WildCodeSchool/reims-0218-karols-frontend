import React from "react"
import ReactDOM from "react-dom"
import ChoicePrestation from "./ChoicePrestation"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ChoicePrestation />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<ChoicePrestation />).toJSON()
  expect(tree).toMatchSnapshot()
})
