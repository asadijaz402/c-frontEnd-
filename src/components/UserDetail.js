// src/components/UserDetail.js
import React from 'react';

const UserDetail = ({ user }) => {
  return (
    <div>
      <h2>User Detail</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add other user details as needed */}
    </div>
  );
};

export default UserDetail;
