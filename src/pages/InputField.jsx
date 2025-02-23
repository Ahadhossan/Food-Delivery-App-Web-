import React, { useState } from "react";

const InputField = ({ label, onChange, errorMessage, ...otherProps }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="inputField">
      <label>{label}</label>
      <input
        {...otherProps}
        onChange={onChange}
        onBlur={() => setFocused(true)}
        onFocus={() =>
          otherProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default InputField;
