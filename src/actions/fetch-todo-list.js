export const fetchTodoList = () => {
  return async (dispatch) => {
    fetch('http://localhost:7000/todos')
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: 'SUCCESS_LOAD', payload: res });
      })
      .catch(() => dispatch({ type: 'SET_ERROR', payload: 'Не удалось загрузить список' }))
  }
}