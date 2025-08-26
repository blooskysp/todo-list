import styles from './TodoList.module.css';
import {useEffect, useState} from "react";
import Todo from "../todo/Todo.jsx";
import {useDispatch, useSelector} from "react-redux";
import {
  selectSort,
  selectTodos,
  selectLoading,
  selectRefresher, selectError
} from "../../selectors/index.js";
import {fetchTodoList} from "../../actions/fetch-todo-list.js";
import Filters from "../filters/Filters.jsx";
import Add from "../add/Add.jsx";

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const sort = useSelector(selectSort);
  const refresher = useSelector(selectRefresher);
  const todoList = useSelector(selectTodos);
  const error = useSelector(selectError);

  const todoListCopy = todoList.filter((text) => (
    text.name.toLowerCase().includes(inputValue.toLowerCase())
  ));


  const sortedTodos = sort ?
    [...todoListCopy].sort((a, b) => a.name.localeCompare(b.name))
    : todoListCopy;

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [refresher]);

  return (
    <>
      <Add />
      <Filters inputValue={inputValue} setInputValue={setInputValue} />
      {error && <span className="error">{error}</span>}
      {loading && !error ? 'Загрузка...' : (
          <div className={styles.todoList}>
            {sortedTodos.map(({ id, name }) => (
              <Todo key={id} name={name} id={id} />
            ))}
          </div>
        )}
    </>
  );
};

export default TodoList;