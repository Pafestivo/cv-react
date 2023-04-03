import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Button from "../utility/Button";
import '../../styles/form/form-styles.css';
import '../../styles/form/form-styles.css';

class FormContainer extends Component {

  constructor(props) {
    super(props)

    this.addExperience = this.addExperience.bind(this)
  }

  addExperience() {
    // add an empty experience to the CV object
    // create Experience using the class
    // add this new experience to the dom at the bottom of the experience list
  }

  render() {
    const { cv, setCV } = this.props;
    return(
      <div className="form-container">
        <PersonalInfo cv={cv} setCV={setCV}/>
        <h1>Experience</h1>
        <Experience exp={cv.experience[0]} cv={cv} setCV={setCV} key={cv.experience[0].id}/>
        <Experience exp={cv.experience[1]} cv={cv} setCV={setCV} key={cv.experience[1].id}/>
        <Button value="Add Experience" onClick={this.addExperience} />
      </div>
    )
  }
}

export default FormContainer