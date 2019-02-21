import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import './styles.css';

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import useTodoState from './useTodoState';

const App = () => {
  // const [todos, setTodos] = useState([]);
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <ToDoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      <ToDoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
