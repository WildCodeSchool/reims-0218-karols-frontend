import React from "react"
import ReactLoading from "react-loading"

const Loading = ({ type, color }) => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      left: "0",
      top: "0",
      right: "0",
      backgroundColor: "grey",
      opacity: "0.5",
      position: "fixed",
      zIndex: "1"
    }}
  >
    <ReactLoading
      type={"spin"}
      color={"#000000"}
      style={{
        width: "200px",
        height: "200px",
        top: "50%",
        left: "50%",
        marginTop: "-100px",
        marginLeft: "-100px",
        position: "absolute",
        zIndex: "1"
      }}
    />
  </div>
)

export default Loading
