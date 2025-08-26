const initialState = {
  todoList: [],
  sort: false,
  refresher: false,
  error: null,
  loading: true
}

export const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case 'SUCCESS_LOAD': {
      return {
        ...state,
        todoList: payload
      }
    }
    case 'TOGGLE_SORT': {
      const sortCopy = state.sort;

      return {
        ...state,
        sort: !sortCopy
      }
    }
    case 'REMOVE': {
      return {
        ...state,
        todoList: state.todoList.filter(({ id }) => id !== payload)
      }
    }
    case 'REFRESH_DATA': {
      const refresherCopy = state.refresher;
      return {
        ...state,
        refresher: !refresherCopy
      }
    }
    case 'SET_ERROR': {
      return {
        ...state,
        error: payload
      }
    }
    case 'SET_LOADING': {
      return {
        ...state,
        loading: payload
      }
    }
    default:
      return state
  }
}