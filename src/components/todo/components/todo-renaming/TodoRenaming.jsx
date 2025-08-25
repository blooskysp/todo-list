import styles from "./TodoRenaming.module.css";
import close from '../../../../assets/close.svg';
import check from '../../../../assets/check.svg';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectTodos} from "../../../../selectors/index.js";
import {renameTodo} from "../../../../actions/index.js";

const TodoRenaming = ({ name, id, toggleRenaming }) => {
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodos);
  const [error, setError] = useState(false)
  const [inputValue, setInputValue] = useState(name);

  const onRenameTodo = () => {
    setError(false);

    if (todoList.find(({ name }) => name.toLowerCase() === inputValue.toLowerCase())) {
      setError(true);
      return;
    };

    if (inputValue) {
      dispatch(renameTodo(id, inputValue));
      toggleRenaming();
    } else {
      setError(true);
      return;
    }
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        maxLength="32"
        className={error && styles.inputError}
      />
      <div className={styles.actions}>
        <button onClick={onRenameTodo}>
          <img
            src={check}
            alt="Принять"
          />
        </button>
        <button onClick={toggleRenaming}>
          <img
            src={close}
            alt="Закрыть"
          />
        </button>
      </div>
    </>
  );
};

export default TodoRenaming;