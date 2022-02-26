import { applyMiddleware, combineReducers, createStore } from "redux";
import {
  bikeReducer,
  bookingReducer,
  cityReducer,
  locationReducer,
  userReducer,
} from "./reducer";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({
    cities: cityReducer,
    bikes: bikeReducer,
    user: userReducer,
    booking: bookingReducer,
    locations: locationReducer,
  }),
  applyMiddleware(thunk)
);
