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
      ]
    }
    this.props.setCV(newCV)
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