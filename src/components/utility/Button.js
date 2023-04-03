import React, { Component } from "react";

class Button extends Component {
  render() {
    const { value, onClick } = this.props
    return(
      <button onClick={onClick}>{value}</button>
    )
  }
}

export default Button