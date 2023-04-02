import React, { Component } from "react";
import '../styles/main.css'
import FormContainer from "./form/FormContainer";
import PrevContainer from "./preview/PrevContainer";

class Main extends Component {
  render() {
    return(
      <div className="main-container">
        <FormContainer />
        <PrevContainer />
      </div>
    )
  }
}

export default Main