export const fetchTodoList = () => {
  return async (dispatch) => {
    try {
      fetch('http://localhost:7000/todos')
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: 'SUCCESS_LOAD', payload: res });
        })
    } catch (error) {
      console.error(`Ошибка запроса: ${error}`)
    }
  }
}