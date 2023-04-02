import React, { Component } from "react";
import '../../styles/preview/prev-container.css'

class PrevContainer extends Component {
  render() {
    const { firstName, lastName, role, address, number, email, description} = this.props.cv.personalInfo
    return(
      <div className="prev-container">
        <h1>{firstName} {lastName}</h1>
        <h3>{role}</h3>
        <p>{address}</p>
        <p>{number}</p>
        <p>{email}</p>
        <p>{description}</p>
      </div>
    )
  }
}

export default PrevContainer