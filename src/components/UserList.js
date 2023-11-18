// src/components/UserList.js
import React from 'react';

const UserList = ({ users, onUserClick }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold underline" >User List</h2>
      <ul>
        {users.map((user) => (
          <li onClick={() => onUserClick(user._id)} key={user._id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
