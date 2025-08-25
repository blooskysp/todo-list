export const renameTodo = (id, newName) => {
  return async (dispatch) => {
    fetch(`http://localhost:7000/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        name: newName,
        id,
      }), })
      .then(() => dispatch({ type: 'REFRESH_DATA' }))
  }
}