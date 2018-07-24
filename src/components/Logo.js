import React from "react"
import Media from "react-media"

const Logo = ({ logo }) => {
  return (
    <Media query="(max-width: 575.98px)">
      {matches =>
        matches ? (
          <img src={logo} className="img-fluid" alt="logo" />
        ) : (
          <img src={logo} className="w-25 p-3" alt="logo" />
        )
      }
    </Media>
  )
}

export default Logo
