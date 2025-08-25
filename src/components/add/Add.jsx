import styles from './Add.module.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../actions/index.js";
import {selectTodos} from "../../selectors/index.js";

const Add = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);
  const todoList = useSelector(selectTodos);

  const onSubmit = (e) => {
    e.preventDefault();
    setError(null)

    if (todoList.find(({ name }) => name.toLowerCase() === inputValue.toLowerCase())) {
      setError('У вас уже есть такое дело');
      return;
    }

    if (inputValue) {
      dispatch(addTodo(inputValue));
      setInputValue('');
    } else {
      setError('Поле не заполнено');
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className={styles.addForm}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Новое дело"
          maxLength="32"
        />
        <button
          className={styles.addBtn}
          onClick={onSubmit}
        >
          +
        </button>
      </form>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Add;