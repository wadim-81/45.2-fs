import React from "react";

const MyInput = ({ name, type, placeholder, label }) => {
  return (
    <div>
      {/* Это создает метку для элемента ввода. */}
      <label htmlFor={name}>{label}:  </label>
      <input id={name} name={name} type={type} placeholder={placeholder} />
    </div>
  );
};
export default MyInput;
