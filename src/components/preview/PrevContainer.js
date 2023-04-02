import React, { Component } from "react";
import '../../styles/preview/preview-styles.css'

class PrevContainer extends Component {
  render() {
    const { firstName, lastName, role, address, number, email, description} = this.props.cv.personalInfo
    const { position, company, city, fromYear, toYear } = this.props.cv.experience
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
              <div className="exp-tile">
                <div className="years">
                <p>{fromYear} {toYear}</p>
                </div>

                <div className="job">
                  <p className="position">{position}</p>
                  <p>{company}{city}</p>
                </div>
              </div>
              

            </div> {/* experience */}

            <hr />

          </div>
        </div>

      </div> /* prev-container */
    )
  }
}

export default PrevContainer