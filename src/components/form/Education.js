import React from "react";
import InputField from "../utility/InputField";
import Button from "../utility/Button";

const Education = ({ cv, setCV, edu}) => {

  const handleChangeEducation = (e) => {
    const { name, value } = e.target
    const { id } = edu
    const updatedCV = Object.values(cv)

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
    setCV(newCV)
  }

  const deleteEducation = () => {
    const { id } = edu
    const updatedCV = { ...cv }
    const eduIndex = updatedCV.education.findIndex(edu => edu.id === id)
    updatedCV.education.splice(eduIndex, 1)

    setCV(updatedCV)
  }

    return(
    <section className="education">
      <InputField type="text" placeholder="University Name" name="universityName" onChange={handleChangeEducation}/>
      <InputField type="text" placeholder="City" name="city" onChange={handleChangeEducation}/>
      <InputField type="text" placeholder="Degree" name="degree" onChange={handleChangeEducation}/>
      <InputField type="text" placeholder="Subject" name="subject" onChange={handleChangeEducation}/>
      <InputField type="text" placeholder="From Year" name="fromYear" onChange={handleChangeEducation}/>
      <InputField type="text" placeholder="To Year" name="toYear" onChange={handleChangeEducation}/>
      <Button className="delete-btn" value="Delete Education" onClick={deleteEducation} />
    </section>
  )
}

export default Education