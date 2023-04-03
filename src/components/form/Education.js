import React, { Component } from "react";
import InputField from "../utility/InputField";
import Button from "../utility/Button";

class Education extends Component {
  constructor(props) {
    super(props)

    this.handleChangeEducation = this.handleChangeEducation.bind(this)
    this.deleteEducation = this.deleteEducation.bind(this)
  }

  handleChangeEducation(e) {
    const { name, value } = e.target
    const { id } = this.props.edu
    const updatedCV = Object.values(this.props.cv)

    const currentEduIndex = updatedCV[2].findIndex(edu => edu.id === id)
    const currentEdu = updatedCV[2][currentEduIndex]

    const updatedEdu = {...currentEdu, [name]: value}
    if(name === 'toYear' && value !== '') updatedEdu[name] = `- ${value}`
    if(name === 'city' && value !== '') updatedEdu[name] = `, ${value}`
    if(name === 'degree' && value !== '') updatedEdu[name] = `Degree: ${value}`
    if(name === 'subject' && value !== '') updatedEdu[name] = `Subject: ${value}`

    const newCV = {
      personalInfo: {...updatedCV[0]},
      experience: [...updatedCV[1]],
      education: [
        ...updatedCV[2].slice(0, currentEduIndex),
        updatedEdu,
        ...updatedCV[2].slice(currentEduIndex + 1)
      ]
    }
    this.props.setCV(newCV)
  }

  deleteEducation() {
    const { id } = this.props.edu
    const updatedCV = { ...this.props.cv }
    const eduIndex = updatedCV.education.findIndex(edu => edu.id === id)
    updatedCV.education.splice(eduIndex, 1)

    this.props.setCV(updatedCV)
  }

  render() {
    return(
      <section className="education">
        <InputField type="text" placeholder="University Name" name="universityName" onChange={this.handleChangeEducation}/>
        <InputField type="text" placeholder="City" name="city" onChange={this.handleChangeEducation}/>
        <InputField type="text" placeholder="Degree" name="degree" onChange={this.handleChangeEducation}/>
        <InputField type="text" placeholder="Subject" name="subject" onChange={this.handleChangeEducation}/>
        <InputField type="text" placeholder="From Year" name="fromYear" onChange={this.handleChangeEducation}/>
        <InputField type="text" placeholder="To Year" name="toYear" onChange={this.handleChangeEducation}/>
        <Button className="delete-btn" value="Delete Education" onClick={this.deleteEducation} />
      </section>
    )
  }
}

export default Education