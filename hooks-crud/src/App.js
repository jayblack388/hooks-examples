import React, { useState } from 'react';

import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

import './App.css';

const App = () => {
  const userData = [
    { id: 1, name: 'Tania', username: 'floppysloppy' },
    { id: 2, name: 'Craig', username: 'tigldybets' },
    { id: 3, name: 'Ben', username: 'beicisimo' }
  ];
  const initialFormState = { id: null, name: '', username: '' };
  const [users, setUsers] = useState(userData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  };
  const editRow = user => {
    const { id, name, username } = user;
    setEditing(true);
    setCurrentUser({ id, name, username });
  };
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };
  return (
    <div className="container">
      <h1>CRUD with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <>
              <h2>Edit User</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </>
          ) : (
            <>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </>
          )}
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable deleteUser={deleteUser} editRow={editRow} users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
