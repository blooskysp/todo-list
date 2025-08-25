export const removeTodo = (id) => {
  return async (dispatch) => {
    fetch(`http://localhost:7000/todos/${id}`, { method: 'DELETE' })
      .then(() => dispatch({ type: 'REFRESH_DATA' }))
  }
}