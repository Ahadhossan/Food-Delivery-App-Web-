import React, { useState } from "react";

import "../styles/contact.css";
import InputField from "./InputField";
import contact from '../assets/images/contact.jpg'

const Contact = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const formFields = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
      autocomplete: "off",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "It should be valid email address!",
      required: true,
      autocomplete: "off",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      autocomplete: "off",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Password don't match!",
      required: true,
      pattern: values.password,
      autocomplete: "off",
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="df">
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <InputField
            key={field.id}
            {...field}
            value={values[field.name]}
            onChange={onChange}
          />
        ))}
        <button class="button" role="button">
          Submit
        </button>
      </form>

      <div>
        <h1>WELCOME! 👋 Fruits Shop 🥘 </h1>
        <p>Happy Shopping Day....🛒 </p>
        <img src={contact} alt="" className="contact-img" />
      </div>
    </div>
  );
};

export default Contact;
