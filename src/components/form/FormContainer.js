import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import '../../styles/form/form-styles.css';

class FormContainer extends Component {
  render() {
    const { cv, setCV } = this.props;
    return(
      <div className="form-container">
        <PersonalInfo cv={cv} setCV={setCV}/>
        <h1>Experience</h1>
        <Experience cv={cv} setCV={setCV}/>
      </div>
    )
  }
}

export default FormContainer