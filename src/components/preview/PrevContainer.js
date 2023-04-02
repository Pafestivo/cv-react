import React, { Component } from "react";
import '../../styles/preview/prev-container.css'

class PrevContainer extends Component {
  render() {
    const { firstName, lastName, role, address, number, email, description} = this.props.cv.personalInfo
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

          <div className="description">
            <h2>Description</h2>
            <p>{description}</p>
          </div>      
        </div>

      </div> /* prev-container */
    )
  }
}

export default PrevContainer