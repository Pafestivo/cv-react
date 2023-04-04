import React, { useState } from "react";
import '../styles/main.css';
import FormContainer from "./form/FormContainer";
import PrevContainer from "./preview/PrevContainer";
import emptyCV from "./utility/EmptyCV";

const Main = () => {
  const [cv, setCV] = useState(emptyCV)

  return(
    <div className="main-container">
      <FormContainer cv={cv} setCV={setCV} />
      <PrevContainer cv={cv}/>
    </div>
  )
}

export default Main