import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Button from "../utility/Button";
import Education from "./Education";
import '../../styles/form/form-styles.css';
import '../../styles/form/form-styles.css';

class FormContainer extends Component {

  constructor(props) {
    super(props)

    this.addExperience = this.addExperience.bind(this)
    this.addEducation = this.addEducation.bind(this)
  }

  addExperience() {
    // add an empty experience to the CV object
    const newExp = {
      position: "",
      company: "",
      city: "",
      fromYear: "",
      toYear: "",
      id: Date.now()
    }
    
    const updatedCV = { ...this.props.cv }
    updatedCV.experience.push(newExp)
    this.props.setCV(updatedCV)
  }

  addEducation() {
    // add an empty education to the CV object
    const newEdu = {
      universityName: "",
      city: "",
      degree: "",
      subject: "",
      fromYear: "",
      toYear: "",
      id: Date.now()
    }
    
    const updatedCV = { ...this.props.cv }
    updatedCV.education.push(newEdu)
    this.props.setCV(updatedCV)
  }

  render() {
    const { cv, setCV } = this.props
    return(
      <div className="form-container">
        <PersonalInfo cv={cv} setCV={setCV}/>
        <h1 className="exp-title">Experience</h1>
        {cv.experience.map(exp => {
          return <Experience exp={exp} cv={cv} setCV={setCV} key={exp.id} />
        })}
        <Button className="add-btn" value="Add Experience" onClick={this.addExperience} />
        <h1 className="edu-title">Education</h1>
        {cv.education.map(edu => {
          return <Education edu={edu} cv={cv} setCV={setCV} key={edu.id} />
        })}
        <Button className="add-btn" value="Add Education" onClick={this.addEducation} />
      </div>
    )
  }
}

export default FormContainer