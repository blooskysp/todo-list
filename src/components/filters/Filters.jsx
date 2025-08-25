import styles from './Filters.module.css';
import {useDispatch, useSelector} from "react-redux";
import {selectSort} from "../../selectors/index.js";
import {sortTodoList} from "../../actions/index.js";

const Filters = ({ inputValue, setInputValue }) => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);

  const toggleSort = () => {
    dispatch(sortTodoList())
  }

  return (
    <div className={styles.settings}>
      <div className={styles.searchMenu}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Поиск"
        />
      </div>
      <div className={styles.sortMenu}>
        <button
          onClick={toggleSort}
          className={styles.sortButton}
        >
          Сортировка {sort ? 'вкл.' : 'выкл.'}
        </button>
      </div>
    </div>
  );
};

export default Filters;