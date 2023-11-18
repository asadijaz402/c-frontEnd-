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
    const selected = users.find((user) => user._id === userId);
    setSelectedUser(selected);
  };

  const handleCreateOrUpdateUser = async (userData) => {
    try {
      if (userData._id) {
        await axios.put(
          `http://localhost:3000/api/users//${userData._id}`,
          userData
        );
      } else {
        await axios.post('http://localhost:3000/api/users/', userData);
      }
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
      await axios.delete(`http://localhost:3000/api/users//${userId}`);
      const response = await axios.get('http://localhost:3000/api/users/');
      setUsers(response.data);

      // Clear the selected user
      setSelectedUser(null);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className='flex'>
      <div className='w-1/3 p-4'>
        <UserList users={users} onUserClick={handleUserClick} />
      </div>
      <div className='w-2/3 p-4'>
        {selectedUser ? (
          <div>
            <UserDetail user={selectedUser} />
            <UserForm
              onSubmit={handleCreateOrUpdateUser}
              initialValues={selectedUser}
            />
            <button
              className='bg-red-500 text-white py-2 px-4 mt-2'
              onClick={() => handleDeleteUser(selectedUser._id)}
            >
              Delete User
            </button>
          </div>
        ) : (
          <UserForm onSubmit={handleCreateOrUpdateUser} />
        )}
      </div>
    </div>
  );
};

export default UserManagement;
