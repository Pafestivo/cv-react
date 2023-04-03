import React, { Component } from "react";
import '../styles/main.css';
import FormContainer from "./form/FormContainer";
import PrevContainer from "./preview/PrevContainer";
import emptyCV from "./utility/EmptyCV";

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cv: emptyCV
    }
    this.setCV = this.setCV.bind(this)
  }

  setCV(newCV) {
    this.setState({
      cv: newCV
    })
  }

  render() {
    return(
      <div className="main-container">
        <FormContainer cv={this.state.cv} setCV={this.setCV} />
        <PrevContainer cv={this.state.cv}/>
      </div>
    )
  }
}

export default Main