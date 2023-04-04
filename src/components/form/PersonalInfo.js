import React from "react";
import InputField from "../utility/InputField";
import '../../styles/form/form-styles.css';

const PersonalInfo = ({ cv, setCV }) => {
  

  const handleChangePersonal = (e) => {
    const { name, value } = e.target
    const updatedCV = { ...cv }
    updatedCV.personalInfo[name] = value
    setCV(updatedCV)
  }

  return(
    <section className="p-i">
    <h1>Personal Information:</h1>
      <InputField type="text" placeholder="First Name" name="firstName" onChange={handleChangePersonal}/>
      <InputField type="text" placeholder="Last Name" name="lastName" onChange={handleChangePersonal}/>
      <InputField type="text" placeholder="Role" name="role" onChange={handleChangePersonal}/>
      <InputField type="text" placeholder="Address" name="address" onChange={handleChangePersonal}/>
      <InputField type="text" placeholder="Phone Number" name="number" onChange={handleChangePersonal}/>
      <InputField type="email" placeholder="Email" name="email" onChange={handleChangePersonal}/>
      <InputField type="textarea" placeholder="Description" name="description" onChange={handleChangePersonal}/>
    </section>
  )
}

export default PersonalInfo