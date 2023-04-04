import React from "react";
import InputField from "../utility/InputField";
import Button from "../utility/Button";
import '../../styles/form/form-styles.css';

const Experience = ({ cv, setCV, exp }) => {
  

  const handleChangeExperience = (e) => {
    const { name, value } = e.target
    const { id } = exp
    const updatedCV = Object.values(cv)

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
    setCV(newCV)
  }

  const deleteExperience = () => {
    const { id } = exp
    const updatedCV = { ...cv }
    const expIndex = updatedCV.experience.findIndex(exp => exp.id === id)
    updatedCV.experience.splice(expIndex, 1)

    setCV(updatedCV)
  }

  return(
    <section className="experience">
      <InputField type="text" placeholder="Position" name="position" onChange={handleChangeExperience}/>
      <InputField type="text" placeholder="Company" name="company" onChange={handleChangeExperience}/>
      <InputField type="text" placeholder="City" name="city" onChange={handleChangeExperience}/>
      <InputField type="text" placeholder="From Year" name="fromYear" onChange={handleChangeExperience}/>
      <InputField type="text" placeholder="To Year" name="toYear" onChange={handleChangeExperience}/>
      <Button className="delete-btn" value="Delete Experience" onClick={deleteExperience} />
    </section>
  )
}

export default Experience