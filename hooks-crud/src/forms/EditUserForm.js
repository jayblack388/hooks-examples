import React, { useEffect, useState } from 'react';

const EditUserForm = props => {
  const [user, setUSer] = useState(props.currentUser);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUSer({ ...user, [name]: value });
  };
  useEffect(() => {
    setUSer(props.currentUser);
  }, [props]);
  return (
    <from>
      <label htmlFor="Name">Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label htmlFor="Username">Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button
        onClick={() => props.updateUser(user.id, user)}
        className="button muted-button"
      >
        Update User
      </button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </from>
  );
};

export default EditUserForm;
