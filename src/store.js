import {applyMiddleware, createStore, compose} from "redux";
import {todoList} from "./reducers/todo-list.js";
import {thunk} from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(todoList, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));