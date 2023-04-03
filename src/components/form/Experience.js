import React, { Component } from "react";
import InputField from "../utility/InputField";
import Button from "../utility/Button";
import '../../styles/form/form-styles.css';

class Experience extends Component {
  constructor(props) {
    super(props)

    this.handleChangeExperience = this.handleChangeExperience.bind(this)
    this.deleteExperience = this.deleteExperience.bind(this)
  }
  

  handleChangeExperience(e) {
    const { name, value } = e.target
    const { id } = this.props.exp
    const updatedCV = Object.values(this.props.cv)

    const currentExpIndex = updatedCV[1].findIndex(exp => exp.id === id)
    const currentExp = updatedCV[1][currentExpIndex]

    const updatedExp = {...currentExp, [name]: value}
    if(name === 'toYear' && value !== '') updatedExp[name] = `- ${value}`
    if(name === 'city' && value !== '') updatedExp[name] = `, ${value}`

    const newCV = {
      personalInfo: {...updatedCV[0]},
      experience: [
        ...updatedCV[1].slice(0, currentExpIndex),
        updatedExp,
        ...updatedCV[1].slice(currentExpIndex + 1)
      ],
      education: [...updatedCV[2]]
    }
    this.props.setCV(newCV)
  }

  deleteExperience() {
    const { id } = this.props.exp
    const updatedCV = { ...this.props.cv }
    const expIndex = updatedCV.experience.findIndex(exp => exp.id === id)
    updatedCV.experience.splice(expIndex, 1)

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
        <Button className="delete-btn" value="Delete Experience" onClick={this.deleteExperience} />
      </section>
    )
  }
}

export default Experience