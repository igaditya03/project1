import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
const FormExample = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  // Handle change for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, // Spread previous state
      [name]: value, // Update specific field
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log or process form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <FaInstagram />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter Email"
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Enter Age"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormExample;
