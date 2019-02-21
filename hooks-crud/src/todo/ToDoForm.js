import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

const ToDoForm = ({ saveTodo }) => {
  // const [value, setValue] = useState('');
  const { value, reset, onChange } = useInputState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        saveTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add Todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default ToDoForm;
