import React, { Component } from "react";

class Button extends Component {
  render() {
    const { value, onClick, className } = this.props
    return(
      <button className={className} onClick={onClick}>{value}</button>
    )
  }
}

export default Button