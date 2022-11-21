import React, { useState } from "react";
import shortid from "shortid";
const initialState = {
  name: "",
  email: "",
  group: "",
  id: "",
};

const ContactForm = ({ getContact }) => {
  const [inputValues, setInputValues] = useState({ ...initialState });
  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
      id: shortid.generate(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getContact(inputValues);
    setInputValues({ ...initialState });
  };
  const { name, email, group } = inputValues;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 className="text-red-600">Contact List Form</h3>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            required
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            required
            value={email}
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        <div>
          <select value={group} onChange={handleChange} name="group">
            <option value="">Select Group </option>
            <option value="Home">Home</option>
            <option value="Office">Office</option>
          </select>
        </div>
        <button type="submit">Add a Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
