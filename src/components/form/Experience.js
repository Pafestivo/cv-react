import React, { Component } from "react";
import InputField from "../utility/InputField";
import '../../styles/form/form-styles.css';

class Experience extends Component {
  constructor(props) {
    super(props)

    this.handleChangeExperience = this.handleChangeExperience.bind(this)
  }
  

  handleChangeExperience(e) {
    const { name, value } = e.target
    const updatedCV = { ...this.props.cv }
    updatedCV.experience[name] = value
    if(name === 'toYear' && value !== '') updatedCV.experience[name] = `- ${value}`
    if(name === 'city' && value !== '') updatedCV.experience[name] = `, ${value}`
    this.props.setCV(updatedCV)
  }

  render() {
    return(
      <section className="experience">
        <InputField type="text" placeholder="Position" name="position" onChange={this.handleChangeExperience}/>
        <InputField type="text" placeholder="Company" name="company" onChange={this.handleChangeExperience}/>
        <InputField type="text" placeholder="City" name="city" onChange={this.handleChangeExperience}/>
        <InputField type="text" placeholder="From Year" name="fromYear" onChange={this.handleChangeExperience}/>
        <InputField type="text" placeholder="To Year" name="toYear" onChange={this.handleChangeExperience}/>
      </section>
    )
  }
}

export default Experience