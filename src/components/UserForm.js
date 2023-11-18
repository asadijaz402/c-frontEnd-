// src/components/UserForm.js
import React, { useState } from 'react';

const UserForm = ({ onSubmit, initialValues }) => {
  const [values, setValues] = useState(initialValues || {});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={values.name || ''}
        onChange={handleChange}
      />
      {/* Add other input fields for user details as needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
