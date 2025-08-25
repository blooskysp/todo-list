export const addTodo = (name) => {
  return async (dispatch) => {
    fetch(`http://localhost:7000/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ name }), })
      .then(() => dispatch({ type: 'REFRESH_DATA' }))
  }
}