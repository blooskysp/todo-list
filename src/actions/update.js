export const update = (id, newName) => {
  return async (dispatch) => {
    fetch(`http://localhost:7000/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        name: newName,
        id,
      }), })
      .then((rawResponse) => rawResponse.json())
      .then((res) => {
        console.log(res);
        dispatch({ type: 'UPDATE', payload: res });
        dispatch({ type: 'SET_ERROR', payload: null });
      })
      .catch(() => dispatch({ type: 'SET_ERROR', payload: 'Не удалось обновить дело' }))
  }
}