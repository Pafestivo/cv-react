import React, { Component } from "react";
import '../../styles/preview/preview-styles.css'

class PrevContainer extends Component {

  render() {
    const { firstName, lastName, role, address, number, email, description} = this.props.cv.personalInfo
    const experiences = [...this.props.cv.experience]
    const educations = [...this.props.cv.education]
    return(
      <div className="prev-container">
        <div className="name-role">
          <h1>{firstName} {lastName}</h1>
          <h3>{role}</h3>
        </div>
        <div className="grid-container">
            <div className="personal-details">
            <h3>Personal Details</h3>
            <div className="address">
              <h4>Address</h4>
              <p>{address}</p>
            </div>
            <div className="number">
              <h4>Phone Number</h4>
              <p>{number}</p>
            </div>
            <div className="email">
              <h4>Email</h4>
              <p>{email}</p>
            </div>
          </div> {/* personal-details */}

          <div className="main-info">
            <div className="description">
              <h2>Description</h2>
              <p>{description}</p>
            </div>  

            <hr />

            <div className="experience">
              <h2>Experience</h2>
              {experiences.map((exp) => {
                const { position, company, city, fromYear, toYear, id } = exp;
                return(
                  <div className="tile" key={id}>
                    <div className="years">
                      <p>{fromYear} {toYear}</p>
                    </div>

                    <div className="details">
                      <p className="bold">{position}</p>
                      <p>{company}{city}</p>
                    </div>
                  </div> 
                )
              })}
            </div> {/* experience */}

            <hr />

            <div className="education">
              <h2>Education</h2>
              {educations.map((edu) => {
                const { universityName, city, degree, subject, fromYear, toYear, id } = edu;
                return(
                  <div className="tile" key={id}>
                    <div className="years">
                      <p>{fromYear} {toYear}</p>
                    </div>

                    <div className="details">
                      <p className="bold">{universityName}{city}</p>
                      <p>{degree}</p>
                      <p>{subject}</p>
                    </div>
                  </div> 
                )
              })}
            </div> {/* experience */}

          </div>
        </div>

      </div> /* prev-container */
    )
  }
}

export default PrevContainer