export const fetchTodoList = () => {
  return async (dispatch) => {
    fetch('http://localhost:7000/todos')
      .then((rawResponse) => rawResponse.json())
      .then((res) => {
        dispatch({ type: 'SUCCESS_LOAD', payload: res });
        dispatch({ type: 'SET_LOADING', payload: false });
      })
      .catch(() => dispatch({ type: 'SET_ERROR', payload: 'Не удалось загрузить список' }))
  }
}