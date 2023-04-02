import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import '../../styles/form/form-container.css';

class FormContainer extends Component {
  render() {
    const { cv, setCV } = this.props;
    return(
      <div className="form-container">
        <PersonalInfo cv={cv} setCV={setCV}/>
      </div>
    )
  }
}

export default FormContainer