import styles from './Todo.module.css';
import TodoActions from "./components/todo-actions/TodoActions.jsx";
import {useState} from "react";
import TodoRenaming from "./components/todo-renaming/TodoRenaming.jsx";

const Todo = ({ name, id }) => {
  const [renaming, setRenaming] = useState(false);

  const toggleRenaming = () => setRenaming(!renaming);

  return (
    <div className={styles.todo}>
      {renaming ? (
        <TodoRenaming
          id={id}
          name={name}
          toggleRenaming={toggleRenaming}
        />
      ) : (
        <TodoActions
          id={id}
          name={name}
          toggleRenaming={toggleRenaming}
        />)}
    </div>
  );
};

export default Todo;