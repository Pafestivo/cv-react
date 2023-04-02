import React, { Component } from "react";
import InputField from "../utility/InputField";
import '../../styles/form/form-container.css';

class PersonalInfo extends Component {
  constructor(props) {
    super(props)

    this.handleChangePersonal = this.handleChangePersonal.bind(this)
  }
  

  handleChangePersonal(e) {
    const { name, value } = e.target
    const updatedCV = { ...this.props.cv }
    updatedCV.personalInfo[name] = value
    this.props.setCV(updatedCV)
  }

  render() {
    return(
      <section className="p-i">
      <h1>Personal Information:</h1>
        <InputField type="text" placeholder="First Name" name="firstName" onChange={this.handleChangePersonal}/>
        <InputField type="text" placeholder="Last Name" name="lastName" onChange={this.handleChangePersonal}/>
        <InputField type="text" placeholder="Role" name="role" onChange={this.handleChangePersonal}/>
        <InputField type="text" placeholder="Address" name="address" onChange={this.handleChangePersonal}/>
        <InputField type="text" placeholder="Phone Number" name="number" onChange={this.handleChangePersonal}/>
        <InputField type="email" placeholder="Email" name="email" onChange={this.handleChangePersonal}/>
        <InputField type="textarea" placeholder="Description" name="description" onChange={this.handleChangePersonal}/>
      </section>
    )
  }
}

export default PersonalInfo