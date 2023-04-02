import React, { Component } from "react";

class InputField extends Component {
  render() {
    return (
      <input type={this.props.type} placeholder={this.props.placeholder} />
    )
  }
}

export default InputField