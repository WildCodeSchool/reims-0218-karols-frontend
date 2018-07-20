import React from "react"
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap"
import Iframe from "react-iframe"

class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div>
        <Button
          style={{
            width: "142px",
            height: "30px",
            opacity: "0.8"
          }}
          color="secondary"
          onClick={this.toggle}
        >
          <p
            style={{
              position: "relative",
              transform: "translateY(-25%)",
              fontStyle: "bold",
              fontSize: "20px"
            }}
          >
            En savoir plus
          </p>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody
            style={{
              width: "700px"
            }}
          >
            <Iframe
              url={this.props.info}
              width="470px"
              height="450px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
              allowFullScreen
            />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Retour
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Info
