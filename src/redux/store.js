import { applyMiddleware, combineReducers, createStore } from "redux";
import { bikeReducer, cityReducer } from "./reducer";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({
    cities: cityReducer,
    bikes: bikeReducer,
  }),
  applyMiddleware(thunk)
);
