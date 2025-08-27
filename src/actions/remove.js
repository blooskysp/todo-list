export const remove = (id) => {
  return async (dispatch) => {
    fetch(`http://localhost:7000/todos/${id}`, { method: 'DELETE' })
      .then(() => {
        dispatch({ type: 'REMOVE', payload: id });
        dispatch({ type: 'SET_ERROR', payload: null });
      })
      .catch(() => dispatch({ type: 'SET_ERROR', payload: 'Не удалось удалить дело' }))
  }
}