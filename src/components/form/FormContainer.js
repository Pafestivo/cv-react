import React, { Component } from "react";
import InputField from "./InputField";
import '../../styles/form/form-container.css'

class FormContainer extends Component {
  render() {
    return(
      <div className="form-container">
        <h1>Personal Information:</h1>
        <InputField type="text" placeholder="First Name" />
        <InputField type="text" placeholder="Last Name" />
        <InputField type="text" placeholder="Role" />
        <InputField type="text" placeholder="Address" />
        <InputField type="text" placeholder="Phone Number" />
        <InputField type="email" placeholder="Email" />
        <InputField type="textarea" placeholder="Description" />
      </div>
    )
  }
}

export default FormContainer