// src/components/UserManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserDetail from './UserDetail';
import UserForm from './UserForm';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch users from the API when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users/');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleUserClick = (userId) => {
    const selected = users.find((user) => user.id === userId);
    setSelectedUser(selected);
  };

  const handleCreateOrUpdateUser = async (userData) => {
    try {
      if (userData.id) {
        // If the user has an ID, update the user
        await axios.put(`http://localhost:3000/api/users//${userData.id}`, userData);
      } else {
        // If the user doesn't have an ID, create a new user
        await axios.post('http://localhost:3000/api/users/', userData);
      }

      // Refetch the updated user list
      const response = await axios.get('http://localhost:3000/api/users/');
      setUsers(response.data);

      // Clear the selected user
      setSelectedUser(null);
    } catch (error) {
      console.error('Error creating/updating user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      // Delete the user
      await axios.delete(`http://localhost:3000/api/users//${userId}`);

      // Refetch the updated user list
      const response = await axios.get('http://localhost:3000/api/users/');
      setUsers(response.data);

      // Clear the selected user
      setSelectedUser(null);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/3 p-4">
        <UserList users={users} onUserClick={handleUserClick} />
      </div>
      <div className="w-2/3 p-4">
        {selectedUser ? (
          <div>
            <UserDetail user={selectedUser} />
            <UserForm
              onSubmit={handleCreateOrUpdateUser}
              initialValues={selectedUser}
            />
            <button
              className="bg-red-500 text-white py-2 px-4 mt-2"
              onClick={() => handleDeleteUser(selectedUser.id)}
            >
              Delete User
            </button>
          </div>
        ) : (
          <p>Select a user to view details.</p>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
