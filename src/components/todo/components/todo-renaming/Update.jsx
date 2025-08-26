import styles from "./Update.module.css";
import close from '../../../../assets/close.svg';
import check from '../../../../assets/check.svg';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectError, selectTodos} from "../../../../selectors/index.js";
import {setError, update} from "../../../../actions/index.js";

const Update = ({ name, id, toggleRenaming }) => {
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodos);
  const error = useSelector(selectError);
  const [inputValue, setInputValue] = useState(name);

  const onRenameTodo = () => {
    dispatch(setError(null));

    if (todoList.find(({ name }) => name.toLowerCase() === inputValue.toLowerCase())) {
      dispatch(setError('Такое дело уже существует'));
      return;
    };

    if (inputValue) {
      dispatch(update(id, inputValue));
      toggleRenaming();
    } else {
      dispatch(setError('Поле не заполнено'))
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

export default Update;