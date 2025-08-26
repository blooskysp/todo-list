import styles from './Add.module.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {add, setError} from "../../actions/index.js";
import {selectTodos} from "../../selectors/index.js";

const Add = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const todoList = useSelector(selectTodos);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(setError(null));

    if (todoList.find(({ name }) => name.toLowerCase() === inputValue.toLowerCase())) {
      dispatch(setError('Такое дело уже существует'));
      return;
    };

    if (!inputValue) {
      dispatch(setError('Поле не заполнено'))
      return;
    } else {
      dispatch(add(inputValue));
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
    </div>
  );
};

export default Add;