const initialState = {
  todoList: [],
  loading: true,
  sort: false,
  refresher: false,
  error: null
}

export const todoList = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case 'SUCCESS_LOAD': {
      return {
        ...state,
        todoList: payload,
        loading: false
      }
    }
    case 'TOGGLE_SORT': {
      const sortCopy = state.sort;

      return {
        ...state,
        sort: !sortCopy
      }
    }
    case 'REMOVE_TODO': {
      return {
        ...state
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
    default:
      return state
  }
}