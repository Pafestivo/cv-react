import React from "react";

const InputField = ({ type, placeholder, name, value, onChange }) => {
  return (
    <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />
  )
}

export default InputField;
