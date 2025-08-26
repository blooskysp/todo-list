import styles from "./TodoActions.module.css";
import pencil from "../../../../assets/pencil.svg";
import trash from "../../../../assets/trash.svg";
import {useDispatch} from "react-redux";
import {remove} from "../../../../actions/index.js";
import {useState} from 'react';

const TodoActions = ({ id, name, toggleRenaming }) => {
  const dispatch = useDispatch();
  const [deletingStatus, setDeletingStatus] = useState(false);

  const onRemoveTodo = () => {
    dispatch(remove(id));
    setDeletingStatus(true);
  }

  return (
    <>
      <div>{name}</div>
      <div className={styles.actions}>
        <button onClick={toggleRenaming}>
          <img src={pencil} alt="Изменить" />
        </button>
        <button onClick={onRemoveTodo} disabled={deletingStatus}>
          <img src={trash} alt="Удалить"/>
        </button>
      </div>
    </>
  );
};

export default TodoActions;