import {applyMiddleware, createStore, compose} from "redux";
import {reducer} from "./reducers/reducer.js";
import {thunk} from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));