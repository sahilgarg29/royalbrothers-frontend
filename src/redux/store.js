import { applyMiddleware, combineReducers, createStore } from "redux";
import { cityReducer } from "./reducer";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({
    cities: cityReducer,
  }),
  applyMiddleware(thunk)
);
