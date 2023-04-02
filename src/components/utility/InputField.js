import React, { Component } from "react";

class InputField extends Component {
  render() {
    const { type, placeholder, name, value, onChange } = this.props;
    return (
      <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />
    )
  }
}

export default InputField;
