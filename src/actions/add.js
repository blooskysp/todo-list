export const add = (name) => {
  return async (dispatch) => {
    fetch(`http://localhost:7000/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        name
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((res) => {
        console.log(res);
        dispatch({ type: 'ADD', payload: res });
        dispatch({ type: 'SET_ERROR', payload: null });
      })
      .catch(() => dispatch({ type: 'SET_ERROR', payload: 'Не удалось добавить дело' }))
  }
}