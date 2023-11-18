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
    setValues({}); // Clear the form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name || ''}
          onChange={handleChange}
          className="p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="space-y-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email || ''}
          onChange={handleChange}
          className="p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="space-y-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={values.password || ''}
          onChange={handleChange}
          className="p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      {/* Add other input fields for user details as needed */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
